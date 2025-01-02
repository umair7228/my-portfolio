'use client'
import React from "react";
import dataEngineering from "../../../../public/section-images/data-engineering.png";
import frontend from "../../../../public/section-images/frontend-development.jpg";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'

const ServicesDetails = () => {
  return (
    <section className="flex flex-col h-full overflow-x-hidden lg:overflow-y-hidden justify-center w-full max-w-screen-2xl items-center px-6 py-14 sm:px-20 md:px-28 lg:px-12 xl:px-36 gap-8 2xl:gap-16">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center font-bold font-serif text-accent select-none mt-11 xs:mt-10 md:mt-20 tracking-widest">
        Transforming Ideas into Solutions with Expertise and Innovation
      </motion.div>

      <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-7 md:gap-12 2xl:gap-24 2xl:px-24 ">
        <div className="flex flex-col gap-3 text-start animate-slide-right lg:animate-slide-down custom-bg p-4 rounded-xl ">
          {/* image */}
          <Image
            src={dataEngineering}
            alt="Data Engineering"
            className="w-full object-cover object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none tracking-wider">
            Cloud Data Engineering
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none tracking-wider">
            Designing and building scalable data pipelines to seamlessly ingest,
            process, and transform data across cloud platforms like AWS and
            Snowflake. My expertise lies in Python, SQL, Apache Airflow, and
            cloud infrastructure, ensuring efficient data management and robust
            analytics capabilities.
          </p>
          <div className="flex justify-between w-full">
            <Link href={"/contact"}>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }} 
              className="text-xs md:text-lg lg:text-[15px] lg:absolute lg:bottom-5 xs:mt-5 md:mt-6 text-foreground tracking-wider select-none border border-solid border-accent/30 px-4 py-2 backdrop:blur-[6px] rounded-xl shadow-glass-inset hover:shadow-glass-sm">
                Hire Me
              </motion.button>
            </Link>

            <Link href={"/components/project-details/data-engineering"}>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }} 
              className="text-xs md:text-lg lg:text-[15px] lg:absolute lg:bottom-5 lg:right-10 xs:mt-5 md:mt-6 text-foreground tracking-wider select-none border border-solid border-accent/30 px-4 py-2 backdrop:blur-[6px] rounded-xl shadow-glass-inset hover:shadow-glass-sm">
                See My Projects
              </motion.button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-start animate-slide-left lg:animate-slide-up custom-bg p-4 rounded-xl lg:h-[580px] xl:h-[600px] ">
          {/* image */}
          <Image
            src={frontend}
            alt="Frontend"
            className="w-full rounded-xl object-cover select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none tracking-wider">
            Frontend Development
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none tracking-wider">
            Creating intuitive, responsive, and dynamic user interfaces with
            modern tools like React.js, Next.js, TypeScript, and Tailwind CSS. I
            focus on crafting user-centric web experiences with clean code and
            seamless design that work across all devices.
          </p>
          <div className="flex justify-between w-full">
            <Link href={"/contact"}>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }} 
              className="text-xs md:text-lg lg:text-[15px] lg:absolute lg:bottom-5 xs:mt-5 md:mt-6 text-foreground tracking-wider select-none border border-solid border-accent/30 px-4 py-2 backdrop:blur-[6px] rounded-xl shadow-glass-inset hover:shadow-glass-sm">
                Hire Me
              </motion.button>
            </Link>

            <Link href={"/components/project-details/frontend"}>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }} 
              className="text-xs md:text-lg lg:text-[15px] lg:absolute lg:bottom-5 lg:right-10 xs:mt-5 md:mt-6 tracking-wider text-foreground select-none border border-solid border-accent/30 px-4 py-2 backdrop:blur-[6px] rounded-xl shadow-glass-inset hover:shadow-glass-sm">
                See My Projects
              </motion.button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesDetails;
