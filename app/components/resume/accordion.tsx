'use client'
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './resume.module.css';

interface accoridionType  {
    expanded: boolean,
    setExpanded: (p: boolean) => void,
    i: boolean,
    bullets: string[],
    title: string
}


const Accordion: React.FC<accoridionType> = ({ i, expanded, setExpanded, bullets, title }) => {
  const isOpen = i === expanded;
    {/* Stagger children animation */}
      const container = {
        hidden: { opacity: 1, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
            delay: 0.7,
          },
        },
      };
  {/* Fade up animation */}
  const item = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };
  return (
    <>
      <motion.div
        initial={false}>
        <div className={styles.spacer}>
            <div className={styles.skillsBar}>
                <h5 className={styles.headingS}> {title}</h5>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                className={styles.displayButton} 
                onClick={() => setExpanded(isOpen ? false : i)}>
                Hide</motion.button>
            </div>
        </div>

      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // Add animations for the accordion content
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div 
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true}}
            className={styles.bullets}>
           {bullets.map((i) => (
              <motion.h4
              variants={item}
              className={styles.bulletW}>{i}</motion.h4>
            ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
