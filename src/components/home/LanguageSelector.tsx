import { useState, useEffect } from "react";
import { languages } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import Title from "../Title/Title";

const LanguageSelector = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Limit display count based on screen size
  const displayedLanguages = () => {
    if (showAll) return languages;
    if (isMobile) return languages.slice(0, 2);
    return languages.slice(0, 4);
  };

  return (
    <section className="py-16 bg-gradient-to-b text-center">
      <div className="mb-10">
        <Title
          title="Choose Your Native Language"
          subTitle="We’ll help you learn English more effectively based on your native tongue."
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {displayedLanguages().map((lang, index) => (
          <motion.div
            key={lang.name}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              width={40}
              height={40}
              loading="lazy"
              src={lang.flag}
              alt={`${lang.name} flag`}
              className="rounded-full w-10 h-10"
            />
            <div className="text-left">
              <p className="font-semibold text-base">{lang.name}</p>
              <p className="text-xs text-gray-400">{lang.learners}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More button for mobile */}
      {!showAll && (
        <div className="mt-8 items-center justify-center flex">
          <button
            onClick={() => setShowAll(true)}
            className="button-primary "
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default LanguageSelector;
