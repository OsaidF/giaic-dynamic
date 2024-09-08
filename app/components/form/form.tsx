"use client";
import React from "react";
import styles from './form.module.css'
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import Image from "next/image";
import close from '../../public/images/close.png'
import { useRouter } from "next/navigation";

const initialValues = {
  name: "",
  location: "",
  email: "",
  phone: "",
  paragraph: "",
  circle: "",
  job: "",
  link: "",
  software: [""],
  programming: [""],
  softSkills: [""],
  education: [
    {
      year: "",
      heading: "",
      subHeading: "",
    },
  ],
  experience: [
    {
      year: "",
      heading: "",
      subHeading: "",
    },
  ],
};

const FormResume = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
    <div className={styles.form}>
      <h2 className={styles.formHeading}>Resume Form Builder</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          localStorage.setItem('name', values.name)
          localStorage.setItem('location', values.location)
          localStorage.setItem('email', values.email)
          localStorage.setItem('phone', values.phone)
          localStorage.setItem('paragraph', values.paragraph)
          localStorage.setItem('circle', values.circle)
          localStorage.setItem('job', values.job)
          localStorage.setItem('link', values.link)
          localStorage.setItem('software', JSON.stringify(values.software))
          localStorage.setItem('programming', JSON.stringify(values.programming))
          localStorage.setItem('softSkills', JSON.stringify(values.softSkills))
          localStorage.setItem("education", JSON.stringify(values.education));
          localStorage.setItem("experience", JSON.stringify(values.experience));
          router.push('/home')
        }}
      >
        {({ values }) => (
          <Form>
            <div className={styles.col}>
              <label htmlFor="name">Name</label>
              <Field
                name='name'
                placeholder="eg: Kevin Hart"
                type="text"
              />
              <ErrorMessage
                name='name'
                component="div"
                className="field-error"
              />
            </div>

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
              <label htmlFor="paragraph">Write a paragraph about yourself</label>
              <Field
                name='paragraph'
                placeholder="eg: I am passionate about..."
                type="text"
              />
              <ErrorMessage
                name='paragraph'
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

            
            <div className={styles.col}>
              <label htmlFor="link">LikedIn Link</label>
              <Field
                name='link'
                placeholder="eg: https://linkedin.com"
                type="text"
              />
              <ErrorMessage
                name='link'
                component="div"
                className="field-error"
              />
            </div>

            <h3 className={styles.heading}>Proficiency in Softwares</h3>
            {/* Field Array for software */}
            <FieldArray name="software">
              
              {({ insert, remove, push }) => (
                <div>
                  {values.software.length > 0 &&
                    values.software.map((edu, index) => (
                      <div className={styles.singlerow} key={index}>
                        <div className={styles.singleinputcol}>
                          <label htmlFor={`software.${index}`}>
                            Name (Only one in each input)
                          </label>
                          <Field
                            name={`software.${index}`}
                            placeholder="example: VS Code, Photoshop etc..."
                            type="text"
                          />
                          <ErrorMessage
                            name={`education.${index}.year`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className={styles.buttonrow}>
                          <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => remove(index)}
                          >
                            <Image src={close} alt="close" className={styles.close} />
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className={styles.addButton}
                    onClick={() =>
                      push({ year: "", heading: "", subHeading: "" })
                    }
                  >
                    Add Softwares
                  </button>
                </div>
              )}
            </FieldArray>

            <h3 className={styles.heading}>Proficiency in Programming Languages</h3>
            {/* Field Array for programming */}
            <FieldArray name="programming">
              
              {({ insert, remove, push }) => (
                <div>
                  {values.programming.length > 0 &&
                    values.programming.map((edu, index) => (
                      <div className={styles.singlerow} key={index}>
                        <div className={styles.singleinputcol}>
                          <label htmlFor={`programming.${index}`}>
                            Name (Only one in each input)
                          </label>
                          <Field
                            name={`programming.${index}`}
                            placeholder="example: HTML, CSS etc.."
                            type="text"
                          />
                          <ErrorMessage
                            name={`programming.${index}`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className={styles.buttonrow}>
                          <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => remove(index)}
                          >
                            <Image src={close} alt="close" className={styles.close} />
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className={styles.addButton}
                    onClick={() =>
                      push({ year: "", heading: "", subHeading: "" })
                    }
                  >
                    Add More Languages
                  </button>
                </div>
              )}
            </FieldArray>

            <h3 className={styles.heading}>Soft Skills</h3>
            {/* Field Array for programming */}
            <FieldArray name="softSkills">
              
              {({ insert, remove, push }) => (
                <div>
                  {values.softSkills.length > 0 &&
                    values.softSkills.map((edu, index) => (
                      <div className={styles.singlerow} key={index}>
                        <div className={styles.singleinputcol}>
                          <label htmlFor={`softSkills.${index}`}>
                            Name (Only one in each input)
                          </label>
                          <Field
                            name={`softSkills.${index}`}
                            placeholder="example: Creative, Hardworking, Data-driven etc.."
                            type="text"
                          />
                          <ErrorMessage
                            name={`softSkills.${index}`}
                            component="div"
                            className="field-error"
                          />
                        </div>
                        <div className={styles.buttonrow}>
                          <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => remove(index)}
                          >
                            <Image src={close} alt="close" className={styles.close} />
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className={styles.addButton}
                    onClick={() =>
                      push({ year: "", heading: "", subHeading: "" })
                    }
                  >
                    Add More Skills
                  </button>
                </div>
              )}
            </FieldArray>

            <h3 className={styles.heading}>Education</h3>
            {/* Field Array for Education */}
            <FieldArray name="education">
              
              {({ insert, remove, push }) => (
                <div>
                  {values.education.length > 0 &&
                    values.education.map((edu, index) => (
                      <div className={styles.row} key={index}>
                        <h4></h4>
                        <div className="col">
                          <label htmlFor={`education.${index}.year`}>
                            Year
                          </label>
                          <Field
                            name={`education.${index}.year`}
                            placeholder="example: 2012-2013"
                            type="text"
                          />
                          <ErrorMessage
                            name={`education.${index}.year`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className="col">
                          <label htmlFor={`education.${index}.heading`}>
                            School / Institute
                          </label>
                          <Field
                            name={`education.${index}.heading`}
                            placeholder="eg: Karachi University"
                            type="text"
                          />
                          <ErrorMessage
                            name={`education.${index}.heading`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className="col">
                          <label htmlFor={`education.${index}.subHeading`}>
                            Degree / Certificate
                          </label>
                          <Field
                            name={`education.${index}.subHeading`}
                            placeholder="eg: Bachelors in CS"
                            type="text"
                          />
                          <ErrorMessage
                            name={`education.${index}.subHeading`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className="col">
                          <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => remove(index)}
                          >
                            <Image src={close} alt="close" className={styles.close} />
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className={styles.addButton}
                    onClick={() =>
                      push({ year: "", heading: "", subHeading: "" })
                    }
                  >
                    Add Education
                  </button>
                </div>
              )}
            </FieldArray>

            <h3 className={styles.heading}>Experience</h3>
            {/* Field Array for Education */}
            <FieldArray name="experience">
              
              {({ insert, remove, push }) => (
                <div>
                  {values.experience.length > 0 &&
                    values.experience.map((edu, index) => (
                      <div className={styles.row} key={index}>
                        <h4></h4>
                        <div className="col">
                          <label htmlFor={`experience.${index}.year`}>
                            Year
                          </label>
                          <Field
                            name={`experience.${index}.year`}
                            placeholder="example: 2012-2013"
                            type="text"
                          />
                          <ErrorMessage
                            name={`experience.${index}.year`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className="col">
                          <label htmlFor={`experience.${index}.heading`}>
                            Company
                          </label>
                          <Field
                            name={`experience.${index}.heading`}
                            placeholder="eg: Company Name"
                            type="text"
                          />
                          <ErrorMessage
                            name={`experience.${index}.heading`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className="col">
                          <label htmlFor={`experience.${index}.subHeading`}>
                            Responsibilities
                          </label>
                          <Field
                            name={`experience.${index}.subHeading`}
                            placeholder="eg: worked as Back-end developer"
                            type="text"
                          />
                          <ErrorMessage
                            name={`experience.${index}.subHeading`}
                            component="div"
                            className="field-error"
                          />
                        </div>

                        <div className="col">
                          <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => remove(index)}
                          >
                            <Image src={close} alt="close" className={styles.close} />
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className={styles.addButton}
                    onClick={() =>
                      push({ year: "", heading: "", subHeading: "" })
                    }
                  >
                    Add Another Job
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit" className={styles.submit}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default FormResume;
