"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import problem from "../../public/problem_image.svg";

export default function ProblemSection() {
    const problems = [
        {
            title: "Patients repeat expensive tests at new hospitals",
            desc: "Lack of data sharing forces patients to redo costly medical tests every time they visit a new healthcare facility.",
        },
        {
            title: "Hospitals lack trusted, compliant interoperability tools",
            desc: "Healthcare providers struggle with fragmented systems that don’t communicate securely with each other.",
        },
        {
            title: "HMOs face fraudulent claims and data gaps",
            desc: "Insurance providers struggle to validate medical claims without access to real-time, verified patient data.",
        },
        {
            title: "Patients lose ownership of their health journeys",
            desc: "Without patient-owned health records, patients have limited control and visibility over their own healthcare history.",
        },
    ];

    return (
        <section className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start gap-12">
            {/* Left side - The Problem */}
            <div className="flex-1">
                {/* Pill */}
                <motion.span
                    className="inline-block bg-red-100 text-red-600 font-semibold text-sm px-3 py-1 rounded-full"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    The Problem
                </motion.span>

                {/* Heading */}
                <motion.h3
                    className="text-2xl md:text-3xl font-bold mt-4 leading-snug"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Healthcare data in Africa is{" "}
                    <span className="text-red-600">
                        fragmented, insecure, and inefficient.
                    </span>
                </motion.h3>

                {/* Problem list */}
                <div className="mt-8 space-y-6">
                    {problems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                        >
                            <p className="font-semibold text-gray-900">{item.title}</p>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right side - Image with labels */}
            <motion.div
                className="flex-1 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative w-full min-h-[250px] flex justify-center items-center">
                    <Image
                        src={problem}
                        alt="Problem Illustration"
                        width={500}
                        height={500}
                        className="w-auto h-full max-h-[300px] md:max-h-[500px]"
                    />
                </div>

                {/* Top-right label */}
                <motion.div
                    className="absolute top-5 right-5 bg-white shadow px-4 py-2 rounded-md text-red-600 font-bold text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    $2.1 Billion
                    <div className="text-xs font-normal text-gray-600">
                        lost annually to inefficiencies
                    </div>
                </motion.div>

                {/* Bottom-left label */}
                <motion.div
                    className="absolute bottom-5 left-5 bg-white shadow px-4 py-2 rounded-md text-red-600 font-bold text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    60%
                    <div className="text-xs font-normal text-gray-600">
                        of tests repeated unnecessarily
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}