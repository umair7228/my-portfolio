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
      className={clsx('relative grid grid-cols-12 gap-10 justify-between px-28 w-full')}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;