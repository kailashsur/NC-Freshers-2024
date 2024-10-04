"use client"
import { motion } from "framer-motion"

export default function Navbar() {


    return (
        <motion.div className=" absolute top-0 left-0 right-0 h-20 bg-transparent px-6 py-6 flex justify-between items-center">
            <div 
            className=" bg-transparent font-[--font-peri]"
            >
                N.C AUTONOMOUS <br />
                COLLEGE, JAJPUR
            </div>
            <div className="bg-transparent">INVITE YOU</div>
        </motion.div>
    )
}