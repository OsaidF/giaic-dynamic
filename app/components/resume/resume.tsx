"use client";
import React from "react";
import styles from "./resume.module.css";
import starRed from "../../public/images/star.png";
import star from "../../public/images/resume/starY.png";
import arrow from "../../public/images/resume/arrow-down.png";
import resume from "../../public/images/resume/resume.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Accordion from "./accordion";
import { motion } from "framer-motion";

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

  interface educationType {
    year: string,
    heading: string,
    subHeading: string,
  }
  interface experienceType {
    year: string,
    heading: string,
    subHeading: string,
  }

  const [name, setName] = useState<string>("Alex")
  const [paragraph, setParagraph] = useState<string>("I'm a self-taught Graphic Designer and Programmer based in USA with extensive front-end and back-end knowledge. I am currently living in France and pusuing a degree in Web and Digital Project Management.")
  const [link, setLink] = useState<string>("https://www.linkedin.com")
  const [softwareTools, setSoftwareTools] = useState<string[]>(["Photoshop", "Illustrator", "VSCode", "React", "NextJs"])
  const [programming, setProgramming] = useState<string[]>(["HTML", "CSS", "JavaScript", "TypeScript"])
  const [softSkills, setSoftskills ] = useState<string[]>(["Web Design","UI/UX","Creative","Detail-Oriented","Hardworking",])
  const [education, setEducation ] = useState<educationType[]>([{year:'', heading: '', subHeading: ''}])
  const [experience, setExperience ] = useState<experienceType[]>([{year:'', heading: '', subHeading: ''}])
  console.log(education)

  useEffect(() => {
    const software = localStorage.getItem('software')!
    const value = JSON.parse(software)
    setSoftwareTools(value)

    const programming = localStorage.getItem('programming')!
    const prvalue = JSON.parse(programming)
    setProgramming(prvalue)

    const education = localStorage.getItem('education')!
    const edvalue = JSON.parse(education)
    setEducation(edvalue)

    const experience = localStorage.getItem('experience')!
    const expvalue = JSON.parse(experience)
    setExperience(expvalue)

    const softskills = localStorage.getItem('softSkills')!
    const sfvalue = JSON.parse(softskills)
    setSoftskills(sfvalue)

    const name = localStorage.getItem('name')!
    setName(name)

    const paragraph = localStorage.getItem('paragraph')!
    setParagraph(paragraph)

    const link = localStorage.getItem('link')!
    setLink(link)
  })
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
    <div className={styles.container} id="first-section">
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
            { experience.map((i) => (
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
