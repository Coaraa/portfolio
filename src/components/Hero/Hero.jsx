import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./hero.scss";
import Lottie from "react-lottie";
import animationData from "../../lotties/mouse-scroll.json";
import Rectangle from "./Scroll-animation/Rectangle";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Hero = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { scrollYProgress } = useScroll();
    const translateRight = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const translateLeft = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const translateRightFast = useTransform(scrollYProgress, [0, 1], [0, 1500]);

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 style={{ translateY: translateLeft }}>PORTFOLIO</motion.h2>
                    <motion.h1 style={{ translateY: translateLeft, translateX: translateLeft }} className="lastname">SITHIDEJ</motion.h1>
                    <motion.h1 style={{ translateY: translateRight, translateX: translateRight }} className="firstname">Clara</motion.h1>

                    <div className="svgContainer">
                        <motion.div style={{ translateY: translateRightFast }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                            <Lottie options={defaultOptions} height={80} width={80} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Rectangle />
        </div>
    )
}

export default Hero
