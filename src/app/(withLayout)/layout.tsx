import type { Metadata } from "next";
import "../../styel/globals.css";

import { Rubik } from "next/font/google";
import Footer from "@/components/Footers/MainFooter";
import { Providers } from "../providers";
import MainNavbar from "@/components/navbars/MainNavbar";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className}  antialiased`}>
        <Providers>
          <div className="bg-[#0f144b] text-white min-h-screen flex flex-col">
            <MainNavbar />
            <div className="">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
