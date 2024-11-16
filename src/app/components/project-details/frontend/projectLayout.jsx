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
    <section className="flex flex-col w-full justify-center py-28 items-center gap-16 ">
      {/* heading */}
      <div className="text-7xl font-bold font-serif text-accent select-none">
        Frontend Projects
      </div>

      {/* boxes */}
      <ItemLayout>
        {/* project 1 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 h-full text-start hover:scale-105 duration-150 p-4 rounded-xl custom-bg"
        >
          {/* image */}
          <Image
            src={dashboard}
            alt="Dashboard Image"
            className="w-full h-[50%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.dashboardProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {frontendProjects.dashboardProject.description}
          </p>
          <div className="absolute bottom-4 w-full">
            <Link
              href={frontendProjects.dashboardProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className=" text-foreground select-none px-4 py-2  rounded-xl custom-bg"
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
                className="absolute right-7 text-foreground select-none px-4 py-2 rounded-xl custom-bg"
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 2 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={amazon}
            alt="Amazon Image"
            className="w-full h-[51%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.amazonProject.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {frontendProjects.amazonProject.description}
          </p>
          <div className="absolute bottom-4 w-full">
            <Link
              href={frontendProjects.amazonProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className=" text-foreground select-none custom-bg px-4 py-2  rounded-xl  "
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
                className="absolute right-7 text-foreground select-none custom-bg px-4 py-2 rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 3 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={portfolioWeb}
            alt="Portfolio Web"
            className="w-full h-[52%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.portfolioWeb.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {frontendProjects.portfolioWeb.description}
          </p>
          <div className="absolute bottom-4 w-full">
            <Link
              href={frontendProjects.portfolioWeb.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-foreground select-none px-4 py-2 custom-bg rounded-xl  "
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
                className="absolute right-7 text-foreground select-none custom-bg px-4 py-2 rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 4 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={editableResume}
            alt="editable Resume"
            className="w-full h-[52%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.editableResume.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {frontendProjects.editableResume.description}
          </p>
          <div className="absolute bottom-4 w-full ">
            <Link
              href={frontendProjects.editableResume.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-foreground select-none custom-bg px-4 py-2 rounded-xl  "
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
                className="absolute right-7 text-foreground select-none px-4 py-2 custom-bg rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 5 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 h-[489.16px] text-start hover:scale-105 duration-150 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={todoList}
            alt="Todo List"
            className="w-full h-[52%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.todoList.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {frontendProjects.todoList.description}
          </p>
          <div className="absolute bottom-4 w-full">
            <Link
              href={frontendProjects.todoList.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-foreground select-none  px-4 py-2 custom-bg rounded-xl  "
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
                className="absolute right-7 text-foreground select-none  px-4 py-2 custom-bg rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 6 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={docsManagement}
            alt="Docs Management"
            className="w-full h-[52%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.docsManagement.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
            {frontendProjects.docsManagement.description}
          </p>
          <div className="absolute bottom-4 w-full">
            <Link
              href={frontendProjects.docsManagement.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.1, color: "#EBDE67" }}
                className="text-foreground select-none  px-4 py-2 custom-bg rounded-xl  "
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
                className="absolute right-7 text-foreground select-none  px-4 py-2 custom-bg rounded-xl  "
              >
                Click For A Live Version
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* project 7 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl"
        >
          {/* image */}
          <Image
            src={imageSlider}
            alt="Image Slider"
            className="w-full h-[52%] object-cover rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.imageSlider.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
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
              className="absolute bottom-4 text-foreground select-none custom-bg px-4 py-2 rounded-xl  "
            >
              Details
            </motion.button>
          </Link>
        </motion.div>

        {/* project 8 */}
        <motion.div
          variants={divVariant}
          className="col-span-3 flex flex-col gap-3 text-start hover:scale-105 duration-150 animate-rotateBackToFront custom-bg bg-background/20 p-4 rounded-xl   "
        >
          {/* image */}
          <Image
            src={facebookPage}
            alt="Facebook"
            className="w-full h-[52%] object-fill rounded-xl object-center select-none pointer-events-none"
          />

          <h2 className="text-2xl text-foreground select-none pointer-events-none">
            {frontendProjects.facebookLogin.name}
          </h2>
          <p className="text-muted select-none pointer-events-none">
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
              className="absolute bottom-4 text-foreground select-none custom-bg px-4 py-2 rounded-xl  "
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
