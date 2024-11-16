"use client";
import { useState } from "react";
import Image from "next/image";
import umair from "../../../../public/home-image/umair-gray.png";
import { motion } from "framer-motion";
import Title from "@/app/(sub pages)/home/Title";
import Buttons from "./buttons";

const HomePage = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  return (
    <main className="h-screen w-screen flex items-end pb-10 lg:pb-6 xl:pb-10 2xl:pb-14 justify-center overflow-x-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "circOut" }}
        className="relative flex flex-col lg:flex-row justify-between items-center custom-bg w-[90%] h-[85%] sm:h-[85%] md:h-[87%] lg:h-[80%] xl:h-[83%] 2xl:h-[85%] rounded-[20px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 z-50"
        style={{ perspective: "1000px" }}
      >
        {/* Content Div */}
        <motion.div className="flex flex-col text-center lg:text-start xs:items-center lg:items-start">
          <Title triggerAnimation={triggerAnimation} />
          <Buttons triggerAnimation={triggerAnimation} />
        </motion.div>

        {/* Image Div */}
        <motion.div
          initial={{ opacity: 0, x: 400, rotateY: 45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.7, ease: "circOut", delay: 0.7 }}
          className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[35%]"
          onAnimationComplete={() => setTriggerAnimation(true)} 
        >
          <Image
            src={umair}
            alt="Umair Image"
            className="shadow-glass-sm rounded-full"
            priority
          />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default HomePage;
