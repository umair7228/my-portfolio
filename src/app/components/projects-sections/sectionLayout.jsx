"use client"
import Image from "next/image";
import React from "react";
import dataEngineering from "../../../../public/section-images/data-engineering.png";
import frontend from "../../../../public/section-images/frontend-development.jpg";
import { projectSections } from "@/app/data";
import Link from "next/link";
import {motion} from 'framer-motion'

const SectionLayout = () => {
  
  return (
    <section className="flex flex-col  h-screen justify-center w-full items-center gap-16">
      <div className="text-7xl font-bold font-serif text-accent select-none">
        Projects Page
      </div>
      
      <div className="relative grid grid-cols-2 gap-24 overflow-hidden px-24 max-w-[75%]">

        <div className="relative pb-16 flex flex-col gap-3 text-start animate-slide-down custom-bg p-4 rounded-xl">
          {/* image */}
          <Image
            src={dataEngineering}
            alt="Data Engineering"
            className="w-full object-cover object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {projectSections.engineering.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {projectSections.engineering.description}
          </p>
          <Link href={'/components/project-details/data-engineering'}>
            <motion.button
              whileTap={{scale: 0.8}}
              whileHover={{scale: 1.1, color: "#EBDE67"}} 
              className="absolute bottom-3 text-foreground select-none custom-bg px-4 py-2 rounded-xl ">
                See Projects
            </motion.button>
          </Link>
          
        </div>

        <div className="relative pb-16 flex flex-col gap-3 text-start animate-slide-up custom-bg p-4 rounded-xl">
          {/* image */}
          <Image
            src={frontend}
            alt="Frontend"
            className="w-full object-cover select-none rounded-xl pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {projectSections.frontend.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {projectSections.frontend.description}
          </p>
          <Link href={"/components/project-details/frontend"}>
            <motion.button
              whileTap={{scale: 0.8}}
              whileHover={{scale: 1.1, color: "#EBDE67"}} 
              className="absolute bottom-3 text-foreground select-none custom-bg px-4 py-2 rounded-xl ">
                See Projects
            </motion.button>
          </Link>
        </div>

      </div>

      
    </section>
  );
};

export default SectionLayout;
