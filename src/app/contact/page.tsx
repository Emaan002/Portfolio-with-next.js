import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "../../../components/ui/MagicButton"
import { Spotlight } from "../../../components/ui/Spotlight"

function Contact() {
  return (
    <div className="h-screen relative">
    <Spotlight className="absolute top-1/4 left-1/2 transform -translate-x-1/2 h-[80vh] w-[80vw] md:w-[50vw]" fill="purple" />
  
    <div className="flex items-center justify-center h-full pt-24 md:pt-24 sm:pt-24">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.3] bg-grid-small-black/[0.3]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-md w-full shadow-lg border border-white border-opacity-30">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Me</h2>
        <form className="space-y-4" id="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-400 placeholder-opacity-75 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-400 placeholder-opacity-75 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-400 placeholder-opacity-75 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple"
            required
          />
          <MagicButton
            title="Send Message"
            icon={<FaLocationArrow />}
            position={"right"}
          />
        </form>
      </div>
    </div>
  </div> 
  )
}   
      
 

export default Contact
