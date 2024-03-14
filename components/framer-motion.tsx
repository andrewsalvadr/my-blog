"use client"

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AboutFramerMotionProps {
    children: ReactNode;
  }
  
  const AboutFramerMotion: React.FC<AboutFramerMotionProps> = ({ children }) => {
    const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
          opacity: 1,
          y: 0,
          transition: {
              duration: 0.5,
              ease: "easeInOut",
          },
      },
  };


  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
  );
}

export default AboutFramerMotion;