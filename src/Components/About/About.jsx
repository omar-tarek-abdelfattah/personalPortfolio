import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/personal pics/bashra7.jpg",
        "/personal pics/FROTEND HEAD ANNOUNCEMENT.jpg", // Replace with your image paths
        "/personal pics/blowingKisses.jpg",
        "/personal pics/bashra72.jpg",
        "/personal pics/4X6image.jpg",
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImage(index);
    };

    return (
        <motion.section
            id="about"
            className="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                className="glitch"

            >
                About Me
            </motion.h2>
            <motion.div
                className="about-content"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.div className="about-image-container"
                    // variants={fadeInUp}
                    initial={{ initial: { opacity: 0 } }}
                    whileInView="animate"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <div className="about-slider">
                        <button
                            className="slider-btn slider-btn-prev"
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            ‹
                        </button>
                        <div className="about-image-wrapper">
                            <motion.div
                                key={currentImage}
                                className="about-image"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={images[currentImage]}
                                    alt={`About Me ${currentImage + 1}`}
                                />
                            </motion.div>
                        </div>
                        <button
                            className="slider-btn slider-btn-next"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            ›
                        </button>
                    </div>
                    <div className="slider-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentImage ? "active" : ""
                                    }`}
                                onClick={() => goToImage(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </motion.div>
                <motion.div className="about-description">

                    <h3>Who I am</h3>
                    <p>
                        I am a MERN Stack Developer and a Business Information Systems (BIS) graduate dedicated to building applications that are not just scalable and elegant, but are strategically aligned with business objectives. I thrive at the intersection of technology and commerce, leveraging my technical expertise in MongoDB, Express.js, React, and Node.js to deliver robust, full-stack solutions.
                    </p>
                    <h3>Why Me</h3>
                    <p>
                        My BIS foundation allows me to move beyond code; I excel at translating complex business requirements into efficient technical architecture and designing systems that drive tangible ROI and operational efficiency.
                    </p>
                    <h3>How Threedos Helped Me Excel Early in My Career</h3>
                    <p>
                        Beyond the code, my experiences in leadership roles, particularly during my stint with Threedos student activity, have honed critical soft skills. I bring strong communication, effective presentation abilities, and proven leadership to any team or project, ensuring clear collaboration and successful feature deployment from concept to launch.
                    </p>
                    <h3>My Future</h3>
                    <p>
                        I am currently focused on expanding my capabilities into future-forward technologies, actively exploring AI integration and Machine Learning (ML) concepts. My goal is to develop intelligent applications that not only solve current business problems but also predict future user needs, setting the stage for truly innovative digital experiences.
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default About;

