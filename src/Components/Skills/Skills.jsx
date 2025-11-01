import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                My Technical Skills
            </motion.h2>
            <motion.div
                ref={ref}
                className="skills-container"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="skill-item"
                        variants={fadeInUp}
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
        </motion.section>
    );
};

export default Skills;

