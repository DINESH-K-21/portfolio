import React from "react";

function AboutMe() {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-16 gap-14 text-white flex flex-col">
      <div className="flex justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">About Me</h2>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl sm:text-2xl font-bold">Experience</h2>
        <p className="font-poppins font-medium">Software Engineer(1+ Year)</p>
      </div>
      <div>
        <p className="text-lg sm:text-xl font-medium font-poppins leading-relaxed">
         Full-Stack Developer with 1.9+ years of hands-on experience building scalable web applications using JavaScript,
React.js, and Node.js. Proficient in RESTful APIs, Microservices architecture, Authentication & Authorization, Nginx,
and CI/CD pipelines with Docker and Jenkins. Passionate about writing clean code and optimizing application
performance.
 
  </p>
      </div>
      
    </div>
  );
}

export default AboutMe;
