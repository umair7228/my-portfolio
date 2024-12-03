"use client";
import React from "react";
import Link from "next/link";
import dashboard from "../../../../../public/projects-images/frontend-images/dashboard.png";
import amazon from "../../../../../public/projects-images/frontend-images/amazon-clone.png";
import portfolioWeb from "../../../../../public/projects-images/frontend-images/portfolio-web.png";
import editableResume from "../../../../../public/projects-images/frontend-images/editable-resume.png";
import todoList from "../../../../../public/projects-images/frontend-images/todo-list.png";
import docsManagement from "../../../../../public/projects-images/frontend-images/docs-management.png";
import imageSlider from "../../../../../public/projects-images/frontend-images/imageSlider.png";
import facebookPage from "../../../../../public/projects-images/frontend-images/facebook.png";
import tectAgency from "../../../../../public/projects-images/frontend-images/techAgency.png";
import schoolAcadmy from "../../../../../public/projects-images/frontend-images/schoolAcadmy.png";
import umairPortolio from "../../../../../public/projects-images/frontend-images/umairPortfolio.png";
import Image from "next/image";
import { frontendProjects } from "@/app/data";
import ItemLayout from "../ItemLayout";
import { motion } from "framer-motion";

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
        {/* project 11 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 p-4 pb-28 md:pb-36 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={umairPortolio}
            alt="Umair Portolio Image"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.portfolioProject.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.portfolioProject.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3 ">
            <Link
              href={frontendProjects.portfolioProject.demoLink}
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
              href={"https://umair-portfolio-web.vercel.app/"}
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

        {/* project 10 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 p-4 pb-28 md:pb-36 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={schoolAcadmy}
            alt="School Website Image"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.schoolProject.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.schoolProject.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3 ">
            <Link
              href={frontendProjects.schoolProject.demoLink}
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
              href={"https://umair-school-academy.vercel.app/"}
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

        {/* project 9 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 p-4 pb-28 md:pb-36 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={tectAgency}
            alt="Tech Agency Website Image"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.techAgencyProject.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.techAgencyProject.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3 ">
            <Link
              href={frontendProjects.techAgencyProject.demoLink}
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
              href={"https://umair-tech-agency.vercel.app/"}
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


        {/* project 8 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 p-4 pb-28 md:pb-36 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={dashboard}
            alt="Dashboard Image"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.dashboardProject.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.dashboardProject.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3 ">
            <Link
              href={frontendProjects.dashboardProject.demoLink}
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
              href={"https://umair-dashboard-app.vercel.app/"}
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

        {/* project 7 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 pb-24 md:pb-36 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={amazon}
            alt="Amazon Image"
            className="w-full h-[50%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.amazonProject.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.amazonProject.description}
          </p>
          
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3">
            <Link
              href={frontendProjects.amazonProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className=" text-xs md:text-lg lg:text-[15px]text-foreground select-none custom-bg py-2 w-full rounded-xl  "
              >
                Details
              </motion.button>
            </Link>

            <Link
              href={"https://umair7228.github.io/Amazon-Clone/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none custom-bg py-2 w-full rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
            
          </div>
          
        </motion.div>

        {/* project 6 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150  pb-32 lg:pb-36 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={portfolioWeb}
            alt="Portfolio Web"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.portfolioWeb.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.portfolioWeb.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3">
            <Link
              href={frontendProjects.portfolioWeb.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none w-full py-2 custom-bg rounded-xl"
              >
                Details
              </motion.button>
            </Link>
            <Link
              href={"https://umair7228.github.io/umair-portfolio-web/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none custom-bg w-full py-2 rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 5 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 pb-10 lg:pb-24 xl:pb-12 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={editableResume}
            alt="editable Resume"
            className="w-full h-[50%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.editableResume.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.editableResume.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3">
            <Link
              href={frontendProjects.editableResume.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none custom-bg w-full py-2 rounded-xl  "
              >
                Details
              </motion.button>
            </Link>
            <Link
              href={"https://editable-resume-builder-theta.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none w-full py-2 custom-bg rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 4 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 lg:pb-24 xl:pb-12 pb-28 md:pb-36 pb-16 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={todoList}
            alt="Todo List"
            className="w-full h-[50%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.todoList.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.todoList.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3">
            <Link
              href={frontendProjects.todoList.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none  w-full py-2 custom-bg rounded-xl  "
              >
                Details
              </motion.button>
            </Link>
            <Link
              href={"https://react-todo-list-rosy-chi.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none w-full py-2 custom-bg rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 3 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 lg:pb-24 xl:pb-12 pb-28 md:pb-36 pb-16 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={docsManagement}
            alt="Docs Management"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.docsManagement.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.docsManagement.description}
          </p>
          <div className="absolute bottom-4 w-[90%] xl:w-[92%] flex flex-col gap-3">
            <Link
              href={frontendProjects.docsManagement.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none  w-full py-2 custom-bg rounded-xl  "
              >
                Details
              </motion.button>
            </Link>
            <Link
              href={"https://umair-docs-app.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-xs md:text-lg lg:text-[15px] text-foreground select-none  w-full py-2 custom-bg rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 2 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 lg:pb-20 xl:pb-32 pb-28 md:pb-36 pb-16 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={imageSlider}
            alt="Image Slider"
            className="w-full h-[50%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.imageSlider.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.imageSlider.description}
          </p>
          <Link
            href={frontendProjects.imageSlider.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="text-xs md:text-lg lg:text-[15px] absolute bottom-4 text-foreground select-none custom-bg w-[90%] xl:w-[92%] py-2 rounded-xl  "
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 1 */}
        <motion.div
          variants={divVariant}
          className="relative col-span-full md:col-span-6 lg:col-span-4 h-auto 2xl:col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 lg:pb-14 xl:pb-32 pb-28 md:pb-36 pb-16 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl   "
        >
          {/* image */}
          <Image
            src={facebookPage}
            alt="Facebook"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-lg md:text-xl 2xl:text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.facebookLogin.name}
          </h2>
          <p className="text-sm md:text-[1rem] text-muted select-none pointer-events-none">
            {frontendProjects.facebookLogin.description}
          </p>
          <Link
            href={frontendProjects.facebookLogin.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, color: "#EBDE67" }}
              className="text-xs md:text-lg lg:text-[15px] absolute bottom-4 text-foreground select-none custom-bg w-[90%] xl:w-[92%] py-2 rounded-xl  "
            >
              Details
            </motion.button>
          </Link>
        </motion.div>
      </ItemLayout>
    </section>
  );
};

export default FrontendLayout;
