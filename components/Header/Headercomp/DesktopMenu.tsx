import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu(props: { finishedLoading: boolean, delta }) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 1.6 + props.delta,
        }}
        className=" text-AAsecondary"
       
      >
        <ReactScrollLink to="aboutMeSection" spy={true} smooth={true} offset={-100} duration={200}>
          &gt; 01. <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">小组长介绍</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 1.9 + props.delta,
        }}
        className="text-AAsecondary"
       
      >
        <ReactScrollLink to="aboutGraceSection" spy={true} smooth={true} offset={-300} duration={200}>
          &gt; 02.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">辅导介绍</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 2 + props.delta,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink to="remindersSection" spy={true} smooth={true} offset={-100} duration={200}>
        &gt; 03. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Angus小叮咛</span>

        </ReactScrollLink>
        
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 2.2 + props.delta,
        }}
        className="text-AAsecondary"
      >
         <ReactScrollLink to="otherInfoSection" spy={true} smooth={true} offset={-100} duration={200}>
         &gt; 04. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">其他资料</span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/timetable.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 2.4 + props.delta,
        }}
        // onClick={()=>{router.push("/resume.pdf")}}
        className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
      >
        Timetable
      </motion.button>
      </a>
      
    </div>
  );
}
