"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { IoLogInOutline } from "react-icons/io5";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { useUser } from "@/context/userProvider";

import Image from "next/image";
const MainNavbar = () => {
  // const { user, isLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(""); // State to track active link

  // Function to handle active link
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  // const handleLogout = () => {
  //   // logout();
  // };

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-50 backdrop-blur-md py-1 border-b  border-white/20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="">
            <Link className="" href="/" onClick={() => handleLinkClick("home")}>
              <Image
                src={
                  "https://i.ibb.co.com/rGrLVCZs/Chat-GPT-Image-Apr-24-2025-02-07-44-PM-removebg-preview.png"
                }
                alt="logo"
                height={80}
                width={80}
              />
            </Link>
          </div>

          {/* Center Nav Links (Desktop) */}
          <div className="hidden md:flex md:space-x-3 lg:space-x-8 text-white md:text-[14px] text-base lg:text-base font-medium">
            <Link
              href="/"
              onClick={() => handleLinkClick("home")}
              className={`${
                activeLink === "home" ? "text-gray-400" : "text-white"
              } hover:bg-gradient-to-r hover:text-gray-500 hover:bg-clip-text transition`}
            >
              Home
            </Link>
            <Link
              href="/learn"
              onClick={() => handleLinkClick("learn")}
              className={`${
                activeLink === "learn" ? "text-gray-400" : "text-white"
              } hover:bg-gradient-to-r hover:text-gray-500 hover:bg-clip-text transition`}
            >
              Learn
            </Link>
            <Link
              href="/practice"
              onClick={() => handleLinkClick("practice")}
              className={`${
                activeLink === "practice" ? "text-gray-400" : "text-white"
              } hover:bg-gradient-to-r hover:text-gray-500 hover:bg-clip-text transition`}
            >
              Practice
            </Link>

           
            <Link
              href="/pricing"
              onClick={() => handleLinkClick("pricing")}
              className={`${
                activeLink === "pricing" ? "text-gray-400" : "text-white"
              } hover:bg-gradient-to-r hover:text-gray-500 hover:bg-clip-text transition`}
            >
              Pricing
            </Link>
            <Link
              href="/library"
              onClick={() => handleLinkClick("library")}
              className={`${
                activeLink === "library" ? "text-gray-400" : "text-white"
              } hover:bg-gradient-to-r hover:text-gray-500 hover:bg-clip-text transition`}
            >
              Library
            </Link>
          </div>

          {/* Login Button (Desktop) */}
          {/* <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-screen"></div>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profilePicture || "/avatar.png"} />
                    <AvatarFallback>
                      {user?.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 mt-2">
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div> */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              onClick={() => handleLinkClick("contact")}
              className={`${
                activeLink === "contact" ? "text-gray-400" : "text-white"
              } hover:bg-gradient-to-r hover:text-gray-500 hover:bg-clip-text transition`}
            >
              Login
            </Link>
            <Link href="/signup">
              <button className="button-primary flex items-center gap-2">
                Join <IoLogInOutline className="text-2xl" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#04091d]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-6 text-white text-lg font-medium">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={28} />
          </button>

          {/* Mobile Links */}
          <Link
            href="/"
            onClick={() => {
              handleLinkClick("home");
              setIsOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="/learn"
            onClick={() => {
              handleLinkClick("learn");
              setIsOpen(false);
            }}
          >
            Learn
          </Link>
          <Link
            href="/practice"
            onClick={() => {
              handleLinkClick("practice");
              setIsOpen(false);
            }}
          >
            Practice
          </Link>
          <Link
            href="/company"
            onClick={() => {
              handleLinkClick("company");
              setIsOpen(false);
            }}
          >
            Company
          </Link>
          <Link
            href="/pricing"
            onClick={() => {
              handleLinkClick("pricing");
              setIsOpen(false);
            }}
          >
            Pricing
          </Link>
          <Link
            href="/library"
            onClick={() => {
              handleLinkClick("library");
              setIsOpen(false);
            }}
          >
            Library
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="button-primary"
          >
            Join
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
