import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Rectangle = () => {
    const { scrollY } = useScroll();

    const heightDown = useTransform(scrollY, [0, 800], ["0px", "50vh"]); 
    const heightUp = useTransform(scrollY, [0, 800], ["0px", "50vh"]);
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    
    return (
        <div>
            <motion.div
                style={{
                    width: "100%",
                    height: heightUp,
                    opacity: opacity,
                    backgroundColor: "#4C6B56",
                    position: "absolute",
                    bottom: "50%",
                    left: 0,
                }}
            />
            <motion.div
                style={{
                    width: "100%",
                    height: heightDown,
                    opacity: opacity,
                    backgroundColor: "#4C6B56",
                    position: "absolute",
                    top: "50%",
                    left: 0,
                }}
            />
        </div>
    );
};




export default Rectangle;