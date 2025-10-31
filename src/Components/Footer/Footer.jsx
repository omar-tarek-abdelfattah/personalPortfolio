import './Footer.css'
import { motion } from 'framer-motion'


export default function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <p> &copy; 2025 PedroTech. All rights reserved.</p>
        </motion.footer>
    )
}
