import "./contact.scss";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../lotties/message.json";

const Contact = () => {
    const variants = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>N'hésitez pas à me contacter !</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail <img src="/email.png" alt="Email" /></h2>
                    <span><a href="mailto:clara.sithidej@gmail.com">clara.sithidej@gmail.com</a></span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Profil LinkedIn <img src="/linkedin.png" alt="LinkedIn" /></h2>
                    <span><a href="https://www.linkedin.com/in/clara-sithidej/">SITHIDEJ Clara</a></span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Profil GitHub <img src="/github.png" alt="GitHub" /></h2>
                    <span><a href="https://github.com/Coaraa">Coaraa</a></span>
                </motion.div>
            </motion.div>
            <div className="svgContainer">
                <motion.div className="phoneSvg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <Lottie options={defaultOptions} height={550} width={550} />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact
