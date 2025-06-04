import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative py-16  text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-10 shadow-xl border border-white/10 transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-4">EnglishMaster</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Empowering non-native speakers worldwide to master English with
                confidence through AI-powered lessons and tools.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/learn" className="hover:text-white transition">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-white transition"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/60">
            &copy; {new Date().getFullYear()} EnglishMaster. All rights
            reserved. Helping learners worldwide.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
