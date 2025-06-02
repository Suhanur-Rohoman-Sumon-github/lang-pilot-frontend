import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const OtherSection = () => {
    return (
      <div>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Learn English
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform combines AI-powered learning, real
                conversations, and interactive practice.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Interactive Practice",
                  description:
                    "Grammar exercises, vocabulary games, and pronunciation training with instant feedback.",
                  icon: "🎯",
                },
                {
                  title: "Learn With Me Videos",
                  description:
                    "Curated YouTube content with note-taking, favorites, and progress tracking.",
                  icon: "📚",
                },
                {
                  title: "AI Assistant",
                  description:
                    "24/7 AI tutor for grammar questions, conversation practice, and personalized feedback.",
                  icon: "🤖",
                },
              ].map((feature, index) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Our Students Say
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  name: "Fatima Rahman",
                  location: "Dhaka, Bangladesh",
                  text: "EnglishMaster helped me improve my IELTS score from 6.5 to 8.0 in just 3 months!",
                  avatar: "👩‍🎓",
                },
                {
                  name: "David Ochieng",
                  location: "Nairobi, Kenya",
                  text: "The AI assistant is like having a personal tutor available 24/7. Game changer!",
                  avatar: "👨‍💼",
                },
                {
                  name: "Priya Sharma",
                  location: "Mumbai, India",
                  text: "The Learn With Me videos made grammar so much easier to understand. Highly recommended!",
                  avatar: "👩‍💻",
                },
              ].map((testimonial, index) => (
                <motion.div key={testimonial.name} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
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

        {/* Free vs Premium Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Learning Path
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {/* Free Plan */}
              <Card className="relative">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                  <div className="text-4xl font-bold text-primary mb-6">
                    $0<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> 5 Practice
                      Sessions/day
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Basic Learn
                      With Me videos
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Limited AI
                      assistant
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">✗</span> Grammar
                      correction
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">✗</span> Speaking
                      practice
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-primary border-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
                  <div className="text-4xl font-bold text-primary mb-6">
                    $19<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Unlimited
                      practice sessions
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> All Learn
                      With Me content
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Advanced AI
                      assistant
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Real-time
                      grammar correction
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Speaking
                      practice & feedback
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-blue-700">
                    Subscribe & Learn
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your English?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join 25,000+ students who've improved their English with our
                proven methods.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3"
              >
                Start Your Free Trial
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    );
};

export default OtherSection;