import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./rectangle.scss";

const Rectangle = () => {
    const { scrollY } = useScroll();

    const heightDown = useTransform(scrollY, [0, 800], ["0px", "50vh"]); 
    const heightUp = useTransform(scrollY, [0, 800], ["0px", "50vh"]);
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    
    return (
        <div>
            <motion.div className="rectangle"
                style={{
                    height: heightUp,
                    opacity: opacity,
                    bottom: "50%",
                }}
            />
            <motion.div className="rectangle"
                style={{
                    height: heightDown,
                    opacity: opacity,
                    top: "50%",
                }}
            />
        </div>
    );
};




export default Rectangle;