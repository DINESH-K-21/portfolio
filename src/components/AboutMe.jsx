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
          Software Developer transitioning into Cloud & DevOps, with
          professional software development experience and a strong foundation
          in Linux, networking, containerization, and cloud technologies.
          Hands-on experience building containerized microservices, CI/CD
          workflows, reverse-proxy configurations, and cloud infrastructure
          using Docker, Docker Compose, GitHub Actions, Terraform, and AWS.
          Seeking a Junior DevOps / Cloud Engineer opportunity to apply existing
          development experience while growing expertise in cloud
          infrastructure, automation, deployment, and reliability.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
