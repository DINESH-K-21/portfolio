import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "CRICMATCH",
      subtitle: "Web Betting Application",
      description:
        "Built responsive UI using React.js and integrated frontend with backend APIs using Laravel. Handled state management and smooth user interactions.",
      tech: ["React", "JavaScript", "Laravel", "API"],
      live: "#",
      github: "#",
    },
    {
      title: "FINZOR",
      subtitle: "Banking Application",
      description:
        "Developed scalable and secure UI using React.js, Redux, React Router, Axios and Formik. Integrated with backend APIs for efficient data handling.",
      tech: ["React", "Redux", "Axios", "Formik", "API"],
      live: "#",
      github: "#",
    },
    {
  title: "CREDVAULT",
  subtitle: "Domain Management Application",
  description:
    "Built a full-stack domain management system with React.js frontend and Node.js backend. Implemented authentication, role-based access, and integrated REST APIs for managing domains, providers, and renewals.",
  tech: ["React", "Node.js", "Express","REST API"],
  live: "#",
  github: "#",
},
{
  title: "FINVAULT",
  subtitle: "Financial Management Application",
  description:
    "Developed a secure financial management platform using React.js and Node.js. Implemented transaction handling, user authentication, and real-time data updates with RESTful APIs .",
  tech: ["React", "JavaScript", "Laravel", "API"],
  live: "#",
  github: "#",
},

  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-20 py-20 mt-7 font-poppins"
    >
    
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-poppins font-bold text-[#5518AB] mb-14"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] border-2 border-[#5518AB] rounded-2xl p-6 md:p-8 
                       hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
          >
        
            <h2 className="text-xl sm:text-2xl font-poppins font-bold text-white mb-1">
              {project.title}
            </h2>

            <p className="text-[#5518AB] font-medium mb-4 text-sm sm:text-base">
              {project.subtitle}
            </p>

           
            <p className="text-slate-300 font-medium mb-6 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>

       
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-black border border-[#5518AB] 
                             rounded-full font-poppins"
                >
                  {tech}
                </span>
              ))}
            </div>

       
            
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Projects;
