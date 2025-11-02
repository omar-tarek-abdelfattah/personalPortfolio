import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import "./Navbar.css"

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

const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.3
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.05
        }
    }
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return <>
        <motion.nav className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>

            <motion.div className='logo' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Omar Tarek's portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <motion.ul className='nav-links desktop-nav'
                variants={staggerContainer}
                animate='animate'
                initial='initial'>
                <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <a href="#home">Home</a>
                </motion.li>
                <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <a href="#about">About</a>
                </motion.li>
                <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <a href="#skills">Skills</a>
                </motion.li>
                <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} initial="initial" whileInView="animate" viewport={{ once: true }} whileTap={{ scale: 0.95 }}>
                    <a href="#projects">Projects</a>
                </motion.li>
                <motion.li variants={fadeInUp} whileHover={{ scale: 1.1 }} initial="initial" whileInView="animate" viewport={{ once: true }} whileTap={{ scale: 0.95 }}>
                    <a href="#contact">Contact</a>
                </motion.li>
            </motion.ul>

            {/* Burger Menu Button */}
            <motion.button 
                className="burger-menu"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
            >
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </motion.button>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="mobile-menu-overlay"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        onClick={closeMenu}
                    >
                        <motion.ul 
                            className="mobile-nav-links"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.li 
                                whileHover={{ x: 10 }} 
                                whileTap={{ scale: 0.95 }}
                                onClick={closeMenu}
                            >
                                <a href="#home">Home</a>
                            </motion.li>
                            <motion.li 
                                whileHover={{ x: 10 }} 
                                whileTap={{ scale: 0.95 }}
                                onClick={closeMenu}
                            >
                                <a href="#about">About</a>
                            </motion.li>
                            <motion.li 
                                whileHover={{ x: 10 }} 
                                whileTap={{ scale: 0.95 }}
                                onClick={closeMenu}
                            >
                                <a href="#skills">Skills</a>
                            </motion.li>
                            <motion.li 
                                whileHover={{ x: 10 }} 
                                whileTap={{ scale: 0.95 }}
                                onClick={closeMenu}
                            >
                                <a href="#projects">Projects</a>
                            </motion.li>
                            <motion.li 
                                whileHover={{ x: 10 }} 
                                whileTap={{ scale: 0.95 }}
                                onClick={closeMenu}
                            >
                                <a href="#contact">Contact</a>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    </>
}
