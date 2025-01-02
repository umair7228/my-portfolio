"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.20
            }
        }
      }}
      initial="hidden"
      animate="show"
      className={clsx('relative grid grid-cols-12 gap-4 sm:gap-6 xl:gap-8 2xl:gap-10 justify-between px-6 sm:px-10 lg:px-12 2xl:px-0 w-full max-w-screen-2xl')}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;