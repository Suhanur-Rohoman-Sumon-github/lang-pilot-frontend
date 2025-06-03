"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LearnWithMe = () => {
  const [favoriteVideos, setFavoriteVideos] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const categories = [
    "All",
    "Grammar",
    "Vocabulary",
    "Pronunciation",
    "Conversation",
    "Business English",
  ];

  const videos = [
    {
      id: "1",
      title: "Common Grammar Mistakes to Avoid",
      duration: "12:45",
      category: "Grammar",
      level: "Intermediate",
      thumbnail:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      description:
        "Learn about the most common grammar mistakes non-native speakers make and how to fix them.",
      views: "125K",
    },
    {
      id: "2",
      title: "Business English: Email Writing",
      duration: "15:20",
      category: "Business English",
      level: "Advanced",
      thumbnail:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      description:
        "Master professional email writing with templates and real examples.",
      views: "89K",
    },
    {
      id: "3",
      title: "Pronunciation Practice: TH Sounds",
      duration: "8:30",
      category: "Pronunciation",
      level: "Beginner",
      thumbnail:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      description:
        "Step-by-step guide to mastering the challenging TH sounds in English.",
      views: "200K",
    },
    {
      id: "4",
      title: "Daily Conversation Starters",
      duration: "10:15",
      category: "Conversation",
      level: "Intermediate",
      thumbnail:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      description:
        "Learn natural ways to start and maintain conversations in English.",
      views: "95K",
    },
    {
      id: "5",
      title: "Advanced Vocabulary: Academic Words",
      duration: "18:45",
      category: "Vocabulary",
      level: "Advanced",
      thumbnail:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      description:
        "Build your academic vocabulary for university and professional settings.",
      views: "67K",
    },
    {
      id: "6",
      title: "English Idioms Explained Simply",
      duration: "14:20",
      category: "Vocabulary",
      level: "Intermediate",
      thumbnail:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop",
      description:
        "Understanding common English idioms with examples and usage tips.",
      views: "156K",
    },
  ];

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  const toggleFavorite = (videoId: string) => {
    setFavoriteVideos((prev) =>
      prev.includes(videoId)
        ? prev.filter((id) => id !== videoId)
        : [...prev, videoId]
    );
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Learn With Me – Videos to Improve Daily
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated video lessons to help you master English grammar,
            vocabulary, pronunciation, and conversation skills. Perfect for
            learners from Bangladesh, Africa, and beyond.
          </p>
        </motion.div>

        {/* Stats & Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-gray-600">Video Lessons</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">25K+</div>
              <p className="text-gray-600">Students Learning</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-600">Improvement Rate</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-8 justify-center"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-blue-700"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-primary hover:bg-blue-700">
                      ▶ Play Video
                    </Button>
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className={getLevelColor(video.level)}>
                      {video.level}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{video.views} views</span>
                    <Badge variant="outline">{video.category}</Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleFavorite(video.id)}
                      className={
                        favoriteVideos.includes(video.id)
                          ? "bg-red-50 text-red-600 border-red-200"
                          : ""
                      }
                    >
                      {favoriteVideos.includes(video.id)
                        ? "❤️ Favorited"
                        : "🤍 Add to Favorites"}
                    </Button>
                    <Button variant="outline" size="sm">
                      📝 Take Notes
                    </Button>
                    <Button variant="outline" size="sm">
                      📤 Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Study Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Maximize Your Learning
            </h2>
            <p className="text-gray-600">
              Tips to get the most out of our video lessons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📝",
                title: "Take Active Notes",
                tip: "Write down new vocabulary, grammar rules, and examples as you watch.",
              },
              {
                icon: "🔁",
                title: "Repeat & Shadow",
                tip: "Repeat after the speaker and mimic pronunciation to improve fluency.",
              },
              {
                icon: "📅",
                title: "Practice Regularly",
                tip: "Schedule time every day or week to stay consistent with your learning.",
              },
            ].map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnWithMe;
