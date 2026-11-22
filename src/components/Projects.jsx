import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "CLOUD-NATIVE E-COMMERCE",
      subtitle: "DevOps & Cloud Infrastructure",
      description:
        "Designed and containerized a multi-service e-commerce application using Docker and Docker Compose. Configured Nginx as a reverse proxy and load balancer, built GitHub Actions CI workflows, and provisioned AWS test infrastructure using Terraform.",
      tech: [
        "AWS",
        "Docker",
        "Docker Compose",
        "Nginx",
        "GitHub Actions",
        "Terraform",
        "Linux",
      ],
      live: "#",
      github: "#",
    },

    {
      title: "SECURE FINTECH BANKING PLATFORM",
      subtitle: "DevOps & Cloud Infrastructure",
      description:
        "Deployed a full-stack banking application handling secure user CRUD operations and account management on AWS. Provisioned EC2 instances (Ubuntu) in a custom VPC with public and private subnets, Internet Gateway, route tables, and security groups, with secure SSH access and least-privilege IAM roles. Containerized services with Docker, built automated GitHub Actions and Jenkins pipelines for build verification and deployment, and configured Route 53 DNS records and environment secrets.",
      tech: [
        "AWS EC2",
        "VPC",
        "IAM",
        "Route 53",
        "Docker",
        "GitHub Actions",
        "Jenkins",
        "Linux",
        "React",
      ],
      live: "#",
      github: "#",
    },

    {
      title: "SCALETIME",
      subtitle: "AI Meeting & Interview Management Infrastructure",
      description:
        "Deployed an AI-driven meeting and interview management application with a focus on automated delivery. Implemented continuous deployment with GitHub Actions and Docker registries, wrote Terraform configurations to provision core AWS resources (VPC, EC2, S3) with variables and remote state, and configured Nginx as a reverse proxy for SSL termination, load balancing, and internal traffic routing.",
      tech: [
        "AWS",
        "Terraform",
        "Docker",
        "GitHub Actions",
        "Nginx",
        "Linux",
      ],
      live: "#",
      github: "#",
    },

    {
      title: "BETTING APP",
      subtitle: "Web Betting Application",
      description:
        "Built responsive UI using React.js and integrated frontend with backend APIs using Laravel. Handled state management and smooth user interactions.",
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