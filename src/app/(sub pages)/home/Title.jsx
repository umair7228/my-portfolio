"use client";
import { motion } from "framer-motion";

const animationText = (text) => [...text];

const charVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Title = ({ triggerAnimation }) => {
  const fHeading = "Cloud Data Engineer";
  const sHeading = "& Frontend Developer";
  const tHeading = "for Modern Solutions";

  return (
    <div>
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate={triggerAnimation ? "visible" : "hidden"}
        className="text-[6.5vw] sm:text-[6.5vw] md:text-[5.5vw] sm:mt-6 md:mt-3 lg:text-[3.5vw] xl:text-[3.5vw] 2xl:text-[3.5vw] font-[font5] tracking-wide bg-gradient-to-l from-gray-100 to-cyan-300 bg-clip-text text-transparent uppercase"
      >
        {animationText(fHeading).map((char, i) => (
          <motion.span 
            key={i} 
            variants={charVariants} 
            transition={{ duration: 0.2, delay: i * 0.07}} // Add staggered delay here for each character
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate={triggerAnimation ? "visible" : "hidden"}
        className="text-[6vw] sm:text-[6vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3.5vw] 2xl:text-[3.2vw] font-[font5] tracking-wide bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent uppercase"
      >
        {animationText(sHeading).map((char, i) => (
          <motion.span 
            key={i} 
            variants={charVariants} 
            transition={{ duration: 0.2, delay: i * 0.05 + 1 }} // Adjust delay here for h2
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.h3
        variants={headingVariants}
        initial="hidden"
        animate={triggerAnimation ? "visible" : "hidden"}
        className="text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[2.8vw] xl:text-[2.8vw] 2xl:text-[2.5vw] font-[font4] tracking-wide text-[#00d9c0] uppercase"
      >
        {animationText(tHeading).map((char, i) => (
          <motion.span 
            key={i} 
            variants={charVariants} 
            transition={{ duration: 0.2, delay: i * 0.05 + 2 }} // Adjust delay here for h3
          >
            {char}
          </motion.span>
        ))}
      </motion.h3>
    </div>
  );
};

export default Title;