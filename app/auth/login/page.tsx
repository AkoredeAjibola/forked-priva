/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@services/api';
import { loginSchema } from '@schemas/schemas';
import useFormHook from '@hooks/useFormHook';
import Button from '@components/Button';
import Link from 'next/link';
import { useAuth } from '@context/AuthContext';

const LoginPage = () => {
    const router = useRouter();
    const { setUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        submitError,
        setSubmitError,
    } = useFormHook(loginSchema, async (data) => {
        try {
            const response = await authService.login({
                login: data.login,
                password: data.password,
            });

            setUser({
                id: response.user.id,
                email: response.user.email,
                name: response.user.name,
                token: response.token,
            });

            router.push('/dashboard');
        } catch (error: any) {
            setSubmitError(error.response?.data?.message || 'Login failed. Please try again.');
        }
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-primary-600">PrivaCure</h1>
                    <p className="text-gray-500">Sign in to your account</p>
                </div>

                {/* Error Message */}
                {submitError && (
                    <div className="p-3 bg-error/10 text-error rounded-lg text-sm">
                        {submitError}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email/Username Field */}
                    <div>
                        <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email or Username
                        </label>
                        <input
                            id="login"
                            {...register("login")}
                            type="text"
                            className={`w-full px-4 py-2.5 border ${errors.login ? 'border-error' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                            placeholder="Enter your email or username"
                            autoComplete="username"
                        />
                        {errors.login && (
                            <p className="mt-1.5 text-sm text-error">{errors.login.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-sm font-medium text-primary-600 hover:text-primary-500"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            id="password"
                            {...register("password")}
                            type="password"
                            className={`w-full px-4 py-2.5 border ${errors.password ? 'border-error' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        {errors.password && (
                            <p className="mt-1.5 text-sm text-error">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            id="rememberMe"
                            {...register("rememberMe")}
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Logging in...
                            </span>
                        ) : 'Sign in'}
                    </Button>
                </form>

                {/* Sign Up Link */}
                <div className="text-center text-sm text-gray-500">
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/signup"
                        className="font-medium text-primary-600 hover:text-primary-500"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;