import React from "react";
import Image from "next/image";
import { Spotlight } from "../../../components/ui/Spotlight";
import MagicButton from "../../../components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";


function About() {
  return (
    <>
    <section className="relative px-4 h-auto min-h-screen">
 
  <Spotlight
    className="hidden lg:block absolute top-0 left-0 h-[80vh] w-[50vw]"
    fill="purple"
  />


  <div className="absolute inset-0 h-full w-full dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3] flex items-center justify-center">
    <div className="relative pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  </div>

 
  <div className="relative container mx-auto pt-20 pb-10">
    <div className="flex flex-col md:flex-row justify-center items-center md:pt-16 pt-10">
     
      <div className="md:w-1/2 mb-8 md:mb-0 px-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">About Us</h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">
          I am a passionate web developer with a strong foundation in front-end technologies.
          My expertise lies in <span className="text-purple">HTML, CSS, and JavaScript</span>,
          which allow me to craft visually appealing and responsive web applications.
          <span className="text-purple"> I am also proficient in modern frameworks like React and Next.js.</span>
        </p>
      </div>

   
      <div className="relative w-48 h-48 md:w-[300px] md:h-[300px] mt-5 md:mt-0">
        <Image
          src="/pic.jpg"
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-[0_0_20px_purple] transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>

  
    <div className="mt-10 flex justify-center">
      <a
        href="https://www.linkedin.com/in/hafsa-sagheer-ahmed-737251311"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <MagicButton
          title="LinkedIn"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  </div>
</section>
    </>
  )
}

export default About;
