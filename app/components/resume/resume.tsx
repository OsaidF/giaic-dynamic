import React from "react";
import styles from "./resume.module.css";
import starRed from "../../public/images/star.png";
import star from "../../public/images/resume/starY.png";
import arrow from "../../public/images/resume/arrow-down.png";
import resume from "../../public/images/resume/resume.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import Accordion from "./accordion";

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

  const [name, setName] = useState<string>("")
  const [paragraph, setParagraph] = useState<string>("")
  const [link, setLink] = useState<string>("")
  const [softwareTools, setSoftwareTools] = useState<string[]>([""])
  const [programming, setProgramming] = useState<string[]>([""])
  const [softSkills, setSoftskills ] = useState<string[]>(["",])
  const [education, setEducation ] = useState<educationType[]>([{year:'', heading: '', subHeading: ''}])
  const [experience, setExperience ] = useState<experienceType[]>([{year:'', heading: '', subHeading: ''}])

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
  },[])
    {/* Stagger children animation */}

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

          <h1
            className={styles.headingName}
          >
            Hello, <br /> I'm {name}
          </h1>

          <p
            className={styles.paragraph}
          >
            {paragraph}
          </p>

          {/* href for linked in */}
          <a className={styles.a} target="_blank" href={link}>
            <button 
            className={styles.linkedButton}>{link}</button>
          </a>
          <div className={styles.skills}>
            <h4 className={styles.headingM}>Techinical Skills</h4>
            {/* accordion for technical skills */}
            <div>
              <Accordion
                i={true}
                expanded={expanded}
                setExpanded={setExpanded}
                bullets={softwareTools}
                title="Software Skills"
              />
            </div>
            {/* Accordian for programming languages */}
            <div>
              <Accordion
                i={true}
                expanded={expanded}
                setExpanded={setExpanded}
                bullets={programming}
                title="Programming"
              />
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.education}>
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
          </div>
          <div className={styles.experience}>
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
          </div>
        </div>
      </div>
      <div className={styles.softSkills}>
        {softSkills.map((i) => (
          <h4
          className={styles.bulletY}>{i}</h4>
        ))}
      </div>
    </div>
  );
};

export default Resume;
