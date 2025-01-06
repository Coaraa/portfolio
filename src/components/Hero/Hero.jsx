import React from "react";
import { motion} from "framer-motion";
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

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>PORTFOLIO</motion.h2>
                    <motion.h1 variants={textVariants} className="lastname">SITHIDEJ</motion.h1>
                    <motion.h1 variants={textVariants} className="firstname">Clara</motion.h1>

                    <div className="svgContainer">
                        <motion.div className="mouseSvg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
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
