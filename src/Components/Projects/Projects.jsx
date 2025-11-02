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
                            style={{ backgroundImage: "url('/portfolioSS.jpg')" }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                        <h3> Personal Portfolio</h3>
                        <p>
                            This responsive portfolio website, built with React, provides a modern, fast user experience.

                            Navigate projects effortlessly with a dynamic, component-based design.


                        </p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>EmailJs</span>
                            <span>Framer MotionJS</span>
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
                            This Saraha-style app, powered by Node.js, lets users send and receive anonymous messages.

                            Experience fast, secure, and genuine feedback without the pressure of identity.
                        </p>
                        <div className="project-tech">
                            <span>Node.js</span>
                            <span>JavaScript</span>
                            <span>Cloudinary</span>
                        </div>
                    </motion.div>
                </motion.a>
                <motion.a href="https://github.com/omar-tarek-abdelfattah/SocialMediaApp.git" target="_blank"> 
                    <motion.div
                        className="project-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <motion.div
                            className="project-image"
                            style={{ backgroundImage: "url('/projects/example2.png')" }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                        <h3> Social media w/ chatting</h3>
                        <p>
                            This social media app, built with Node.js and TypeScript, offers seamless interaction.
                            User posts and media are securely stored and delivered globally using AWS S3.
                        </p>
                        <div className="project-tech">
                            <span>Node.js</span>
                            <span>TypeScript</span>
                            <span>Socket.io</span>
                            <span>AWS S3</span>
                        </div>
                    </motion.div>
                </motion.a>
                <motion.a href="https://eninbookings.nl" target="_blank"> 
                    <motion.div
                        className="project-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <motion.div
                            className="project-image"
                            style={{ backgroundImage: "url('/enin.jpg')" }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                        <h3> ENIN bookings</h3>
                        <p>
                           Worked on a robust frontend for a travel agency like startup. that was a custom mid-level app
                        </p>
                        <div className="project-tech">
                            <span>HTML5 & CSS3</span>
                            <span>JavaScript</span>
                            <span>YourHosting</span>
                            
                        </div>
                    </motion.div>
                </motion.a>

            </motion.div>
        </motion.section>
    );
};

export default Projects