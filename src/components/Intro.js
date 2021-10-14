
import { motion } from "framer-motion"
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer"

const Intro = (props) => {

    const [ref] = useInView();

    return (
        <div className='Intro align-center full-screen'>
            <h1 className='intro-header'>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} >Design. </motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}  >Develop. </motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} >Deploy.</motion.span>

            </h1>
            <h2 ref={ref} className='josiah-eakle-header'>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className='to-color'>Josiah Eakle </motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} > Full-Stack Developer</motion.span>
            </h2>

        </div>
    );
}

export default Intro;