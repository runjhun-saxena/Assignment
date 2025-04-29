import React from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="about" className="py-16 lg:py-24 bg-white"
        style={{
            backgroundColor: "#f5f3f8",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230b19f4' fill-opacity='0.06'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="inline-block text-centre px-3 py-1 text-2xl font-medium text-[#27216a] bg-blue-100 rounded-full mb-4">
                                About Us
                            </span>
                            <motion.h1
                                ref={ref}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#27216a] to-[#f45a5a] "
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Transforming Businesses Through Excellence
                            </motion.h1>
                            <p className="text-lg text-gray-900 mb-6">
                                Founded in 2020, Zylentrix has helped over 200 businesses across multiple industries
                                overcome challenges and achieve sustainable growth. Our team of seasoned consultants
                                brings decades of combined experience to every client engagement.
                            </p>
                            <p className="text-lg text-gray-900 mb-8">
                                We believe in forming true partnerships with our clients, taking the time to understand
                                your unique situation and tailoring our approach to deliver meaningful results that last.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="border border-gray-200 rounded-lg p-4 text-center text-white hover:shadow-indigo-300 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                    <p className="text-3xl font-bold text-[#27216a] mb-1 ">200+</p>
                                    <p className="text-gray-600">Clients Served</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 text-center text-white hover:shadow-indigo-300 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                    <p className="text-3xl font-bold text-[#27216a] mb-1">95%</p>
                                    <p className="text-gray-600">Client Retention</p>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 text-center text-white hover:shadow-indigo-300 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                    <p className="text-3xl font-bold text-[#27216a] mb-1">12+</p>
                                    <p className="text-gray-600">Industries</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="rounded-lg overflow-hidden shadow-xl shadow-indigo-300 ">
                                    <img
                                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="Team collaboration"
                                        className="w-full h-auto "
                                    />
                                </div>

                                {/* Decorative elements */}

                                {/* Floating stat card */}
                                {/* <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 z-10">
                                    <p className="text-2xl font-bold text-[#27216a] mb-1">10+</p>
                                    <p className="text-gray-600 text-sm">Years of Excellence</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About