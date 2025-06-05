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

        <FaHeadphones className="text-white text-2xl md:text-4xl hidden md:block absolute top-1/3 right-20 animate-floating-fast delay-200" />

        <FaChalkboardTeacher className="text-white text-2xl md:text-4xl hidden md:block absolute bottom-28 right-1/5 animate-floating-fast delay-500" />

        {/* EXTRA FUN ICONS */}
        <FaRocket className="text-yellow-300 text-2xl md:text-4xl hidden md:block absolute top-20px right-1/4 animate-floating-medium delay-700" />
        <FaLaughBeam className="text-pink-400 text-2xl md:text-4xl hidden md:block absolute top-1/2 left-10 animate-floating-fast delay-1000" />
        <FaGlobe className="text-green-300 text-2xl md:text-4xl hidden md:block absolute bottom-10 right-10  delay-[1200ms] animate-floating-medium" />
        <FaMagic className="text-purple-400 text-2xl md:text-4xl hidden md:block absolute bottom-1/4 left-1/3 animate-floating-fast delay-[1400ms]" />

        {/* NEW TOP RIGHT ICONS */}
        <FaBrain className="text-red-300 text-2xl md:text-4xl hidden md:block absolute top-100px right-10 animate-floating-fast delay-[600ms]" />
        <FaComments className="text-sky-300 text-2xl md:text-4xl hidden md:block absolute top-24 right-5 animate-floating-fast delay-[1000ms] top-100px" />

        {/* Headline */}
        <h1 className="text-[15px]  md:text-5xl font-bold max-w-3xl leading-tight md:mb-4 text-white md:hidden block">
          <span className=""> Your All-in-One</span>
        </h1>
        <h1 className="text-[15px] mt-[10px] md:text-4xl font-bold max-w-3xl leading-tight md:mb-4 text-white">
          <span className="hidden md:block"> Your All-in-One</span> English
          Learning Platform.
        </h1>

        {/* Subtext */}
        <span className="text-secondary hidden md:block ">
          reading, writing, speaking, listening, and more.
        </span>

        {/* Email + CTA */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:mt-8 mt-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="md:px-5 md:py-3 border px-5 py-1 border-gray-300 rounded-md w-[200px]  focus:outline-none hidden md:block"
          />
          <button className="button-primary hidden md:block">
            Start A Free Trial →
          </button>
          <button className="px-4 py-2 text-[#ffffff] rounded-md cursor-pointer bg-gradient-to-r gap-2  from-[#c540e1] to-[#9133df] flex items-center justify-center hover:from-[#9133df] hover:to-[#572c7c] transition duration-300 md:hidden ">
            Start A Free Trial →
          </button>
        </div>

        {/* Optional Details */}
        <div className="text-secondary mt-4 hidden md:block">
          ✅ 14 days free trial. ❌ Cancel anytime.
        </div>
      </section>
    </div>
  );
};

export default Hero;
