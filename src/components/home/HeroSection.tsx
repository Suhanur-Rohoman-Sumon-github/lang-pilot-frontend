import { motion } from "framer-motion";
import Image from "next/image";



const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br  overflow-hidden ">
      <div className="absolute inset-0 z-[-20]">
        <Image
          src="https://i.ibb.co/hxvY0x92/Whats-App-Image-2025-06-03-at-01-22-35-df44fab2.jpg" // ✅ Replace with your actual image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          className=""
          priority
        />
      </div>
      {/* Navbar */}
  

      {/* Hero Content */}
      <div className="container mx-auto px-6 flex-1 flex items-center relative z-10 max-w-7xl  ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Text Section */}
          <div className="text-center mt-4 md:text-left ">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#0b3558]  mb-6 leading-tight"
            >
              Redefining How You Learn English — Smarter, Faster, Better
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg /80 mb-10"
            >
              Master English with confidence through engaging lessons, real-life
              conversations, and personalized guidance — anytime, anywhere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Input and Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-md w-72"
                />
                <button className="bg-[#006bff] text-white px-6 py-3 rounded-md  transition">
                  Start a Free Trial →
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full  md:mr-0 flex justify-center"
          >
            <Image
              src="https://cdn.prod.website-files.com/5b0aa40e50206179481396b1/65cf226948e49d354b4bbf96_man.learning.online.webp"
              alt="Hero"
              width={500}
              height={500}
              className=""
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
