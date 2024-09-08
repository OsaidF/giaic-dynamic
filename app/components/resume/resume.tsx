"use client";
import React from "react";
import styles from "./resume.module.css";
import starRed from "../../public/images/star.png";
import star from "../../public/images/resume/starY.png";
import arrow from "../../public/images/resume/arrow-down.png";
import resume from "../../public/images/resume/resume.png";
import Image from "next/image";
import { useState } from "react";
import Accordion from "./accordion";
import { motion } from "framer-motion";

let softwareTools = ["Photoshop", "Illustrator", "VSCode", "React", "NextJs"];
let programming = ["HTML", "CSS", "JavaScript", "TypeScript"];
let softSkills = [
  "Web Design",
  "UI/UX",
  "Creative",
  "Detail-Oriented",
  "Hardworking",
];
let name = "Alex";
let paragraph =
  "I'm a self-taught Graphic Designer and Programmer based in USA with extensive front-end and back-end knowledge. I am currently living in France and pusuing a degree in Web and Digital Project Management.";
let link = "https://www.linkedin.com";
let education = [
  {
    id: 1,
    year: "2015-2019",
    heading: "Iowa State university",
    subHeading: "Bachelor in CS",
  },
  {
    id: 2,
    year: "2020-2021",
    heading: "Alphabet, Google",
    subHeading: "Degree in cloud computing",
  },
  {
    id: 2,
    year: "2021-2022",
    heading: "Alphabet, Google",
    subHeading: "Degree in AI technologies",
  },
];
let experience = [
  {
    id: 1,
    year: "2023-2023",
    heading: "Google, inc",
    subHeading: "Full Stack Developer",
  },
  {
    id: 2,
    year: "2023-2024",
    heading: "Twitter",
    subHeading: "Back-end engineer",
  },
];

const Resume = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };
  {/* Left to right animation */}
  const item2 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };
    {/* Right to left animation */}
    const item3 = {
        hidden: { x: 100, opacity: 0 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
      };

      const spinanim = {
        visible:{
          rotate: [ 360 ],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }
      }

  const [expanded, setExpanded] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.leftSection}>
          <Image
            src={starRed}
            alt="star red"
            className={styles.starRed}
          ></Image>

          <motion.h1
            variants={item2}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.headingName}
          >
            Hello, <br /> I'm {name}
          </motion.h1>

          <motion.p
            variants={item2}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            className={styles.paragraph}
          >
            {paragraph}
          </motion.p>

          {/* href for linked in */}
          <a className={styles.a} target="_blank" href={link}>
            <motion.button 
            whileHover={{ scale: 1.1 }}
            className={styles.linkedButton}>My Linkedin</motion.button>
          </a>
          <div className={styles.skills}>
            <h4 className={styles.headingM}>Techinical Skills</h4>
            {/* accordion for technical skills */}
            <motion.div
              variants={item}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Accordion
                i={true}
                expanded={expanded}
                setExpanded={setExpanded}
                bullets={softwareTools}
                title="Software Skills"
              />
            </motion.div>
            {/* Accordian for programming languages */}
            <motion.div
              variants={item}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Accordion
                i={true}
                expanded={expanded}
                setExpanded={setExpanded}
                bullets={programming}
                title="Programming"
              />
            </motion.div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <motion.div 
          variants={item3}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.education}>
            <h5 className={styles.headingM}>Education</h5>
            {education.map((i) => (
              <>
                <div className={styles.educationStrip}>
                  <Image src={star} alt="star" className={styles.star} />
                  <h4 className={styles.year}>{i.year}</h4>
                  <div>
                    <h5 className={styles.eduHeading}>{i.heading}</h5>
                    <h5 className={styles.eduSubHeading}>{i.subHeading}</h5>
                  </div>
                </div>
                <div className={styles.arrow}>
                  <Image src={arrow} alt="arrow" className={styles.downArrow} />
                </div>
              </>
            ))}
          </motion.div>
          <motion.div 
          variants={item3}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.experience}>
            <h5 className={styles.headingM}>Experience</h5>
            <Image src={resume} alt="resume" className={styles.resumeImage} />
            {experience.map((i) => (
              <>
                <div className={styles.educationStrip}>
                  <Image src={star} alt="star" className={styles.star} />
                  <h4 className={styles.year}>{i.year}</h4>
                  <div>
                    <h5 className={styles.eduHeading}>{i.heading}</h5>
                    <h5 className={styles.eduSubHeading}>{i.subHeading}</h5>
                  </div>
                </div>
                <div className={styles.arrow}>
                  <Image src={arrow} alt="arrow" className={styles.downArrow} />
                </div>
              </>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div 
      variants={container}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5}}
      className={styles.softSkills}>
        {softSkills.map((i) => (
          <motion.h4
          variants={item}
          className={styles.bulletY}>{i}</motion.h4>
        ))}
      </motion.div>
    </div>
  );
};

export default Resume;
