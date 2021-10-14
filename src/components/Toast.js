import React from "react"

import { motion } from "framer-motion"

const ToastContainer = (props) => {

    return (
        <motion.div className='ToastContainer'>
            {(props.string) ? props.string : null}
        </motion.div>
    );
}

export default ToastContainer;