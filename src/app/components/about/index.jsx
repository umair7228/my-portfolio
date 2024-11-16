'use client'
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
        className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%]">
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
        <h1 className="text-4xl xs:text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-[font5] tracking-wide uppercase text-accent">Umair Nawaz</h1>
        <p className="font-light text-foreground text-xs xs:text-sm sm:text-lg">Meet the wizard behind this portfolio</p>
      </motion.div>
      </div>

      {/* Architect text  */}
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <AnimateLayout
          className={"col-span-full xl:col-span-8 row-span-2 flex flex-col items-start"}
        >
          <h2 className="text-xl md:text-2xl text-left text-accent w-full capitalize tracking-wider">
            Architect of Enchantment
          </h2>

          <p className="font-light text-xs xs:text-sm 2xl:text-lg tracking-wide">
            Hello! I&#39;m <strong>Umair</strong>, a passionate <strong>frontend developer</strong> and <strong>cloud data
            engineer</strong> with a diverse set of skills and a relentless drive for
            learning. As part of my <strong>Cloud applied Gen AI Engineering</strong> I specialize in creating elegant and functional web
            applications using <strong> HTML, CSS (Tailwind CSS), JavaScript, TypeScript,
            React.js,</strong> and <strong>Next.js</strong>. With a knack for design, I also have experience
            working with <strong>Figma</strong>, enhancing my ability to craft seamless UI/UX
            experiences. </p>

            <p className="font-light text-xs xs:text-sm 2xl:text-lg tracking-wide"> In addition to web development, my expertise extends to
            <strong> cloud technologies and data engineering</strong>. As part of my cloud data engineering journey through
            the <strong>Saylani Mass IT Training (SMIT)</strong>, I&#39;ve developed proficiency in <strong>Python (Pandas, NumPy, Matplotlib),
            Apache Kafka, Apache Airflow, SQL, Snowflake,</strong> and <strong>AWS</strong>. I love working with data
            pipelines and scalable cloud-based solutions, bridging the gap between
            <strong> frontend development</strong> and <strong>cloud engineering</strong>. </p> 

            <p className="font-light text-xs xs:text-sm 2xl:text-lg tracking-wide">I&#39;ve earned <strong>27 certifications</strong> across <strong>cloud technologies, data engineering, and
            frontend development</strong> (all available on certifications page), reflecting my commitment to mastering modern
            tools and practices. My work spans multiple projects, from <strong>interactive
            web apps</strong> to <strong>data-driven solutions</strong>, all available on the <strong>Projects</strong> page.
            </p>

            <p className="font-light text-xs xs:text-sm 2xl:text-lg tracking-wide">
              Always eager to learn and grow, I strive to stay on the cutting edge
              of technology. Whether it&#39;s building responsive web interfaces or
              managing complex data workflows, I am passionate about creating
              solutions that make an impact.
            </p>
        </AnimateLayout>

        <AnimateLayout className={"col-span-4 text-accent pointer-events-none select-none"}>
          <p className="font-semibold w-full text-center text-7xl">
            18+ <sub className="font-semibold text-xl">Projects</sub>
          </p>
        </AnimateLayout>

        <AnimateLayout className={"col-span-4 text-accent pointer-events-none select-none"}>
          <div className="font-semibold w-full text-center text-7xl">
            1+ <sub className="font-semibold text-xl">Year Experience</sub>
          </div>
        </AnimateLayout>

        <AnimateLayout className={"col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=umair7228&theme=transparent&hide_border=true&title_color=EBDE67&text_color=FFFFFF&icon_color=EBDE67&text_bold=false"
            alt="Umair Github"
            loading="lazy"
          />
        </AnimateLayout>

        <AnimateLayout className={"col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=umair7228&theme=transparent&hide_border=true&title_color=EBDE67&text_color=FFFFFF&icon_color=EBDE67&text_bold=false"
            alt="Umair Github"
            loading="lazy"
          />
        </AnimateLayout>

        <AnimateLayout className={"col-span-full"}>
          <div className=" flex flex-wrap gap-4">
            <div className="bg-slate-700 p-3 rounded-2xl">
              <FaAws className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 p-3 text-sky-500 rounded-2xl">
              <TbBrandSnowflake className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-red-400 p-3 rounded-2xl">
              <SiMicrosoftsqlserver className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-blue-400 p-3 rounded-2xl">
              <BiLogoPostgresql className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-400 p-3 rounded-2xl">
              <GrMysql className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-yellow-300 p-3 rounded-2xl">
              <IoLogoPython className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 p-3 rounded-2xl">
              <SiApacheairflow className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 p-3 rounded-2xl">
              <RiNextjsFill className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-3 rounded-2xl">
              <GrReactjs className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-600 p-3 rounded-2xl">
              <BiLogoTypescript className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-yellow-400 p-3 rounded-2xl">
              <IoLogoJavascript className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-3 rounded-2xl">
              <IoLogoCss3 className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-3 rounded-2xl">
              <RiTailwindCssFill className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-500 p-3 rounded-2xl">
              <IoLogoHtml5 className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-green-500 p-3 rounded-2xl">
              <FaNodeJs className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-orange-600 p-3 rounded-2xl">
              <FaGitAlt className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 p-3 rounded-2xl">
              <FaGithub className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 p-3 rounded-2xl">
              <SiVercel className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-sky-500 p-3 rounded-2xl">
              <VscVscodeInsiders className=" w-16 h-16  " />
            </div>
            <div className="bg-slate-700 text-purple-300 p-3 rounded-2xl">
              <FaDiscord className=" w-16 h-16  " />
            </div>
          </div>
        </AnimateLayout>
        
      </div>
    </section>
  );
};

export default AboutDetails;
