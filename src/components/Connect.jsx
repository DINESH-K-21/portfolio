import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

function Connect() {
  const connect = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={40} />,
      link: "https://www.linkedin.com/in/dinesh-professional/",
    },
    {
      name: "GitHub",
      icon: <Github size={40} />,
      link: "https://github.com/DINESH-K-21/",
    },
    {
      name: "Email",
      icon: <Mail size={40} />,
      link: "mailto:dineshdeveloper21@outlook.com",
    },
  ];

  return (
    <div
      id="contacts"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 py-20"
    >
    
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-poppins font-bold text-[#5518AB] mb-14"
      >
        Connect Me
      </motion.h1>


      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16">

        {connect.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-[#111] border-2 border-[#5518AB] rounded-2xl 
                       flex flex-col justify-center items-center gap-3 md:gap-4
                       hover:bg-[#5518AB] transition duration-300 cursor-pointer"
          >
            <div className="text-white">
              {React.cloneElement(item.icon, { size: 32 })}
            </div>
            <p className="font-poppins font-medium text-sm sm:text-base">{item.name}</p>
          </motion.a>
        ))}

      </div>
    </div>
  );
}

export default Connect;
