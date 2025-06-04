"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { stats } from "@/data/data";

const AgencyStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation
            controls.start("visible");

            stats.forEach((stat, index) => {
              const end = stat.value;
              const duration = 2000;
              const increment = Math.ceil(end / (duration / 50));

              const timer = setInterval(() => {
                setCounts((prevCounts) => {
                  const newCounts = [...prevCounts];
                  if (newCounts[index] < end) {
                    newCounts[index] += increment;
                  } else {
                    newCounts[index] = end;
                    clearInterval(timer);
                  }
                  return newCounts;
                });
              }, 50);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  return (
    <div>
      <div className="w-full p-5 flex justify-center relative overflow-hidden mt-8">
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full z-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative  p-8 glassmorphism text-center overflow-hidden"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                },
              }}
            >
              <h3 className="text-4xl font-bold text-white relative z-10">
                {counts[index].toLocaleString()}
                {stat.suffix}
              </h3>
              <p className="text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgencyStats;
