import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Title from "../Title/Title";
import { FaBullseye, FaChartLine, FaUsers } from "react-icons/fa";

const cardClasses =
  "relative backdrop-blur-3xl bg-white/5 border border-white/30 p-6 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl cursor-pointer";

const TrackYourProgress = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Track Your Progress"
          subTitle="Stay motivated with personalized goals, weekly reports, and a global community."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card className={cardClasses}>
            <CardContent className="p-6 space-y-4">
              <div className="text-4xl text-green-400">
                <FaBullseye />
              </div>
              <h3 className="text-xl text-white font-semibold">
                Personalized Goals
              </h3>
              <p className="text-secondary">
                Set your learning goals and get personalized daily reminders to
                help build consistent habits.
              </p>
            </CardContent>
          </Card>

          <Card className={cardClasses}>
            <CardContent className="p-6 space-y-4">
              <div className="text-4xl text-blue-400">
                <FaChartLine />
              </div>
              <h3 className="text-xl text-white font-semibold">
                Weekly Reports
              </h3>
              <p className="text-gray-300">
                Receive a detailed breakdown of your activities and progress
                each week to stay accountable.
              </p>
            </CardContent>
          </Card>

          <Card className={cardClasses}>
            <CardContent className="p-6 space-y-4">
              <div className="text-4xl text-yellow-400">
                <FaUsers />
              </div>
              <h3 className="text-xl text-white font-semibold">
                Global Community
              </h3>
              <p className="text-gray-300">
                Connect with learners worldwide, share your milestones, and find
                encouragement from the community.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackYourProgress;
