"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import solution from "../../public/solution_image.svg";

export default function SolutionSection() {
    // list data
    const solutions = [
        {
            title: "Enable secure hospital-to-hospital data sharing",
            desc: "Seamless, encrypted communication between healthcare facilities across Africa.",
        },
        {
            title: "Reduce duplicate tests and save costs",
            desc: "Intelligent data sharing eliminates unnecessary repeat testing, saving money for patients.",
        },
        {
            title: "Give HMOs real-time validation of medical claims",
            desc: "Instant access to verified patient data for faster, more accurate claim processing.",
        },
        {
            title: "Provide AI assistants for healthcare stakeholders",
            desc: "Smart AI tools that help doctors, patients, and administrators make better healthcare decisions.",
        },
        {
            title: "Build patient trust through compliance-first design",
            desc: "Bank-grade security and international compliance standards ensure patient data is always protected.",
        },
    ];

    return (
        <section className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-start gap-12">
            {/* Left side - Image with labels */}
            <motion.div
                className="flex-1 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="relative w-full min-h-[250px] flex justify-center items-center">
                    <Image
                        src={solution}
                        alt="Solution"
                        width={500}
                        height={500}
                        className="w-auto h-full max-h-[300px] md:max-h-[500px]"
                    />
                </div>
                {/* Top-left label */}
                <motion.div
                    className="absolute top-5 left-5 bg-white shadow px-4 py-2 rounded-md text-green-600 font-bold text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.3 }}
                >
                    3x
                    <div className="text-xs font-normal text-gray-600">
                        faster claim processing
                    </div>
                </motion.div>

                {/* Bottom-left label */}
                <motion.div
                    className="absolute bottom-5 left-5 bg-white shadow px-4 py-2 rounded-md text-green-600 font-bold text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.3 }}
                >
                    85%
                    <div className="text-xs font-normal text-gray-600">
                        reduction in duplicate testing
                    </div>
                </motion.div>
            </motion.div>

            {/* Right side - Solution text */}
            <div className="flex-1">
                {/* Pill */}
                <motion.span
                    className="inline-block bg-green-50 text-green-600 font-semibold text-sm px-3 py-1 rounded-full"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                >
                    Our Solution
                </motion.span>

                {/* Heading */}
                <motion.h3
                    className="text-2xl md:text-3xl font-bold mt-4 leading-snug"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                >
                    Privacure is designed to{" "}
                    <span className="text-green-600">transform African healthcare</span>
                </motion.h3>

                {/* Solution list */}
                <div className="mt-8 space-y-6">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3, delay: 0.3 + i * 0.2 }}
                        >
                            <p className="font-semibold text-gray-900">{item.title}</p>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}