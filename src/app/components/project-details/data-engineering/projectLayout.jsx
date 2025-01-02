"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ItemLayout from "../ItemLayout";
import { motion } from "framer-motion";
import { dataEngineeringProjects } from "../../../../../data/dataEngineering";

const divVariant = {
  hidden: { opacity: 0 },
  midOpacity: { opacity: 0.25 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const ProjectLayout = () => {
  return (
    <section className="flex flex-col w-full  h-full justify-center items-center gap-6 sm:gap-8 md:gap-10 xl:gap-16 mt-8 my-8 sm:my-12 lg:my-16 2xl:my-36">
      {/* heading */}
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-center font-bold font-serif text-accent select-none mt-14 sm:mt-16 lg:mt-12 xl:mt-14 2xl:mt-0 tracking-widest">
        Data Engineering Projects
      </div>

      {/* boxes */}
      <ItemLayout>
        {dataEngineeringProjects.map((project) => (
          <motion.div
          variants={divVariant}
          key={project.id}
          className="col-span-12 md:col-span-6 xl:col-span-4 pb-16 hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={project.image}
            alt="COVID Data Pipeline Architecture Diagram"
            width={400}
            height={300}
            className="w-full h-[50%] sm:h-[60%] md:h-[50%] lg:h-[55%] 2xl:h-[55%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground tracking-wider select-none pointer-events-none">
            {project.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted tracking-wider select-none pointer-events-none">
            {project.description}
          </p>
          <Link
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="text-xs md:text-lg lg:text-[15px] absolute bottom-5 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>
        ))}
      </ItemLayout>
    </section>
  );
};

export default ProjectLayout;
