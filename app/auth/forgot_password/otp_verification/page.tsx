"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import logo from '@public/auth_logo.svg';
import Image from 'next/image';

interface OtpFormData {
    password: string;
    confirmPassword: string;
}

export default function OtpVerification() {
    const { register, handleSubmit, formState: { errors } } = useForm<OtpFormData>();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleOtpChange = (index: number, value: string) => {
        if (/^[0-9]?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto move forward
            if (value && index < otp.length - 1) {
                inputsRef.current[index + 1]?.focus();
            }
            // Auto move back on delete
            if (!value && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    const onSubmit = (data: OtpFormData) => {
        console.log("OTP:", otp.join(""), "Password:", data.password);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            {/* Logo outside card */}
            <div className="p-[37px] flex justify-center">
                <Image
                    src={logo}
                    alt="logo"
                    width={91}
                    height={75}
                    className="w-[91px] h-[75px]"
                />
            </div>

            {/* Card */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-semibold mb-4">OTP Verification</h2>

                {/* OTP Input */}
                <div className="flex justify-between mb-6">
                    {otp.map((digit, idx) => (
                        <input
                            key={idx}
                            type="text"
                            maxLength={1}
                            value={digit}
                            ref={(el) => {
                                inputsRef.current[idx] = el;
                            }}
                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                            className="w-12 h-12 text-center border rounded-lg focus:ring-2 focus:ring-indigo-600"
                        />
                    ))}
                </div>
                <button className="text-sm text-indigo-600 mb-6 hover:underline">
                    Resend OTP
                </button>

                {/* Password Reset Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Min length is 8" },
                        })}
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}

                    <input
                        {...register("confirmPassword", {
                            required: "Confirm your password",
                        })}
                        type="password"
                        placeholder="Confirm password"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </div>
        // </div>
    );
}
