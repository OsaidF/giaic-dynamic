'use client'
import React, { useEffect } from 'react';
import styles from './hero.module.css'
import Image, { StaticImageData } from 'next/image';
import heroImg from '../../public/images/hero/portfolio.png';
import star from '../../public/images/star.png';
import locationImg from '../../public/images/hero/location.png';
import envelope from '../../public/images/hero/envelope.png';
import phoneImg from '../../public/images/hero/phone.png';
import face from '../../public/images/hero/sideprofile.png'
import edit from '../../public/images/edit.png'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, } from "formik";
import * as Yup from 'yup';

// GET IMAGE FROM LOCAL STORAGE



// TEXT RING
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


// SCHEMA FOR SMALL FORM
const FormSchema = Yup.object().shape({
  location: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  paragraph: Yup.string()
    .min(2, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
    circle: Yup.string()
    .min(2, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Required'),
    job: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})

// INITIAL VALUES FOR SMALL FORM
const initialValues = {
  circle: "Front-end developer  •  Back-end Developer  •  UI/UX •  Web Designer  •  ",
  job:  "Web Developer",
  location: "Paris, France",
  email: "Alexferguson@outlook.com",
  phone: "01 348 501 2699",
};



const Hero = () => {
  type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string; }
  const [faceImage, setFaceImage ] = useState<string>(face.src)
  const [locationAdd, setLocationadd] = useState<string>('Paris, France');
  const [email, setEmail] = useState<string>('Alexferguson@outlook.com');
  const [phoneNo, setPhoneNo] = useState<string>('01 348 501 2699');
  const [circularMessage, setcircularMessage] = useState<string>('Front-end developer •  Back-end Developer  • UI/UX •  Web Designer  • ');
  const [jobTitle, setJobTitle] = useState<string>('Web Developer');

  const [isOpen, setIsOpen] = useState(true);

  const [, forceRender] = useState(false);

  const handleClick = () => {
    forceRender((prev) => !prev);
  };

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

    const myImage = localStorage.getItem("profile-img")? localStorage.getItem("profile-img")! : face.src;
    setFaceImage(myImage)
  })


  return (
    <div className={styles.container}>
      <div className={styles.hero}>
      <div
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
      </div>
      <div className={styles.rightSection}>
        <Image src={edit} alt='edit' className={styles.edit}  onClick={() => setIsOpen(!isOpen)} />
        
        {/* OPENS AND CLOSES FORM TO UPDATE */}
        <div style={{ display: isOpen ? "block" : "none" }}>


        <div className={styles.form}>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={async (values) => {
          localStorage.setItem('location', values.location)
          localStorage.setItem('email', values.email)
          localStorage.setItem('phone', values.phone)
          localStorage.setItem('circle', values.circle)
          localStorage.setItem('job', values.job)
        }}
      >
        {({ values }) => (
          <Form>

            <div className={styles.col}>
              <label htmlFor="location">Address</label>
              <Field
                name='location'
                placeholder="eg: Karachi, Pakistan"
                type="text"
              />
              <ErrorMessage
                name='location'
                component="div"
                className="field-error"
              />
            </div>

            <div className={styles.col}>
              <label htmlFor="phone">Phone Number</label>
              <Field
                name='phone'
                placeholder="example: +92 348 501 2431"
                type="text"
              />
              <ErrorMessage
                name='phone'
                component="div"
                className="field-error"
              />
            </div>

            <div className={styles.col}>
              <label htmlFor="email">Email</label>
              <Field
                name='email'
                placeholder="example: name@acme.com"
                type="text"
              />
              <ErrorMessage
                name='email'
                component="div"
                className="field-error"
              />
            </div>


            <div className={styles.col}>
              <label htmlFor="circle">Circle Text</label>
              <Field
                name='circle'
                placeholder="eg: Front-end developer •  Back-end Developer  • UI/UX •  Web Designer  • "
                type="text"
              />
              <ErrorMessage
                name='circle'
                component="div"
                className="field-error"
              />
            </div>

            
            <div className={styles.col}>
              <label htmlFor="job">Your Job Title</label>
              <Field
                name='job'
                placeholder="eg: Web Developer "
                type="text"
              />
              <ErrorMessage
                name='job'
                component="div"
                className="field-error"
              />
            </div>
            Click Submit twice to update values
            <button type="submit" className={styles.submit} onClick={() => handleClick()}>Submit</button>
          </Form>
        )}
      </Formik>



    </div>
        </div>
          <TextRing side={1}>
            {circularMessage}
          </TextRing>
          <div 
          className={styles.circle}>
            <Image src={faceImage} alt='face' width={370} height={370} className={styles.circleImage} />
          </div>
      </div>
      
      </div>
      <div 
      className={styles.largeText}>
        <h1 className={styles.largeHeading}>{jobTitle}</h1>
      </div>
    </div>
  )
}

export default Hero;