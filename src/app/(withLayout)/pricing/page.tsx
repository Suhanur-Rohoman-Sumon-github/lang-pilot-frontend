// app/pricing/page.tsx

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { plans } from "@/data/data";
import FAQSection from "@/components/home/FAQSection";
import Title from "@/components/Title/Title";

const Pricing = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center ">
          <Title
            title=" Choose Your Learning Plan"
            subTitle="Unlock your English potential with our comprehensive learning
            platform. Start free or go premium for unlimited access."
          />
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <Card
                className={`h-full rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl  ${
                  plan.popular
                    ? "border-primary border-2 shadow-xl"
                    : "shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#c13fe1] text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-secondary ml-2">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500">
                        <span className="line-through">
                          {plan.originalPrice}/year
                        </span>
                        <span className="text-green-600 ml-2 font-medium">
                          Save 17%
                        </span>
                      </div>
                    )}
                    <p className="text-secondary mt-2">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-secondary">
                      Whats included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-0.5">✓</span>
                          <span className="text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-white mb-2">
                          Limitations:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start">
                              <span className="text-red-400 mr-3 mt-0.5">
                                ✗
                              </span>
                              <span className="text-white text-sm">
                                {limitation}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full ${
                      plan.popular ? "button-primary" : "button-primary"
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-4 sm:p-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-white"
        >
          <h2 className="text-2xl font-bold text-center mb-6 sm:mb-8">
            Detailed Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="text-left py-3 px-4 font-semibold">
                    Features
                  </th>
                  <th className="text-center py-3 px-4 font-semibold">Free</th>
                  <th className="text-center py-3 px-4 font-semibold">
                    Pro Monthly
                  </th>
                  <th className="text-center py-3 px-4 font-semibold">
                    Pro Yearly
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20">
                {[
                  ["Grammar Practice", "5/day", "Unlimited", "Unlimited"],
                  ["Speaking Practice", "✗", "✓", "✓"],
                  ["AI Assistant", "10 questions", "Unlimited", "Unlimited"],
                  [
                    "Video Content",
                    "Basic",
                    "All content",
                    "All content + bonus",
                  ],
                  ["Real-time Corrections", "✗", "✓", "✓"],
                  ["Progress Analytics", "Basic", "Advanced", "Advanced"],
                  ["Certificate", "✗", "✗", "✓"],
                  ["Support", "Community", "Priority", "Priority"],
                ].map(([feature, free, monthly, yearly], index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/20 transition-colors duration-200"
                  >
                    <td className="py-4 px-4 font-medium">{feature}</td>
                    <td className="py-4 px-4 text-center">{free}</td>
                    <td className="py-4 px-4 text-center">{monthly}</td>
                    <td className="py-4 px-4 text-center">{yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </div>
  );
};

export default Pricing;
