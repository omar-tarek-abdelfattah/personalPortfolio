import { motion } from "framer-motion";

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

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="projects"
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
                My Projects
            </motion.h2>
            <motion.div
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >

                <motion.a href="https://github.com/omar-tarek-abdelfattah/personalPortfolio.git" target="_blank">
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('/projects/example.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3> Personal Portfolio</h3>
                    <p>
                        My personal portfolio built mainly with React and Framer Motion.

                        The one you are currently on.
                    </p>
                    <div className="project-tech">
                        <span>React</span>
                        <span>EmailJs</span>
                        <span>Framer Motion</span>
                    </div>
                </motion.div>
                </motion.a>
                <motion.a href="https://github.com/omar-tarek-abdelfattah/KalemnyApp.git" target="_blank">
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('/projects/example.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3> Saraha-like App</h3>
                    <p>
                        A modern SaaS platform built with Next.js and OpenAI integration,
                        featuring real-time AI-powered content generation and analytics.
                    </p>
                    <div className="project-tech">
                        <span>Next.js</span>
                        <span>OpenAI</span>
                        <span>TailwindCSS</span>
                    </div>
                </motion.div>
                </motion.a>
                <motion.a>
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('/projects/example.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3> AI SaaS Platform</h3>
                    <p>
                        A modern SaaS platform built with Next.js and OpenAI integration,
                        featuring real-time AI-powered content generation and analytics.
                    </p>
                    <div className="project-tech">
                        <span>Next.js</span>
                        <span>OpenAI</span>
                        <span>TailwindCSS</span>
                    </div>
                </motion.div>
                </motion.a>

            </motion.div>
        </motion.section>
    );
};

export default Projects