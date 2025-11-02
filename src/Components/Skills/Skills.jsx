import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
        { name: "JavaScript", percentage: 95 },
        { name: "HTML5 & CSS3", percentage: 99 },
        { name: "React", percentage: 80 },
        { name: "Node.js", percentage: 90 },
        { name: "TypeScript", percentage: 85 },
        { name: "MongoDB", percentage: 90 },
        { name: "Express.js", percentage: 95 },
        { name: "Nest.js", percentage: 70 },
        { name: "Shopify + AI Integration", percentage: 70 },
        { name: "Python (currently learning)", percentage: 60 },
        { name: "Python dataVisualization (currently learning)", percentage: 50 },
        { name: "AI + ML (currently learning)", percentage: 50 },
        { name: "AWS", percentage: 50 },
        { name: "Excel", percentage: 80 },
        { name: "Canva", percentage: 80 },
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
                    className="skills-container"
                    // variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-item"
                            // variants={fadeInUp}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.percentage}%</span>
                            </div>
                            <div className="skill-progress-bar">
                                <motion.div
                                    className="skill-progress-fill"
                                    initial={{ width: 0 }}
                                    animate={
                                        isInView
                                            ? { width: `${skill.percentage}%` }
                                            : { width: 0 }
                                    }
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.1,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
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

