"use client"
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactPage = () => {
    const [formData, setFormdata] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState<FormStatus>("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormdata(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setFormStatus("success");
            setFormdata({ name: "", email: "", message: "" });
            
            // Reset status after 3 seconds
            setTimeout(() => setFormStatus("idle"), 3000);
        }
        catch (error) {
            console.error("Error sending message:", error);
            setFormStatus("error");
            
            // Reset error status after 3 seconds
            setTimeout(() => setFormStatus("idle"), 3000);
        }
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const cardVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        }
    };

    const formVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        }
    };

    const inputVariants = {
        focus: {
            scale: 1.02,
            transition: { type: "spring", stiffness: 300 }
        },
        blur: {
            scale: 1,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const buttonVariants = {
        idle: { 
            scale: 1,
            backgroundColor: "var(--primary-color, #3b82f6)"
        },
        hover: { 
            scale: 1.05,
            backgroundColor: "var(--primary-dark, #2563eb)",
            transition: { type: "spring", stiffness: 400 }
        },
        tap: { 
            scale: 0.95,
            transition: { type: "spring", stiffness: 400 }
        },
        submitting: {
            scale: 1,
            backgroundColor: "var(--primary-light, #60a5fa)",
            transition: { duration: 0.2 }
        }
    };

    const iconBounceVariants = {
        hover: {
            y: [-2, 2, -2],
            transition: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div 
            className="container max-w-7xl mx-auto py-20 relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Floating Background Elements */}
            <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-primary/10 rounded-full"
                        style={{
                            left: `${20 + i * 12}%`,
                            top: `${10 + (i % 3) * 30}%`,
                        }}
                        variants={floatingVariants}
                        animate="animate"
                        transition={{
                            delay: i * 0.5,
                            duration: 6 + Math.random() * 4,
                        }}
                    />
                ))}
            </motion.div>

            {/* Header */}
            <motion.div
                className="text-center mb-16"
                variants={itemVariants}
            >
                <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 20,
                        delay: 0.3 
                    }}
                >
                    Contact Me
                </motion.h1>
                <motion.div 
                    className="w-20 h-1 bg-gradient-to-r from-primary to-accent-strong mx-auto rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                />
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                variants={containerVariants}
            >
                {/* Contact Info */}
                <motion.div 
                    className="space-y-8"
                    variants={cardVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-heading">
                            Get in Touch
                        </h2>
                        <p className="text-secondary md:w-2/3 text-lg leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas, or
                            opportunities to be part of your visions.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Email */}
                        <motion.div 
                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface-strong/70 transition-colors duration-300"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center"
                                whileHover="hover"
                                variants={iconBounceVariants}
                            >
                                <FaEnvelope className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                                <h3 className="font-semibold text-heading">Email:</h3>
                                <Link
                                    href="mailto:rajpootrithin@gmail.com"
                                    className="text-secondary hover:text-primary transition-colors duration-300"
                                >
                                    rajpootrithin@gmail.com
                                </Link>
                            </div>
                        </motion.div>

                        {/* Phone */}
                        <motion.div 
                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface-strong/70 transition-colors duration-300"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center"
                                whileHover="hover"
                                variants={iconBounceVariants}
                            >
                                <FaPhone className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                                <h3 className="font-semibold text-heading">Mobile:</h3>
                                <Link
                                    href="tel:+917013047820"
                                    className="text-secondary hover:text-primary transition-colors duration-300"
                                >
                                    (+91) 7013047820
                                </Link>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div 
                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface-strong/70 transition-colors duration-300"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center"
                                whileHover="hover"
                                variants={iconBounceVariants}
                            >
                                <FaMapMarkerAlt className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                                <h3 className="font-semibold text-heading">Location:</h3>
                                <p className="text-secondary">Hyderabad, Telangana, India</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    className="bg-surface/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-border"
                    variants={formVariants}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ 
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        scale: 1.02
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.form 
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Name Field */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-heading">
                                Name
                            </label>
                            <motion.input
                                type="text"
                                id="name"
                                name="name"
                                required
                                onChange={handleChange}
                                value={formData.name}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border border-border bg-surface-strong/80 text-text rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 placeholder:text-secondary"
                                variants={inputVariants}
                                whileFocus="focus"
                                initial="blur"
                            />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-heading">
                                Email
                            </label>
                            <motion.input
                                type="email"
                                id="email"
                                name="email"
                                required
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-border bg-surface-strong/80 text-text rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 placeholder:text-secondary"
                                variants={inputVariants}
                                whileFocus="focus"
                                initial="blur"
                            />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div variants={itemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-heading">
                                Message
                            </label>
                            <motion.textarea
                                rows={5}
                                id="message"
                                name="message"
                                required
                                onChange={handleChange}
                                value={formData.message}
                                placeholder="Enter your message"
                                className="w-full px-4 py-3 border border-border bg-surface-strong/80 text-text rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 placeholder:text-secondary resize-none"
                                variants={inputVariants}
                                whileFocus="focus"
                                initial="blur"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={itemVariants}>
                            <motion.button 
                                type="submit" 
                                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg"
                                variants={buttonVariants}
                                animate={formStatus === "submitting" ? "submitting" : "idle"}
                                whileHover="hover"
                                whileTap="tap"
                                disabled={formStatus === "submitting"}
                            >
                                {formStatus === "submitting" ? (
                                    <>
                                        <motion.div
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Status Messages */}
                        <AnimatePresence mode="wait">
                            {formStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                    className="flex items-center gap-2 text-green-600 text-center justify-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    >
                                        <FaCheckCircle className="w-5 h-5" />
                                    </motion.div>
                                    Message sent successfully!
                                </motion.div>
                            )}

                            {formStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                    className="flex items-center gap-2 text-red-600 text-center justify-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    >
                                        <FaExclamationTriangle className="w-5 h-5" />
                                    </motion.div>
                                    Failed to send message. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ContactPage;