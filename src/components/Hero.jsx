import React, { useEffect, useRef } from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";

function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, { opacity: 0, x: -100, duration: 1 });
  }, []);
  return (
    <div className="flex flex-col bg-black text-white">
      <div className="flex flex-col md:flex-row min-h-screen px-4 sm:px-8 md:px-20 py-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8">
          <div className="flex flex-col items-start gap-2 ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-poppins font-medium mt-10"
            >
              Hi, I’m Dinesh
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[#5518AB] text-3xl sm:text-4xl md:text-5xl font-poppins font-bold"
            >
              Full Stack Developer
            </motion.h1>
          </div>

          <div className="flex flex-col items-start gap-1 text-white text-lg sm:text-xl font-poppins">
            <p>
              I design and build scalable, high-performance web applications
            </p>
            <p>
              with a strong focus on user experience and clean architecture.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <Link to="projects" className="cursor-pointer px-6 py-3 bg-[#5518AB] text-white font-poppins font-medium rounded-lg hover:bg-[#8034EB] transition duration-300 text-center">
              View Projects
            </Link>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Dinesh's-Resume.pdf";
                link.download = "Dinesh's-Resume.pdf";
                link.click();
              }}
              className="cursor-pointer px-6 py-3 border border-white text-white font-poppins font-medium rounded-lg hover:bg-white hover:text-black transition duration-300 text-center"
            >
              Download Resume
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <motion.img
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-fill rounded-2xl border-4 border-[#5518AB]"
            src={profile}
            alt="profile"
          />
        </div>
      </div>

      <div id="about-me">
        <AboutMe />
      </div>
    </div>
  );
}

export default Hero;
