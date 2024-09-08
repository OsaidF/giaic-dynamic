'use client'
import React from 'react';
import styles from './hero.module.css'
import Image from 'next/image';
import heroImg from '../../public/images/hero/portfolio.png';
import star from '../../public/images/star.png';
import location from '../../public/images/hero/location.png';
import envelope from '../../public/images/hero/envelope.png';
import phone from '../../public/images/hero/phone.png';
import face from '../../public/images/hero/sideprofile.png'
import { motion } from 'framer-motion'

let locationAdd = 'Paris, France'
let email = 'Alexferguson@outlook.com'
let phoneNo = '01 348 501 2699'
let circularMessage = 'Front-end developer •  Back-end Developer  • UI/UX •  Web Designer  • '
let jobTitle = 'Web Developer'
let faceImg = face

interface TextRingProps {
  children: string;
  side: number;
}

const TextRing: React.FC<TextRingProps> = ({ children, side }) => {
  const CHARS = children.split('');
  const INNER_ANGLE = 360 / CHARS.length;

  return (
    <span
      className="text-ring"
      style={{
        ['--total' as any]: CHARS.length,
        ['--radius' as any]: side / Math.sin(INNER_ANGLE / (180 / Math.PI)),
      }}
    >
      {CHARS.map((char, index) => (
        <span key={index} style={{ ['--index' as any]: index }}>
          {char}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const item2 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
      <motion.div
      variants={item2}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{once: true}}
      className={styles.leftSection}>
        <div className={styles.img}>
          <Image src={star} alt='star' className={styles.star} />
          <Image src={heroImg} alt='hero image' className={styles.heroImg} priority />
          <div className={styles.info}>
              <span className={styles.infoLine}>
                <Image src={location} alt='location' className={styles.infoIcons} />
                <h4 className={styles.infoHeading}>{locationAdd}</h4>
              </span>
              <span className={styles.infoLine}>
                <Image src={envelope} alt='location' className={styles.infoIcons} />
                <h4 className={styles.infoHeading}>{email}</h4>
              </span>
              <span className={styles.infoLine}>
                <Image src={phone} alt='location' className={styles.infoIcons} />
                <h4 className={styles.infoHeading}>{phoneNo}</h4>
              </span>
          </div>
        </div>
      </motion.div>
      <div className={styles.rightSection}>
          <TextRing side={1}>
            {circularMessage}
          </TextRing>
          <motion.div 
          variants={item}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true}}
          className={styles.circle}>
            <Image src={faceImg} alt='face' className={styles.circleImage} />
          </motion.div>
      </div>
      
      </div>
      <motion.div 
      variants={item}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true}}
      className={styles.largeText}>
        <h1 className={styles.largeHeading}>{jobTitle}</h1>
      </motion.div>
    </div>
  )
}

export default Hero;