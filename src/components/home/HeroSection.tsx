import {
  FaHeadphones,
  FaChalkboardTeacher,
  FaRocket,
  FaLaughBeam,
  FaGlobe,
  FaMagic,
  FaBrain,
  FaComments,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/v6VRv33K/Chat-GPT-Image-3-jun-2025-09-16-15-p-m.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Floating Icons */}
        {/* Floating Icons */}

        <FaHeadphones className="text-white text-2xl md:text-4xl absolute top-1/3 right-20 animate-floating-fast delay-200" />

        <FaChalkboardTeacher className="text-white text-2xl md:text-4xl absolute bottom-28 right-1/5 animate-floating-fast delay-500" />

        {/* EXTRA FUN ICONS */}
        <FaRocket className="text-yellow-300 text-2xl md:text-4xl absolute top-20px right-1/4 animate-floating-medium delay-700" />
        <FaLaughBeam className="text-pink-400 text-2xl md:text-4xl absolute top-1/2 left-10 animate-floating-fast delay-1000" />
        <FaGlobe className="text-green-300 text-2xl md:text-4xl absolute bottom-10 right-10  delay-[1200ms] animate-floating-medium" />
        <FaMagic className="text-purple-400 text-2xl md:text-4xl absolute bottom-1/4 left-1/3 animate-floating-fast delay-[1400ms]" />

        {/* NEW TOP RIGHT ICONS */}
        <FaBrain className="text-red-300 text-2xl md:text-4xl absolute top-100px right-10 animate-floating-fast delay-[600ms]" />
        <FaComments className="text-sky-300 text-2xl md:text-4xl absolute top-24 right-5 animate-floating-fast delay-[1000ms] top-100px" />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4 text-white">
          Your All-in-One English Learning Platform.
        </h1>

        {/* Subtext */}
        <span className="text-secondary ">
          reading, writing, speaking, listening, and more.
        </span>

        {/* Email + CTA */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-8">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-5 py-3 border border-gray-300 rounded-md w-72 focus:outline-none"
          />
          <button className="button-primary">Start A Free Trial →</button>
        </div>

        {/* Optional Details */}
        <div className="text-secondary ">
          ✅ 14 days free trial. ❌ Cancel anytime.
        </div>
      </section>
    </div>
  );
};

export default Hero;
