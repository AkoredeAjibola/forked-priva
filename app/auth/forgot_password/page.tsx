"use client";

import { useForm } from "react-hook-form";
import logo from '@public/auth_logo.svg';
import Image from 'next/image';

export default function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<{ emailOrPhone: string }>();

    const onSubmit = (data: { emailOrPhone: string }) => {
        console.log("Send reset code to:", data.emailOrPhone);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            {/* <div className="flex flex-col items-center"> */}
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
                <h2 className="text-xl font-semibold mb-2">Forgot Password</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Please enter your mail or your mobile number
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register("emailOrPhone", { required: "Email or phone is required" })}
                        placeholder="Mail/Mobile No"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    {errors.emailOrPhone && (
                        <p className="text-red-500 text-sm">{errors.emailOrPhone.message}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition"
                    >
                        Send code
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/auth/login" className="text-indigo-700 font-medium hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
        // </div>
    );
}
