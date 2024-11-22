import Button from "@/app/components/Button";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Notebook } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Buttons = ({ triggerAnimation }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Buttons Section */}
      <div
        className={`flex flex-col gap-5 mt-12 sm:mt-16 md:mt-8 lg:mt-12 xl:mt-24 2xl:mt-16 ${
          triggerAnimation ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
      >
        <div className="flex gap-3 md:gap-4 lg:gap-5">
          <Link 
          href={"https://www.linkedin.com/in/umairnawaz7228/"}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-xl xs:rounded-[0.50rem] sm:rounded-xl py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider">
              <Linkedin className="w-4 sm:w-6" />
              Linkedin
            </Button>
          </Link>

          <Link 
          href={"https://github.com/umair7228"}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-xl xs:rounded-[0.50rem] sm:rounded-xl py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider">
              <Github className="w-4  sm:w-6" />
              Github
            </Button>
          </Link>

          {/* Resume Dropdown */}
          <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-xl xs:rounded-[0.50rem] sm:rounded-xl py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider mb-2">
              <Notebook className="w-4 sm:w-6" />
              Resume
              <ChevronDown className="w-4 sm:w-6" />
            </Button>

            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 sm:right-auto flex flex-col custom-bg shadow-lg gap-1 sm:gap-3 items-center justify-center rounded-xl py-2 px-2 sm:px-3 z-10"
              >
                <Link href="/resumes/data-engineering-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="text-xs lg:text-sm hover:text-accent bg-none border-b border-zinc-400 pb-1 sm:custom-bg sm:py-2 sm:rounded-xl w-[32vw] sm:w-[25vw] md:w-[23vw] lg:w-[18vw] xl:w-[14vw] 2xl:w-[10vw]">Data Engineering CV</button>
                </Link>
                <Link href="/resumes/frontend-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="text-xs lg:text-sm hover:text-accent bg-none sm:custom-bg  sm:py-2 sm:rounded-xl w-[32vw] sm:w-[25vw] md:w-[23vw] lg:w-[18vw] xl:w-[14vw] 2xl:w-[10vw]">Frontend CV</button>
                </Link>
              </motion.div>
            )}
          </div>

        </div>

        <Link href={"/about"}>
          <motion.button
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="tracking-wider -z-10 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-2 2xl:py-3 px-5 rounded-xl"
          >
            Who I Am
          </motion.button>
        </Link>
      </div>
    </>
  );
};

export default Buttons;
