import React from "react";
import { motion } from "framer-motion";

type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#FFF]">
          {title}
        </h2>
        <p className="text-xl max-w-3xl mx-auto">{subTitle}</p>
      </motion.div>
    </div>
  );
};

export default Title;
