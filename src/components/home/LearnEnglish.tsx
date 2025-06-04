import React from 'react';
import { motion } from "framer-motion";
import Title from '../Title/Title';
import { Card, CardContent } from "@/components/ui/card";
import { whatWeOffer } from '@/data/data';
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
const LearnEnglish = () => {
    return (
      <div>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title
              title=" Everything You Need to Learn English"
              subTitle=" Our comprehensive platform combines AI-powered learning, real conversations,
    and interactive practice."
            />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {whatWeOffer.map((feature) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card className="relative rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl transition-all p-6   hover:scale-105">
                    <CardContent className="p-8 text-center text-white">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-secondary">{feature.description}</p>
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

export default LearnEnglish;