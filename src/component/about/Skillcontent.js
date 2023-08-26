import React from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Skillcontent = ({ title, para, cus_btn }) => {
  return (
    <motion.section
      initial={{
        x: 400,
      }}
      animate={{
        x: 0,
        type: 'spring'
      }}
      transition={{
        ease: "linear",
        duration: .5,
        x: { duration: 1 },
        type: 'spring'
      }}
      id="skill_content"
    >
      <h3 className={dmsans.className}>{title}</h3>
      <p className={dmsans.className}>{para}</p>
      <button className={dmsans.className}>{cus_btn}</button>
    </motion.section>
  );
};

export default Skillcontent;
