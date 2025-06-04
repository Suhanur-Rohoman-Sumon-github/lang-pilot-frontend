import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Title from "../Title/Title";

const faqs = [
  {
    question: "Is the free plan really free?",
    answer:
      "Yes! You get full access to basic features without any cost. No credit card required.",
  },
  {
    question: "Can I cancel my premium plan anytime?",
    answer:
      "Absolutely. You can manage or cancel your subscription from your dashboard anytime.",
  },
  {
    question: "What devices can I use this on?",
    answer:
      "You can access our platform on any device — mobile, tablet, or desktop.",
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "Our AI assistant provides instant answers to grammar questions, conversation practice, and feedback based on your input.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes, we offer a fully-featured mobile app for both iOS and Android to learn on the go.",
  },
  {
    question: "Do I need internet access to use the platform?",
    answer:
      "For most features, yes. However, you can download lessons and practice offline in the mobile app.",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes! Our dashboard provides detailed insights into your learning journey, including completed lessons and AI feedback.",
  },
  {
    question: "Is it suitable for complete beginners?",
    answer:
      "Definitely. Our lessons start from the basics and grow with you. The AI tailors content to your level and pace.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Frequently Asked Questions"
          subTitle="Got questions? We have answers! Here are some of the most common queries we receive."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-white/80">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
