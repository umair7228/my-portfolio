import Button from "@/app/components/Button";
import Link from "next/link";
import { Github, Linkedin, Notebook } from "lucide-react";
import { motion } from "framer-motion";

const Buttons = ({ triggerAnimation }) => {
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
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-[0.50rem] sm:rounded-xl py1 sm:py-2 px-2 sm:px-4 tracking-wider">
              <Linkedin className="w-4 sm:w-6" />
              Linkedin
            </Button>
          </Link>

          <Link 
          href={"https://github.com/umair7228"}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-[0.50rem] sm:rounded-xl py1 sm:py-2 px-2 sm:px-4 tracking-wider">
              <Github className="w-4  sm:w-6" />
              Github
            </Button>
          </Link>

          <Link
            href={"/Data-Engineering-cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-[0.50rem] sm:rounded-xl py1 sm:py-2 px-2 sm:px-4 tracking-wider">
              <Notebook className="w-4  sm:w-6" />
              Resume
            </Button>
          </Link>
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
            className="tracking-wider bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-2 2xl:py-3 px-6 rounded-xl"
          >
            Who I Am
          </motion.button>
        </Link>
      </div>
    </>
  );
};

export default Buttons;
