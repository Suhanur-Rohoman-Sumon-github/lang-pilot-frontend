/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ...your same book arrays (personalizedBooks, weeklyBooks, affiliateBooks)...

const BookGrid = ({
  title,
  books,
  isAffiliate = false,
}: {
  title: string;
  books: any[];
  isAffiliate?: boolean;
}) => (
  <>
    <h2 className="text-2xl font-semibold mb-6">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
      {books.map((book, i) => (
        <Card
          key={i}
          className="overflow-hidden shadow-sm hover:shadow-md transition duration-300"
        >
          <div className="relative w-full h-40">
            {isAffiliate ? (
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </a>
            ) : (
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <CardContent className="p-3">
            <h3 className="text-sm font-semibold mb-1">{book.title}</h3>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {book.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-blue-600 text-sm font-bold">
                {book.price ?? ""}
              </span>
              {isAffiliate ? (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs"
                >
                  <Button variant="outline" className="px-2 py-1 text-xs">
                    {book.action}
                  </Button>
                </a>
              ) : (
                <Button className="px-2 py-1 text-xs">{book.action}</Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </>
);

const EbookPlatform = () => {
  const affiliateBooks = [
    {
      title: "Atomic Habits by James Clear",
      description:
        "Build habits that last, perfect for English learners wanting consistency.",
      image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
      action: "Buy on Amazon",
      link: "https://www.amazon.com/dp/0735211299",
    },
    {
      title: "Word Power Made Easy",
      description: "Classic vocabulary builder for learners and test-takers.",
      image: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
      action: "Buy on Amazon",
      link: "https://www.amazon.com/dp/110187385X",
    },
    {
      title: "English Grammar in Use",
      description:
        "The most popular grammar reference for intermediate learners.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71snN5fqHYL.jpg",
      action: "Buy on Amazon",
      link: "https://www.amazon.com/dp/1108457657",
    },
    {
      title: "The Elements of Style",
      description:
        "A timeless guide to clear and concise writing – great for learners.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL.jpg",
      action: "Buy on Amazon",
      link: "https://www.amazon.com/dp/020530902X",
    },
  ];

  const weeklyBooks = [
    {
      title: "English Weekly #22",
      description: "This week's topic: Business Communication + Phrasal Verbs.",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?fit=crop&w=600&q=80",
      price: "$3.99",
      action: "Buy Now",
    },
    {
      title: "English Weekly #23",
      description: "Focus: Common grammar mistakes & storytelling.",
      image:
        "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?fit=crop&w=600&q=80",
      price: "$3.99",
      action: "Buy Now",
    },
    {
      title: "English Weekly #24",
      description: "Master small talk and polite expressions.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?fit=crop&w=600&q=80",
      price: "$3.99",
      action: "Buy Now",
    },
    {
      title: "English Weekly #25",
      description: "This edition: Email writing & modern slang explained.",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?fit=crop&w=600&q=80",
      price: "$3.99",
      action: "Buy Now",
    },
  ];

  const personalizedBooks = [
    {
      title: "Your Personalized English Plan",
      description:
        "Get a learning book tailored to your grammar, speaking, and writing goals.",
      image:
        "https://images.unsplash.com/photo-1588776814546-d38baf68f08e?fit=crop&w=600&q=80",
      price: "$9.99",
      action: "Start Personalizing",
    },
    {
      title: "Custom Daily English Guide",
      description:
        "A fully customized plan with daily lessons based on your current level.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?fit=crop&w=600&q=80",
      price: "$14.99",
      action: "Build My Book",
    },
    {
      title: "Grammar Mastery Roadmap",
      description: "Fix common grammar issues with daily tailored drills.",
      image:
        "https://images.unsplash.com/photo-1604881991720-9a625901bb3c?fit=crop&w=600&q=80",
      price: "$12.99",
      action: "Get My Grammar Plan",
    },
    {
      title: "Speaking Booster Blueprint",
      description:
        "Improve pronunciation, fluency, and everyday conversation with a custom guide.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
      price: "$11.99",
      action: "Boost My Speaking",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          📚 Your English Learning Bookstore
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover personalized study plans, weekly curated lessons, and
          top-rated English improvement books.
        </p>

        <BookGrid
          title="🧠 Personalized English Books"
          books={personalizedBooks}
        />
        <BookGrid title="📅 Weekly eBooks" books={weeklyBooks} />
        <BookGrid
          title="🔗 Recommended from Amazon"
          books={affiliateBooks}
          isAffiliate
        />
      </div>
    </section>
  );
};

export default EbookPlatform;
