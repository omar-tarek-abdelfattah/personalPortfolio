import { motion } from "framer-motion"
import SyntaxHighlighter, { Prism as syntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"


const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}
export default function Hero() {
    return <>
        <motion.section id='home'
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="hero-container">
                <motion.div className="hero-content" variants={staggerContainer} initial='initial' animate='animate'>
                    <motion.div className="hero-badge"><span>👋🏽 Hello , I'm</span></motion.div>
                    <motion.h1 variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glitch">Omar Tarek</motion.h1>

                    <motion.h2 className="hero-subtitle" variants={fadeInUp}>Passionate, Business-aware MERN developer</motion.h2>

                    <motion.p className="hero-description" variants={fadeInUp}>I build scalable web/mobile solutions powered by the MERN stack. I leverage my Business Information Systems expertise to ensure my development work is always rooted in strong strategic thinking, translating your business goals directly into functional, scalable, high-performance software.</motion.p>

                    <motion.div className="cta-buttons" variants={staggerContainer}>
                        <motion.a href="#projects" className="cta-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{' '}View my work</motion.a>
                        <motion.a href="#contact" className="cta-secondary">{' '}Contact Me</motion.a>
                    </motion.div>
                    <motion.div variants={staggerContainer} className="social-links">
                        <motion.a target="_blank" href="https://github.com/omar-tarek-abdelfattah" className=""> <i className="fab fa-github"></i></motion.a>
                        <motion.a target="_blank" href="https://www.linkedin.com/in/omartareklink/" className=""> <i className="fab fa-linkedin"></i></motion.a>
                        <motion.a target="_blank" className=""> <i className="fab fa-instagram"></i></motion.a>
                    </motion.div>
                </motion.div>

                <motion.div className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="code-display">
                        <SyntaxHighlighter language="typescript"
                            customStyle={{
                                margin: 0,
                                padding: "2rem",
                                height: "100%",
                                borderRadius: "20px",
                                background: "rgba(30,41,59,0.8)",
                                backdropFilter: "blur(10px)",
                                marginBottom: "50px"
                            }}
                            style={vscDarkPlus} >
                            {`
const aboutMe : DevProfile = {
    codeName:"Omar Tarek",
    origin:"🌍 mokkatam is my city <3",
    role:"Fullstack MERN Wizard",
    stack:{
        languages:["JavaScript" , "TypeScript" , "Python" , "SQL"],
        frameworks: ["ReactJs" , "NextJs" , "NodeJs" , "NestJs" , "Tailwind"]
    },
    traits:[
        "pixel-perfectionist",
        "Inspirational-leader",
        "API whisperer",
        "NodeJs Enthusiast"
    ],
    missionStatement: 
    "Turning ideas into Apps & making your business-dream come true",
    availability :"Available for hire"
};                                                                        
        `}
                        </SyntaxHighlighter>
                    </div>
                    <motion.div className="floating-card" animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                        <div className="card-content">
                            <span className="card-icon">💻</span>
                            <span className="card-text">Currently working in Threedos student activity 💜</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </motion.section>
    </>
}
