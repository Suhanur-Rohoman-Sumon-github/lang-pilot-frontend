"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/home/HeroSection";
import HeroWithAnimatedDashboard from "@/components/home/HeroSection";
import MainNavbar from "@/components/navbars/MainNavbar";
import { div } from "framer-motion/client";
import OtherSection from "@/components/home/OtherSection";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <OtherSection />
    </div>
  );
};

export default Home;
