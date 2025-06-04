// app/pricing/page.tsx

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { plans } from "@/data/data";

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
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Learning Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your English potential with our comprehensive learning
            platform. Start free or go premium for unlimited access.
          </p>
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
                className={`h-full ${
                  plan.popular
                    ? "border-primary border-2 shadow-xl"
                    : "shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">{plan.period}</span>
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
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">
                      Whats included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-0.5">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Limitations:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start">
                              <span className="text-red-400 mr-3 mt-0.5">
                                ✗
                              </span>
                              <span className="text-gray-500 text-sm">
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
                      plan.popular ? "button-primary" : ""
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
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Detailed Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold">
                    Features
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 font-semibold">
                    Pro Monthly
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    Pro Yearly
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
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
                  <tr key={index} className="hover:">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle.",
              },
              {
                q: "Is there a money-back guarantee?",
                a: "We offer a 14-day money-back guarantee for all premium plans. If you're not satisfied, we'll refund your payment.",
              },
              {
                q: "Do I need to download anything?",
                a: "No downloads required! EnglishMaster works entirely in your web browser on any device.",
              },
              {
                q: "How does the AI assistant work?",
                a: "Our AI assistant uses advanced language models to provide personalized feedback, answer grammar questions, and help with pronunciation.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
