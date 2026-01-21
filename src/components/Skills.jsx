import React from "react";
import { motion } from "framer-motion";

import mongodb from "../assets/skills/mongodb.png";
import express from "../assets/skills/express.png";
import reactLogo from "../assets/skills/reactLogo.png";
import node from "../assets/skills/node.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import tailwind from "../assets/skills/tailwind.png";
import git from "../assets/skills/git.png";
import aws from "../assets/skills/aws.png";
import linux from "../assets/skills/linux.png";

function Skills() {
  const skills = [
    { name: "JavaScript", img: js },
    { name: "React", img: reactLogo },
    { name: "Express.js", img: express },
    { name: "Node.js", img: node },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    // { name: "Linux", img: linux },
    // { name: "AWS", img: aws },
    { name: "MongoDB", img: mongodb },
    { name: "Tailwind", img: tailwind },
    { name: "Git", img: git },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-20 py-20">

      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl mt-7 font-poppins font-bold text-[#5518AB] mb-12"
      >
        My Skills
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,   // stagger effect
            }}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-[#111] border-2 border-[#5518AB] rounded-xl 
                       flex flex-col justify-center items-center gap-2 md:gap-3
                       hover:scale-110 hover:bg-[#5518AB] transition duration-300 cursor-pointer"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <p className="text-xs sm:text-sm font-poppins font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
