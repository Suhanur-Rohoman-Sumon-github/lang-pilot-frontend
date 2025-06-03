import React from "react";
import { motion } from "framer-motion";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div>
      <motion.div {...fadeInUp} className="text-center mb-16 ">
        <h2 className="text-3xl lg:text-4xl font-bold  mb-4 text-[#0b3558]">
          {title}
        </h2>
        <p className="text-xl text-[#0a0a0a]max-w-3xl mx-auto">{subTitle}</p>
      </motion.div>
    </div>
  );
};

export default Title;
