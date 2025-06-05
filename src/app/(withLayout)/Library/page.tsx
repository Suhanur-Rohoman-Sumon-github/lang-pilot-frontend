import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="min-h-screen py-16 px-4 sm:px-8  text-white">
        <div className="max-w-7xl mx-auto mt-8">
          <h2 className="text-4xl font-bold text-center mb-6">
            📚 Explore English Books
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Dive into a variety of hand-picked English learning books including
            grammar, vocabulary, IELTS prep, and more.
          </p>

          {/* Featured Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md p-6 hover:scale-105 transition">
              <Image
                width={400}
                height={300}
                src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=700&q=80"
                alt="English Grammar"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                Mastering English Grammar
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                An in-depth guide to understanding English grammar for all
                levels.
              </p>
              <button className="button-primary">Read Book</button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md p-6 hover:scale-105 transition">
              <Image
                width={400}
                height={300}
                src="https://sellular.com.bd/wp-content/uploads/2023/03/9780241299876.jpg"
                alt="Vocabulary Builder"
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                English Vocabulary Builder
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Improve your vocabulary with daily exercises and curated word
                lists.
              </p>
              <button className="button-primary">Read Book</button>
            </div>
          </div>

          {/* Grid of More Books */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Spoken English Basics",
                img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "IELTS Writing Guide",
                img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Common Phrases in English",
                img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "English Conversation Tactics",
                img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Phrasal Verbs Mastery",
                img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "English Idioms & Slang",
                img: "https://i.pinimg.com/736x/a4/1d/db/a41ddbd229fe406905d50691f9e6d3d7.jpg",
              },
              {
                title: "TOEFL Vocabulary Manual",
                img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Business English Toolkit",
                img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Daily English Challenges",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "English for Travelers",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMWfBac3y5Z3UYc8x_2No_zkBqnswcb8dVQ&s",
              },
              {
                title: "English Listening Practice",
                img: "https://images.unsplash.com/photo-1532009877282-3340270e0529?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Everyday Grammar Essentials",
                img: "https://images.unsplash.com/photo-1535385793344-539cb183d0c1?auto=format&fit=crop&w=600&q=80",
              },
            ].map((book, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md overflow-hidden hover:scale-105 transition"
              >
                <Image
                  width={400}
                  height={300}
                  src={book.img}
                  alt={book.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{book.title}</h4>
                  <button className="w-full button-primary">Read Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
