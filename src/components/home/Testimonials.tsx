import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Title from "../Title/Title";
import { Testimonials } from "@/data/data";
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
const Testimonial = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            title="What Our Learners Say"
            subTitle="Real stories from real users who transformed their English skills with EnglishMaster."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {Testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeInUp}>
                <Card className="relative rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl  p-6   transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <p className="text-secondary mb-4 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <p className="text-white font-bold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
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

export default Testimonial;
