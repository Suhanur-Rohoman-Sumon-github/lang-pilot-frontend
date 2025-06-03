/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaMicrophone } from "react-icons/fa";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"; // Make sure you have a progress bar component
import stringSimilarity from "string-similarity";
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webkitSpeechRecognition: any;
  }
}

const questions = [
  {
    id: 1,
    question:
      "Can you describe what happens on a hot day and what the opposite feels like?",
    keywords: ["cold"],
    image:
      "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/KBWY3TDUBVE4NEP56IIEL2IUAE.jpg?auth=2714e95c7f0f581c1ede16ecd19c6242353322155f178dc15799a90ad806fc16&height=287&width=430&smart=true&quality=80",
    sampleAnswer:
      "On a hot day, it is sunny and I feel warm. The opposite is a cold day where I need a jacket.",
  },
  {
    id: 2,
    question:
      "Look at this picture. Tell me what animal it is and something about it.",
    keywords: ["cat"],
    image:
      "https://thumbs.dreamstime.com/b/close-up-orange-cat-yawning-high-quality-photo-close-up-orange-cat-yawning-371872675.jpg",
    sampleAnswer: "This is a cat. It has orange fur and is yawning.",
  },
  {
    id: 3,
    question:
      "What do you see in this picture? Describe what the person is doing.",
    keywords: ["reading"],
    image:
      "https://images.unsplash.com/photo-1648489898814-eae34d4f4992?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    sampleAnswer: "The person is reading a book and sitting on a bench.",
  },
  {
    id: 4,
    question: "Can you talk about what this person might be feeling and why?",
    keywords: ["happy", "smiling"],
    image:
      "https://www.lovepanky.com/wp-content/uploads/2015/07/how-to-be-happy-and-have-a-happy-life.jpg",
    sampleAnswer:
      "The woman is smiling. She looks happy, maybe because she is enjoying her day.",
  },
  {
    id: 5,
    question: "Describe this weather and how it might affect your day.",
    keywords: ["rain", "umbrella"],
    image:
      "https://frenchly.us/wp-content/uploads/elementor/thumbs/RED-UMBRELLA-GIRL-PARIS-EIFFEL-TOWER-poster-WEB-q4p2qnop2xi6e0l1b16kb1eyofk024e8oi77xnf8nc.jpg",
    sampleAnswer:
      "It is raining, so I would take an umbrella and maybe wear boots.",
  },
  {
    id: 6,
    question: "What kind of food is this? Would you like to eat it?",
    keywords: ["pizza"],
    image:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
    sampleAnswer:
      "This is a pizza. It looks delicious and I would love to eat it.",
  },
  {
    id: 7,
    question: "What activity are these people doing? Do you enjoy it?",
    keywords: ["swimming"],
    image:
      "https://oceanswims.com/wp-content/uploads/2023/06/OceanFit-program-photo-0119761.jpg",
    sampleAnswer:
      "They are swimming in a pool. I enjoy swimming when it is hot outside.",
  },
  {
    id: 8,
    question: "What place is this? Would you like to visit it?",
    keywords: ["beach"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJy8noaHv4mi8NFAdy1dHq8K0lGjjMl0M--g&s",
    sampleAnswer:
      "This is a beach. I would love to visit because it looks relaxing and sunny.",
  },
  {
    id: 9,
    question:
      "What do you think this person is doing and what emotions might they be feeling?",
    keywords: ["playing", "guitar", "music"],
    image:
      "https://blog.truefire.com/wp-content/uploads/2023/07/GUITAR-HEALTH.png",
    sampleAnswer:
      "The person is playing the guitar. They might be feeling relaxed and happy while making music.",
  },
];

const EnglishPracticePage = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: number }>({});
  const [activeMicId, setActiveMicId] = useState<number | null>(null);

  const handleInputChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setFeedback((prev) => ({
      ...prev,
      [id]: calculateScore(value, questions.find((q) => q.id === id)!),
    }));
  };

  const handleSpeechToText = (id: number) => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    setActiveMicId(id); // activate only this mic

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      handleInputChange(id, transcript);
      setActiveMicId(null); // mic done
    };

    recognition.onerror = () => {
      setActiveMicId(null); // reset on error too
    };

    recognition.start();
  };

  const calculateScore = (text: string, question: (typeof questions)[0]) => {
    const userAnswer = text.toLowerCase();
    const sampleAnswer = question.sampleAnswer.toLowerCase();

    // Similarity score between 0 and 1
    const similarity = stringSimilarity.compareTwoStrings(
      userAnswer,
      sampleAnswer
    );

    // Convert similarity to percentage (0-100)
    const similarityScore = Math.round(similarity * 100);

    return similarityScore;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎤 Practice English Speaking
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Answer the questions by speaking in full sentences. Click the mic and
        get real-time feedback!
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {questions.map((q) => (
          <Card key={q.id} className="p-5 flex flex-col gap-4 shadow-md">
            <Image
              src={q.image}
              alt="Question"
              width={400}
              height={400}
              className="w-full h-48 object-cover rounded"
            />
            <p className="font-semibold">{q.question}</p>

            <p className="text-sm text-gray-500 italic">
              💡 Sample Answer: {q.sampleAnswer}
            </p>

            <div className="flex items-center gap-2">
              <Input
                value={answers[q.id] || ""}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                placeholder="Your spoken answer appears here"
              />
              <Button
                className="bg-[#006bff] text-white hover:bg-blue-600"
                onClick={() => handleSpeechToText(q.id)}
              >
                <FaMicrophone
                  className={activeMicId === q.id ? "text-red-500" : ""}
                />
              </Button>
            </div>

            <div className="mt-2">
              <p className="text-sm font-medium text-gray-700">
                🔎 Feedback Score: {feedback[q.id] || 0}%
              </p>
              <Progress value={feedback[q.id] || 0} className="h-2 mt-1" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EnglishPracticePage;
