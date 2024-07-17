import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
       <Sidebar />
       <div className="wrapper">
            <motion.span initial={{ opacity: 0,  scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>Sithidej Clara</motion.span>
            <div className="social">
                <a href="mailto:clara.stihidej@gmail.com"> <img src="/email.png" alt="Mail" /> </a>
                <a href="https://www.linkedin.com/in/clara-sithidej/"> <img src="/github.png" alt="Github" /> </a>
                <a href="https://github.com/Coaraa"> <img src="/linkedin.png" alt="LinkedIn" /> </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
