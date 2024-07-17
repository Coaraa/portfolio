import { motion } from "framer-motion";
import "./hero.scss";

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

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-500%",
        transition: {
            delay: 3,
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>PORTFOLIO</motion.h2>
                    <motion.h1 variants={textVariants}>SITHIDEJ Clara</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.a href="#Portfolio" variants={textVariants}>↓ Découvrir mes projets ↓</motion.a>
                        <motion.a href="#Contact" variants={textVariants}>Me contacter</motion.a>
                    </motion.div>
                </motion.div>
                <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                    Étudiante ingénieure en informatique à Polytech Lyon
                </motion.div>
                <div className="imageContainer">
                    <img src="/hero.png" alt="Portrait" />
                </div>
            </div>
        </div>
    )
}

export default Hero
