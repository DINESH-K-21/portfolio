import React from "react";

function AboutMe() {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-16 gap-14 text-white flex flex-col">
      <div className="flex justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">About Me</h2>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl sm:text-2xl font-bold">Experience</h2>
        <p className="font-poppins font-medium">Software Engineer(+1 Year)</p>
      </div>
      <div>
        <p className="text-lg sm:text-xl font-medium font-poppins leading-relaxed">
          I am a passionate Full Stack Developer with over 1 year of hands-on experience 
  working with the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy building 
  scalable and secure web applications, designing clean APIs, and creating responsive 
  user interfaces that deliver great user experiences.
 
  </p>
      </div>
      
    </div>
  );
}

export default AboutMe;
