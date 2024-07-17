import "./parallax.scss";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax({ type }) {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div 
      className="parallax" 
      ref={ref} 
      style={{ background: type === "portfolio" ? "linear-gradient(180deg, #3c415c, #383B53)" : "linear-gradient(180deg, #383B53, #3c415c)" }}
      >
        <motion.h1 style={{ y: yText }}>{type === "portfolio" ? "Mes projets" : "En connaître plus sur moi"}</motion.h1>
        <motion.div className="desk" style={{ y: yBg }}></motion.div>
        <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  )
}

export default Parallax

