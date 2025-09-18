"use client";

import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";
import { Shield, Globe, Lock } from "lucide-react";

const parentContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.22,
            delayChildren: 0.06,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function VisionSection(): JSX.Element {
    return (
        <div className="w-full">
            {/* ================= VISION (white card) ================= */}
            <section className="py-20 bg-gray-50">
                <motion.div
                    className="max-w-5xl mx-auto px-6"
                    variants={parentContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                >
                    {/* Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-white rounded-2xl shadow-lg p-10"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl font-bold text-center mb-4"
                        >
                            Our Vision
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-center text-gray-600 max-w-3xl mx-auto mb-10"
                        >
                            To make healthcare data accessible, secure, and portable for every
                            African patient — creating a continent where your medical history
                            travels with you and your privacy is protected.
                        </motion.p>

                        {/* Features with icons + text */}
                        <motion.div
                            variants={parentContainer}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
                        >
                            {[
                                {
                                    label: "Accessible",
                                    desc: "Healthcare data available when and where you need it.",
                                    icon: <Globe className="w-8 h-8 text-blue-600" />,
                                },
                                {
                                    label: "Secure",
                                    desc: "Bank-grade security protecting your medical privacy.",
                                    icon: <Lock className="w-8 h-8 text-green-600" />,
                                },
                                {
                                    label: "Portable",
                                    desc: "Your health data travels with you across Africa.",
                                    icon: <Shield className="w-8 h-8 text-purple-600" />,
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.label}
                                    variants={fadeInUp}
                                    className="flex flex-col items-center"
                                >
                                    {/* Icon in circle */}
                                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-sm">
                                        {item.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 max-w-[220px]">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ================ JOIN THE HEALTHCARE REVOLUTION (gradient) ================ */}
            <section className="py-20">
                <motion.div
                    variants={parentContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className="max-w-5xl mx-auto px-6"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="rounded-2xl p-10 text-white"
                        style={{
                            background: "linear-gradient(90deg, #1e3a8a 0%, #00c58b 100%)",
                        }}
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="text-3xl font-bold text-center mb-4"
                        >
                            Join the Healthcare Revolution
                        </motion.h3>

                        <motion.p
                            variants={fadeInUp}
                            className="text-center max-w-3xl mx-auto mb-8"
                        >
                            Be part of the movement transforming healthcare across Africa.
                            Together we can build a future where quality healthcare is
                            accessible, secure, and efficient for everyone.
                        </motion.p>

                        <motion.div
                            variants={parentContainer}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.button
                                variants={fadeInUp}
                                className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-md hover:bg-gray-100 transition"
                            >
                                Learn more about our impact
                            </motion.button>

                            <motion.button
                                variants={fadeInUp}
                                className="px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-blue-900 transition"
                            >
                                Partner with us
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <div className="h-14" />
                </motion.div>
            </section>
        </div>
    );
}