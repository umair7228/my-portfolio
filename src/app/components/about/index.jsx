"use client";
import { motion } from "framer-motion";
import umai2 from "../../../../public/home-image/umair-gray.png";
import React from "react";
import {
  FaAws,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDiscord,
} from "react-icons/fa6";
import { TbBrandSnowflake } from "react-icons/tb";
import {
  SiMicrosoftsqlserver,
  SiApacheairflow,
  SiVercel,
  SiApachekafka,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { VscVscodeInsiders } from "react-icons/vsc";
import AnimateLayout from "./AnimateLayout";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className=" w-full flex flex-col gap-12 pb-12 pt-10 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
      <div className="flex flex-col gap-14 w-full h-screen items-center justify-center text-center">
        {/* Image div  */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
        >
          <Image
            src={umai2}
            alt="Umair Image"
            className="shadow-glass-sm rounded-full backdrop-blur-[6px]"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl xs:text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-[font5] tracking-wide uppercase text-accent">
            Umair Nawaz
          </h1>
          <p className="font-light text-foreground text-xs xs:text-sm sm:text-lg">
            Meet the wizard behind this portfolio
          </p>
        </motion.div>
      </div>

      {/* Architect text  */}
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <AnimateLayout
          className={
            "col-span-full xl:col-span-8 row-span-2 flex flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left text-accent w-full capitalize tracking-wider">
            Architect of Enchantment
          </h2>

          <p className="font-light text-xs xs:text-sm 2xl:text-lg tracking-wide">
            Hello! I&#39;m Umair, a skilled Cloud Data Engineer and Frontend
            Developer with a passion for innovation and learning. My expertise
            in cloud data engineering includes AWS, Snowflake, Apache Kafka,
            Airflow SQL, Python (Pandas, Numpy), honed through the Saylani Mass
            IT Training (SMIT). I excel at designing scalable data pipelines and
            creating cloud-based solutions that optimize workflows and deliver
            impactful results.
          </p>

          <p className="font-light text-xs xs:text-sm 2xl:text-lg tracking-wide">
            On the frontend, I specialize in crafting responsive and
            user-friendly web applications using HTML, CSS (Tailwind CSS),
            JavaScript, TypeScript, React.js, and Next.js. With experience in
            Figma, I bring designs to life with seamless UI/UX experiences.
          </p>

          <p className="font-light text-xs xs:text-sm 2xl:text-lg tracking-wide">
            Having earned 27 certifications across cloud technologies, data
            engineering, and frontend development, my dedication to mastering
            modern tools is reflected in diverse projects, from data-driven
            systems to interactive web solutions. Always curious and motivated,
            I aim to create meaningful, innovative technology solutions.
          </p>
        </AnimateLayout>

        <AnimateLayout
          className={
            " col-span-full sm:col-span-6 xl:col-span-4 text-accent pointer-events-none select-none"
          }
        >
          <p className="font-semibold w-full text-center text-3xl md:text-7xl">
            18+ <sub className="font-semibold text-xl">Projects</sub>
          </p>
        </AnimateLayout>

        <AnimateLayout
          className={
            " col-span-full sm:col-span-6 xl:col-span-4 text-accent pointer-events-none select-none"
          }
        >
          <div className="font-semibold w-full text-center text-3xl md:text-7xl">
            1+ <sub className="font-semibold text-xl">Year Experience</sub>
          </div>
        </AnimateLayout>

        <AnimateLayout
          className={"col-span-full sm:col-span-5 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=umair7228&theme=transparent&hide_border=true&title_color=EBDE67&text_color=FFFFFF&icon_color=EBDE67&text_bold=false"
            alt="Umair Github"
            loading="lazy"
          />
        </AnimateLayout>

        <AnimateLayout
          className={"col-span-full sm:col-span-7 md:col-span-8 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=umair7228&theme=transparent&hide_border=true&title_color=EBDE67&text_color=FFFFFF&icon_color=EBDE67&text_bold=false"
            alt="Umair Github"
            loading="lazy"
          />
        </AnimateLayout>

        <AnimateLayout className={"col-span-full"}>
          <div className=" flex flex-wrap items-center justify-center gap-4">
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <FaAws className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 text-sky-500 rounded-2xl">
              <TbBrandSnowflake className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-red-400 p-2 md:p-3 rounded-2xl">
              <SiMicrosoftsqlserver className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-blue-400 p-2 md:p-3 rounded-2xl">
              <BiLogoPostgresql className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-400 p-2 md:p-3 rounded-2xl">
              <GrMysql className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-yellow-300 p-2 md:p-3 rounded-2xl">
              <IoLogoPython className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <SiApachekafka className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <SiApacheairflow className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <RiNextjsFill className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <GrReactjs className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-600 p-2 md:p-3 rounded-2xl">
              <BiLogoTypescript className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-yellow-400 p-2 md:p-3 rounded-2xl">
              <IoLogoJavascript className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <IoLogoCss3 className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <RiTailwindCssFill className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-500 p-2 md:p-3 rounded-2xl">
              <IoLogoHtml5 className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-green-500 p-2 md:p-3 rounded-2xl">
              <FaNodeJs className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-600 p-2 md:p-3 rounded-2xl">
              <FaGitAlt className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <FaGithub className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 p-2 md:p-3 rounded-2xl">
              <SiVercel className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-2 md:p-3 rounded-2xl">
              <VscVscodeInsiders className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
            <div className="bg-slate-700 text-purple-300 p-2 md:p-3 rounded-2xl">
              <FaDiscord className=" w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16  " />
            </div>
          </div>
        </AnimateLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
