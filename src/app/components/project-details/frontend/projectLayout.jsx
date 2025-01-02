"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ItemLayout from "../ItemLayout";
import { motion } from "framer-motion";
import { frontendProjects } from "../../../../../data/frontendData";

const divVariant = {
  hidden: { opacity: 0 },
  midOpacity: { opacity: 0.25 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const FrontendLayout = () => {
  return (
    <section className="flex flex-col w-full justify-center pb-8 lg:pb-12 py-28 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 2xl:gap-16 ">
      {/* heading */}
      <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold font-serif text-accent select-none">
        Frontend Projects
      </div>

      {/* boxes */}
      <ItemLayout>
        {frontendProjects.map((project) => (
          <motion.div
          variants={divVariant}
          key={project.id}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 p-4 pb-28 md:pb-36 rounded-xl custom-bg"
          >
            {/* image */}
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={250}
              className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
            />

            <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
              {project.name}
            </h2>
            <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
              {project.description}
            </p>
            <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3 ">
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1, color: "#EBDE67" }}
                  className="text-xs md:text-lg lg:text-[15px] text-foreground select-none py-2 w-full rounded-xl custom-bg"
                >
                  Details
                </motion.button>
              </Link>
              <Link
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1, color: "#EBDE67" }}
                  className="text-xs md:text-lg lg:text-[15px] text-foreground select-none py-2 w-full rounded-xl custom-bg"
                >
                  Click For A Live Version
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </ItemLayout>
    </section>
  );
};

export default FrontendLayout;
