"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const AnimateLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm p-4 sm:p-6 md:p-8 rounded-xl flex items-center justify-center space-y-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AnimateLayout;