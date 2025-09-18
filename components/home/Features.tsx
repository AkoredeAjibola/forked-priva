import { motion, useInView } from "framer-motion";
import { BarChart3, Brain, Globe, HeartPulse, Languages, Shield, Smartphone, Users } from "lucide-react";
import { useRef } from "react";

export const FeaturesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px" });

    const features = [
        {
            icon: <Shield className="h-10 w-10" />,
            title: "Bank-grade Security & Compliance",
            description: "HIPAA/GDPR-ready infrastructure with end-to-end encryption and advanced cybersecurity protocols.",
            status: "Available in MVP",
        },
        {
            icon: <Brain className="h-10 w-10" />,
            title: "AI Health Assistant",
            description: "Intelligent support for clinicians, patients, and administrators with contextual recommendations and insights.",
            status: "Available in MVP",
        },
        {
            icon: <Globe className="h-10 w-10" />,
            title: "Interoperability Dashboard",
            description: "Unified interface connecting hospitals, laboratories, and HMOs for seamless data exchange.",
            status: "Available in MVP",
        },

        {
            icon: <BarChart3 className="h-10 w-10" />,
            title: "Analytics & Reporting",
            description: "Comprehensive data insights and reporting tools for evidence-based hospital decision-making.",
            status: "Available in MVP",
        },
        {
            icon: <Users className="h-10 w-10" />,
            title: "Seamless Patient Transfer",
            description: "Automatic medical record sharing during patient transfers between healthcare facilities.",
            status: "Available in MVP",
        },

        {
            icon: <HeartPulse className="h-10 w-10" />,
            title: "Patient-Centric Design",
            description: "Empowering patients with ownership and control over their health data and medical journey.",
            status: "Available in MVP",
        },
    ];

    const africaFeatures = [
        {
            icon: <Smartphone className="h-6 w-6" />,
            title: "Low-bandwidth optimized",
        },
        {
            icon: <Languages className="h-6 w-6" />,
            title: "Multi-language support",
        },
        {
            icon: <Globe className="h-6 w-6" />,
            title: "Mobile-first design",
        },
    ];

    return (
        <section ref={ref} className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-5 py-1 mb-6 rounded-full text-sm font-medium text-[#191279] bg-gray-200">

                    Building the future of African healthcare
                </motion.div>

            
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Everything you need for{" "}
                    <span className="text-green-300">
                        secure healthcare interoperability
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
                >
                    Privacure combines cutting-edge technology with healthcare expertise to deliver a comprehensive platform that addresses Africa&apos;s unique healthcare challenges.
                </motion.p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            <div className="text-blue-600 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <div className="text-sm text-blue-600 font-semibold">{feature.status}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Africa Specific Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="rounded-2xl bg-gradient-to-r from-primary-900 to-[#00c58b] text-white p-8 shadow-lg text-center"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center">
                        Built specifically for African healthcare infrastructure
                    </h3>
                    <p className="text-center mb-8 max-w-3xl mx-auto">
                        Our platform is designed to work efficiently with limited internet connectivity, diverse healthcare systems, and varying levels of digital literacy across the continent.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {africaFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="bg-blue-500 p-3 rounded-full mb-4">
                                    {feature.icon}
                                </div>
                                <div className="font-semibold">{feature.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};