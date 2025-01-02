
import { motion } from "framer-motion";

const Title = () => {

  return (
    <div>
      <motion.h1
        initial={{opacity: 0, x: -200}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.6, delay: 0.3, ease: 'circOut'}}
        className=" text-[1.7rem] sm:text-[2.5rem] md:text-[3.2rem] sm:mt-6 md:mt-3 lg:text-[2.7rem] xl:text-[3.5rem] 2xl:text-[4.1rem] font-[font5] tracking-wide bg-gradient-to-l from-gray-100 to-cyan-300 bg-clip-text text-transparent uppercase"
      >
        Cloud Data Engineer
      </motion.h1>

      <motion.h2
        initial={{opacity: 0, x: -200}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.6, delay: 0.7, ease: 'circOut'}}
        className="text-[1.5rem] sm:text-[2.3rem] md:text-[2.9rem] lg:text-[2.5rem] xl:text-[3.2rem] 2xl:text-[3.8rem] font-[font5] tracking-wide bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent uppercase"
      >
        & Frontend Developer
      </motion.h2>

      <motion.h3
        initial={{opacity: 0, x: -200}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.6, delay: 1, ease: 'circOut'}}
        className="text-[1.3rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.8vw] xl:text-[3vw] 2xl:text-[3rem] font-[font4] tracking-wide text-[#00d9c0] uppercase"
      >
        for Modern Solutions
      </motion.h3>
    </div>
  );
};

export default Title;