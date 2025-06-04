import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Title from "../Title/Title";
import { communityFeatures } from "@/data/data";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const JoinOurGlobalCommunity = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            title="Join Our Global Community"
            subTitle="Connect with learners worldwide through group chats, live events, and peer support."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {communityFeatures.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="relative backdrop-blur-3xl bg-white/5 border border-white/30 p-6 rounded-lg shadow-lg transition-all hover:scale-105">
                  <CardContent className="text-center p-8">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl text-white font-semibold mb-4">{item.title}</h3>
                    <p className="text-secondary">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinOurGlobalCommunity;
