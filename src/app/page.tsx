"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";

import { motion } from "framer-motion";

import { BackgroundLines } from "@/components/ui/background-lines";

import { useScroll, useTransform } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import Navbar from "@/components/Navbar";
import BackSection from "@/components/backsection";

export default function Home() {
  const words = [
    {
      text: "You",
      className: "text-orange-500",
    },
    {
      text: "are",
    },
    {
      text: "invited",
    },
    {
      text: "To",
      className: "text-blue-500 dark:text-blue-500",
    },

  ];

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const xleft = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className=" bg-transparent">
    <Navbar />
    <div className=" w-full flex flex-col ">
      <AuroraBackground>

        <div className=" h-screen w-full flex justify-center items-center flex-col">
          <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className=" text-6xl font-Fluent">WELCOME</motion.div>

          <motion.h1
          variants={
            {
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }
          }
          initial="hidden"
    animate="visible"
          
          className=" flex-wrap">
            N C (AUTONOMOUS) COLLEGE, JAJPUR
          </motion.h1>

        </div>

      </AuroraBackground>

      <BackgroundBeamsWithCollision>
      <div className=" w-full h-screen flex flex-col justify-center items-center">
          <motion.h1
          
          initial="hidden"
          animate="visible"

          className=" text-9xl font-Fluent">BCA</motion.h1>
          <div>DEPARTMENT OF SELF FINANCING </div>
        </div>
      </BackgroundBeamsWithCollision>

    </div>

    <BackSection />
   


    <div className=" bg-transparent w-full h-screen flex flex-col justify-center items-center">
      <div className=" bg-transparent ">YOU'RE INVITED TO</div>
      <div className=" bg-transparent text-7xl font-Fluent">PHOENIX</div>
  
      <div className=" bg-transparent font-SummerLike text-2xl">the freshers party</div>
    </div>

{/* quote  */}

    <div className=" w-full h-screen flex flex-col justify-center items-center ">

      <div className=" bg-purple-50 flex flex-col text-wrap rounded-md p-6 mx-4">

        <span className=" text-4xl font-bold ">GET READY</span> <span className=" font-SummerLike text-3xl">to cellebrate, dance, and make memories as we </span><br /> <span className=" font-SummerLike  text-3xl"> welcome you to</span> <span className="text-4xl font-Fluent">THE ULTIMATE FRESHERS PARTY!</span>

      </div>

    </div>







    {/* date, time , venu, week */}

    <div className=" w-full h-screen flex flex-col justify-center items-center">

      <BackgroundLines>
      <div className=" bg-transparent flex flex-col text-wrap rounded-md p-6">

<div className=" bg-transparent"><span className=" text-8xl">05th</span> October 2024</div>
<div className=" bg-transparent">AT 9 AM</div>
<div className=" bg-transparent text-center flex justify-between items-center gap-4 ">
  <hr className=" w-full" />SATURDAY<hr className="w-full" />
</div>
<div className=" bg-transparent text-4xl">SANSKRUTI BHAVAN, GANDHI CHAKA, JAJPUR TOWN</div>

</div>
      </BackgroundLines>
     
    </div>



<footer className=" flex justify-center items-center">
  

  <p className=" text-[10px] text-gray-800/30">Designed by <a href="https://portfolio.kailashsur.in" target="_blank" className=" font-light">Kailash</a></p>
</footer>

    </div>
  );
}










  // export default function HeroSection() {
  // return (
  //     <div>
  //         <Navbar />
  //         <section className="min-h-max bg-white dark:bg-gray-950">
  //             <div className="absolute top-0 inset-x-0 h-64 flex items-start">
  //                 <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40">
  //                 </div>
  //                 <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40">
  //                 </div>
  //             </div>
  //             <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 rounded-full opacity-50 blur-2xl">
  //             </div>
              
  //         </section>
  //     </div>
  // )
  // }
  