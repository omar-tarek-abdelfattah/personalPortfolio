import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: "",
    });

    // Initialize EmailJS on component mount
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if environment variables are set
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: "EmailJS configuration is missing. Please check your environment variables.",
            });
            return;
        }

        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: "",
        });

        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    reply_to: formData.email,
                },
                publicKey
            );

            if (result.text === "OK") {
                setFormStatus({
                    submitting: false,
                    success: true,
                    error: false,
                    message: "Message sent successfully!",
                });

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: error.text || "Failed to send message. Please try again.",
            });
        }
    };

    return (
        <motion.section
            id="contact"
            className="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
            >
                Get in Touch
            </motion.h2>

            <motion.p className="contact-description" variants={fadeInUp}>I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! 😁</motion.p>

            <motion.div className="contact-content" variants={fadeInUp}>
                <motion.form className="contact-form"
                onSubmit={handleSubmit}
                >
                    <motion.input
                        type="text"
                        name="name"
                        placeholder="Your Name..."
                        value={formData.name}
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handleInputChange}
                    />
                    <motion.input
                        type="email"
                        name="email"
                        placeholder="Your Email..."
                        value={formData.email}
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handleInputChange}
                    />
                    <motion.textarea
                        name="message"
                        placeholder="Your Message..."
                        value={formData.message}
                        required
                        whileFocus={{ scale: 1.02 }}
                        onChange={handleInputChange}
                    />

                    <motion.button
                        className="submit-btn"
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    disabled={formStatus.submitting}
                    >
                        {formStatus.submitting ? "Sending..." : "Send Message"}
                    </motion.button>

                    {formStatus.message && (
                        <motion.div
                            className={`form-status ${formStatus.success ? "success" : "error"
                                } `}
                        >
                            {formStatus.message}
                        </motion.div>
                    )}
                </motion.form>
            </motion.div>
        </motion.section>
    );
};


export default Contact