import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import MainNavbar from "../navbars/MainNavbar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br  overflow-hidden ">
      {/* Navbar */}
      <MainNavbar />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

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
