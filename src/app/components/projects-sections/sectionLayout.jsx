"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion'
import { projectSections } from "../../../../data/projectSection";

const SectionLayout = () => {
  
  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center gap-10 py-10 sm:py-16 lg:py-20 max-w-screen-2xl">
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold font-serif text-accent select-none mt-14 sm:mt-8 tracking-widest">
        Projects Page
      </div>
      
      <div className="relative grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 xl:gap-20 overflow-hidden px-8 sm:px-20 md:px-28 lg:px-16 xl:px-6 w-full 2xl:max-w-[75%]">

        <div className="relative pb-16 flex flex-col gap-3 text-start animate-slide-right lg:animate-slide-down custom-bg p-4 rounded-xl">
          {/* image */}
          <Image
            src={projectSections.engineering.image}
            alt="Data Engineering"
            width={400}
            height={300}
            className="w-full object-cover object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none tracking-wider">
            {projectSections.engineering.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none tracking-wider">
            {projectSections.engineering.description}
          </p>
          <Link href={'/components/project-details/data-engineering'}>
            <motion.button
              whileTap={{scale: 0.8}}
              whileHover={{scale: 1.1, color: "#EBDE67"}} 
              className="text-xs md:text-lg lg:text-[15px] absolute bottom-3 text-foreground select-none custom-bg px-4 py-2 rounded-xl tracking-wider">
                See Projects
            </motion.button>
          </Link>
          
        </div>

        <div className="relative pb-16 flex flex-col gap-3 text-start animate-slide-left lg:animate-slide-up custom-bg p-4 rounded-xl">
          {/* image */}
          <Image
            src={projectSections.frontend.image}
            alt="Frontend"
            width={400}
            height={300}
            className="w-full object-cover select-none rounded-xl pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none  tracking-wider">
            {projectSections.frontend.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none tracking-wider">
            {projectSections.frontend.description}
          </p>
          <Link href={"/components/project-details/frontend"}>
            <motion.button
              whileTap={{scale: 0.8}}
              whileHover={{scale: 1.1, color: "#EBDE67"}} 
              className="text-xs md:text-lg lg:text-[15px] absolute bottom-3 text-foreground select-none custom-bg px-4 py-2 rounded-xl tracking-wider ">
                See Projects
            </motion.button>
          </Link>
        </div>

      </div>

      
    </section>
  );
};

export default SectionLayout;
