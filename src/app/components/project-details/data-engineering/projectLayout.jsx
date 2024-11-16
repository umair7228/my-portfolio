"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dataEngineeringProjects } from "@/app/data";
import ItemLayout from "../ItemLayout";
import { motion } from "framer-motion";
import radfinImage from "../../../../../public/projects-images/data-engineering-images/redfin-diagram.png";
import snowflake from "../../../../../public/projects-images/data-engineering-images/flow.png";
import scdArchitecture from "../../../../../public/projects-images/data-engineering-images/scd-architecture.png";
import ecommerce from "../../../../../public/projects-images/data-analysis-images/ecommerce-sales-analysis.png";
import dataAnalysis from "../../../../../public/projects-images/data-analysis-images/end-to-end-data-analysis.png";
import netflixMovies from "../../../../../public/projects-images/data-analysis-images/investigatingNetflixMovies.jpg";
import githubHistory from "../../../../../public/projects-images/data-analysis-images/github-history.png";
import pythonETL from "../../../../../public/projects-images/data-analysis-images/python-etl-project.png";
import androidApp from "../../../../../public/projects-images/data-analysis-images/android-app-analysis.png";
import weatherMap from "../../../../../public/projects-images/data-engineering-images/weatherMap.png";

const divVariant = {
  hidden: { opacity: 0 },
  midOpacity: { opacity: 0.25 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const ProjectLayout = () => {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center gap-16 my-36">
      {/* heading */}
      <div className="text-7xl font-bold font-serif text-accent select-none">
        Data Engineering Projects
      </div>

      {/* boxes */}
      <ItemLayout>
        {/* project 10 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={weatherMap}
            alt="SCD Architecture"
            className="w-full h-[55%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.weatherMapProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.weatherMapProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.weatherMapProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>


        {/* project 9 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={scdArchitecture}
            alt="SCD Architecture"
            className="w-full h-[55%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.scdImplementationProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.scdImplementationProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.scdImplementationProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>


        {/* project 8 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={radfinImage}
            alt="Data Engineering"
            className="w-full h-[55%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.redfinProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.redfinProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.redfinProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 7 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={snowflake}
            alt="Data Engineering"
            className="w-full h-[55%] object-fill object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.snowflakeDataLoading.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.snowflakeDataLoading.description}
          </p>
          <Link
            href={dataEngineeringProjects.snowflakeDataLoading.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 6 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={ecommerce}
            alt="Ecommerce Data Analysis Project"
            className="w-full h-[55%] object-fill object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.eCommerceSalesProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.eCommerceSalesProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.eCommerceSalesProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 5 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={dataAnalysis}
            alt="End to end data analysis project"
            className="w-full h-[55%] object-fill object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.dataAnalysisProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.dataAnalysisProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.dataAnalysisProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 4 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={netflixMovies}
            alt="Analysis on netflix movies"
            className="w-full h-[55%] object-fill object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.netflixMoviesProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.netflixMoviesProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.netflixMoviesProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 3 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={githubHistory}
            alt="Analysis on github history"
            className="w-full h-[55%] object-fill object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.githubHistoryProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.githubHistoryProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.githubHistoryProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 2 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={pythonETL}
            alt="ETL Pipline using python"
            className="w-full h-[55%] object-fill object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.pythonETLProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.pythonETLProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.pythonETLProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 1 */}
        <motion.div
          variants={divVariant}
          className="col-span-4 h-[600px] hover:scale-105 duration-150 flex flex-col gap-3 text-start p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={androidApp}
            alt="Analysis on Android App Market"
            className="w-full h-[55%] object-fill object-center rounded-xl select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {dataEngineeringProjects.androidAppProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {dataEngineeringProjects.androidAppProject.description}
          </p>
          <Link
            href={dataEngineeringProjects.androidAppProject.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="absolute bottom-8 text-foreground select-none custom-bg px-4 py-2 rounded-xl"
            >
              Details
            </motion.button>
          </Link>
        </motion.div>


      </ItemLayout>
    </section>
  );
};

export default ProjectLayout;