'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@components/Button';

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-between bg-white px-6 py-10">
            {/* Logo */}
            <div className="mt-8">
                <Image src="/logo.svg" alt="PrivaCure Logo" width={100} height={100} />
            </div>

            {/* Illustration */}
            <div className="w-full max-w-md mt-10">
                <Image
                    src="/welcome-illustration.svg"
                    alt="Welcome illustration"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
                <Button
                    type='submit'
                    className="w-full py-3 text-white bg-primary-600 rounded-full hover:bg-primary-700"
                    onSubmitHandler={() => router.push('/login')}
                >
                    Login
                </Button>
                <Button
                    type='submit'
                    className="w-full py-3 border border-primary-600 text-primary-600 rounded-full hover:bg-primary-50"
                    onSubmitHandler={() => router.push('/signup')}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
}
