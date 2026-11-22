import React from "react";

function AboutMe() {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-16 gap-14 text-white flex flex-col">
      <div className="flex justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
          About Me
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl sm:text-2xl font-bold">Experience</h2>
        <p className="font-poppins font-medium">Software Engineer(+2 Year)</p>
      </div>
      <div>
        <p className="text-lg sm:text-xl font-medium font-poppins leading-relaxed">
        Cloud & DevOps Engineer with hands-on experience in Linux, networking, containerization, and cloud infrastructure. I build
        and ship containerized applications with Docker, automate CI/CD pipelines using Git and Jenkins, and provision AWS
        environments as code with Terraform. I care about fast, repeatable deployments and reliable infrastructure, and I'm looking
        for a Junior DevOps / Cloud Engineer role where I can streamline delivery workflows, improve system reliability, and drive
        cloud automation.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;