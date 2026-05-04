import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const testimonials = [
    {
        id: 1,
        name: "Maher Aymen",
        role: "IT Administrator @ AgriT| Information Systems, Support Services",
        text: `I highly recommend Omar Tarek, based on a transformative experience we shared. Omar took over the Frontend development of a complex E-commerce and Logistics management system that was previously struggling with critical structural flaws and bugs left by a former developer. With a high level of professionalism and technical expertise, Omar managed to clean up the code, grasp the complex business logic, and turn what was essentially a 'broken' project into a stable, high-performance system ready for launch.

What truly sets Omar apart is his proactive collaboration; he maintained constant communication with the Backend developers, ensuring seamless integration and making sure every detail aligned with the project’s goals. For the past 8 months, he has been exceptional in handling maintenance and rolling out continuous updates. He grasps requirements from the very first meeting and knows exactly how to align technical solutions with business needs.

I am deeply grateful for Omar’s hard work, and I am truly proud to have such a dedicated and professional talent as part of my team.`,
        linkedin: "https://www.linkedin.com/in/maher-aymen-46a955299/"
    },
];

const Testimonials = () => {
    return (
        <motion.section
            id="testimonials"
            className="testimonials"
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
                Testimonials
            </motion.h2>

            <motion.div
                className="testimonials-container"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="testimonials-swiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial-card">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.name}</h4>
                                    <div className="author-details">
                                        <span>{testimonial.role}</span>
                                        {testimonial.linkedin && (
                                            <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.section>
    );
};

export default Testimonials;
