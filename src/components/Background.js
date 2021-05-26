

import React, { useRef, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const Background = () => {

    const [scroll, setScroll] = useState(0);

    const squareRef_1 = useRef(null);
    const squareRef_2 = useRef(null);
    const squareRef_3 = useRef(null);
    const underlineRef = useRef(null);

    const underlineControls = useAnimation();

    const handleScroll = () => setScroll(window.pageYOffset);

    const updateSquarePos = () => {
        squareRef_1.current.style.position = 'relative';
        squareRef_2.current.style.position = 'relative';
        squareRef_3.current.style.position = 'relative';
        
        if (scroll > 0) {
            squareRef_1.current.style.bottom = scroll + 'px';
            squareRef_2.current.style.bottom = scroll + 'px';
            squareRef_3.current.style.bottom = scroll + 'px';    
            underlineRef.current.style.left =  (scroll - (16 * 16)) + 'px';
        }
    }

    useEffect(() => {
        updateSquarePos();
    }, [scroll])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        updateSquarePos();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return(
        <div className='Background full-screen'> 
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} ref={squareRef_1} className="background-square" />
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}} ref={squareRef_2} id='square2' className="background-square" />
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.5}} ref={squareRef_3} className="middle background-square" />
            <div className='underline-square-container'>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3.5}} ref={underlineRef} className="underline-square" />
            </div>
        </div>
    );
}

export default Background;