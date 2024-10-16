// Footer Component (components/Footer.jsx)
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
     
     <footer className="text-white bg-black-100 py-6 font-thin">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2024 All rights reserved.</p>
        </div>

   
        <div className="flex space-x-4 mb-4 md:mb-0 font-thin">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={19} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={19} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={19} />
          </a>
        </div>

       
        <div className="text-center md:text-right">
          <p>hafsaahmed697@gmail.com</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
