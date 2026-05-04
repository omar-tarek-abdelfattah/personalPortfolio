import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import "./Skills.css";

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


const Skills = () => {
    const ref = useRef(null);
    const softRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeTab, setActiveTab] = useState("technical");

    const skills = [
        { name: "JavaScript" },
        { name: "HTML5 & CSS3" },
        { name: "React" },
        { name: "Node.js" },
        { name: "TypeScript" },
        { name: "MongoDB" },
        { name: "Express.js" },
        { name: "Nest.js" },
        { name: "Shopify + AI Integration" },
        { name: "Python (currently learning)" },
        { name: "Python dataVisualization (currently learning)" },
        { name: "AI + ML (currently learning)" },
        { name: "AWS" },
        { name: "Excel" },
        { name: "Canva" },
    ];
    const softSkills = [
        { name: "Leadership", experience: "In Threedos i had alot of experiences where i got to work on my leadership skills, as i was a team leader in the conference of my first season. and the frontend council's head where i lead a team of 4 instructors" },
        { name: "Communication", experience: "Excellent communication as practiced on it in threedos as a delegate in teams, an instructor alongside 3 other instructors and finally as a head where i communicated through my instructors & delegates" },
        { name: "Presentation skills", experience: "My presentation skills are proven in high-stakes environments. As a Threedos Delegate, I successfully presented my team’s project to a CEO. As an Instructor, I honed my technical communication by tutoring and engaging over 60 delegates, demonstrating versatility in audience engagement." },
        { name: "Problem solving", experience: "My problem-solving skills were rigorously tested as a Threedos Delegate. I specialized in finding effective, technical solutions for the complex architectural and integration challenges required to successfully create our E-mall project, ensuring technical feasibility and strategic alignment." },
        { name: "Requirements gathering", experience: "My Requirements Gathering skills are versatile and proven. I obtained strategic vision directly from the ENIN's CEO and collaborated closely with the internal business team during the Threedos conference to translate high-level goals into granular, actionable technical specifications." },
    ];

    return (
        <motion.section
            id="skills"
            className="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                My Skills
            </motion.h2>

            <div className="skills-tabs">
                <button
                    className={`tab-btn ${activeTab === "technical" ? "active" : ""}`}
                    onClick={() => setActiveTab("technical")}
                >
                    Technical Skills
                </button>
                <button
                    className={`tab-btn ${activeTab === "soft" ? "active" : ""}`}
                    onClick={() => setActiveTab("soft")}
                >
                    Soft Skills
                </button>
            </div>

            {activeTab === "technical" ? (
                <motion.div
                    ref={ref}
                    className="skills-container slider-container"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        freeMode={true}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        className="skills-swiper"
                    >
                        {skills.map((skill, index) => (
                            <SwiperSlide key={skill.name} style={{ width: 'auto' }}>
                                <motion.div
                                    className="skill-item tech-skill-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                >
                                    <div className="skill-header">
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            ) : (
                <motion.div
                    ref={softRef}
                    className="skills-container"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-item soft-skill-item"
                            // variants={fadeInUp}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                            </div>
                            <div className="soft-skill-description">
                                {skill.experience}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.section>
    );
};

export default Skills;

