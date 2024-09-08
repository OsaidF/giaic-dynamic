'use client'
import React, { useEffect } from 'react';
import styles from './hero.module.css'
import Image from 'next/image';
import heroImg from '../../public/images/hero/portfolio.png';
import star from '../../public/images/star.png';
import locationImg from '../../public/images/hero/location.png';
import envelope from '../../public/images/hero/envelope.png';
import phoneImg from '../../public/images/hero/phone.png';
import face from '../../public/images/hero/sideprofile.png'
import edit from '../../public/images/edit.png'
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  const [locationAdd, setLocationadd] = useState<string>('Paris, France');
  const [email, setEmail] = useState<string>('Alexferguson@outlook.com');
  const [phoneNo, setPhoneNo] = useState<string>('01 348 501 2699');
  const [circularMessage, setcircularMessage] = useState<string>('Front-end developer •  Back-end Developer  • UI/UX •  Web Designer  • ');
  const [jobTitle, setJobTitle] = useState<string>('Web Developer');
  

  useEffect(() => {
    const location = localStorage.getItem('location')!
    setLocationadd(location)
    const email = localStorage.getItem('email')!
    setEmail(email)
    const phone = localStorage.getItem('phone')!
    setPhoneNo(phone)
    const circTxt = localStorage.getItem('circle')!
    setcircularMessage(circTxt)
    const job = localStorage.getItem('job')!
    setJobTitle(job)
  })


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
                <Image src={locationImg} alt='location' className={styles.infoIcons} />
                <h4 className={styles.infoHeading}>{locationAdd}</h4>
              </span>
              <span className={styles.infoLine}>
                <Image src={envelope} alt='location' className={styles.infoIcons} />
                <h4 className={styles.infoHeading}>{email}</h4>
              </span>
              <span className={styles.infoLine}>
                <Image src={phoneImg} alt='location' className={styles.infoIcons} />
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