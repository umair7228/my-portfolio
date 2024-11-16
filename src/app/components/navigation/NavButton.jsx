"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo/logo.png";
import { Award, Home, Mail, Menu, Palette, User } from "lucide-react";
import { GrServices } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";

const NavButton = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sheetRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target)) {
        setIsSheetOpen(false);
      }
    };

    if (isSheetOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSheetOpen]);

  return (
    <div>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute top-0 left-0 h-24 w-full flex items-center lg:justify-center justify-between px-8 sm:px-20 lg:px-10 lg:gap-32 xl:gap-52 2xl:gap-96"
      >
        {/* Logo Section */}
        <div>
          <Link href={"/"} className="flex gap-2 lg:gap-2 xl:gap-3 items-center justify-center">
            <Image src={logo} alt="Logo" className="w-7 xl:w-8 2xl:w-10" />
            <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-bold tracking-wider xl:py-1 ">UMAIR</h2>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsSheetOpen(true)}
          className=" lg:hidden"
        >
          <Menu className="w-7 h-7"/>
        </button>

        {/* Navigation Buttons for Large Screens */}
        <div className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
          <Link href={"/"}>
            <Button className="flex gap-1 lg:text-sm items-center hover:scale-105 duration-150 active:scale-95 tracking-wider xl:py-1">
              <Home className="w-5" />
              Home
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button className="flex gap-1 lg:text-sm items-center hover:scale-105 duration-150 active:scale-95 tracking-wider xl:py-1">
              <User className="w-5" />
              About
            </Button>
          </Link>
          <Link href={"/services"}>
            <Button className="flex gap-1 lg:text-sm items-center hover:scale-105 duration-150 active:scale-95 tracking-wider xl:py-1">
              <GrServices className="w-5" />
              Services
            </Button>
          </Link>
          <Link href={"/projects"}>
            <Button className="flex gap-1 lg:text-sm items-center hover:scale-105 duration-150 active:scale-95 tracking-wider xl:py-1">
              <Palette className="w-5" />
              Projects
            </Button>
          </Link>
          <Link href={"/certifications"}>
            <Button className="flex gap-1 lg:text-sm items-center hover:scale-105 duration-150 active:scale-95 tracking-wider xl:py-1">
              <Award className="w-5" />
              Certifications
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button className="flex gap-1 lg:text-sm items-center hover:scale-105 duration-150 active:scale-95 tracking-wider xl:py-1">
              <Mail className="w-5" />
              Contact
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Sheet Navigation */}
      <AnimatePresence>
        {isSheetOpen && (
          <motion.div
            ref={sheetRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[50%] custom-bg shadow-lg z-50 flex flex-col p-6 rounded-tl-3xl"
            onClick={() => setIsSheetOpen(false)}
          >
            
            <div className="flex items-center justify-between mb-7">
              <div>
                <Link href={"/"} className="flex gap-2 lg:gap-2 xl:gap-3 items-center justify-center">
                  <Image src={logo} alt="Logo" className="w-7 xl:w-8 2xl:w-10" />
                  <h2 className="text-2xl font-bold tracking-wider xl:py-1 ">UMAIR</h2>
                </Link>
              </div>

              <button
                onClick={() => setIsSheetOpen(false)}
                className="self-end text-2xl"
              >
                ✕
              </button>
            </div>
            <hr className="bg-gray-700 h-[1px] border-0" />
            <nav className="flex flex-col items-center gap-6 mt-7">
              <Link href={"/"}>
                <Button className="flex gap-1 items-center hover:scale-105 duration-150 active:scale-95 tracking-wider w-40 py-2 justify-center">
                  <Home className="w-5" />
                  Home
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button className="flex gap-1 items-center hover:scale-105 duration-150 active:scale-95 tracking-wider w-40 py-2 justify-center">
                  <User className="w-5" />
                  About
                </Button>
              </Link>
              <Link href={"/services"}>
                <Button className="flex gap-1 items-center hover:scale-105 duration-150 active:scale-95 tracking-wider w-40 py-2 justify-center">
                  <GrServices className="w-5" />
                  Services
                </Button>
              </Link>
              <Link href={"/projects"}>
                <Button className="flex gap-1 items-center hover:scale-105 duration-150 active:scale-95 tracking-wider w-40 py-2 justify-center">
                  <Palette className="w-5" />
                  Projects
                </Button>
              </Link>
              <Link href={"/certifications"}>
                <Button className="flex gap-1 items-center hover:scale-105 duration-150 active:scale-95 tracking-wider w-40 py-2 justify-center">
                  <Award className="w-5" />
                  Certifications
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button className="flex gap-1 items-center hover:scale-105 duration-150 active:scale-95 tracking-wider w-40 py-2 justify-center">
                  <Mail className="w-5" />
                  Contact
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavButton;
