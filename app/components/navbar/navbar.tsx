'use client'
import React from 'react';
import styles from './navbar.module.css'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

interface modal {
  onRequestClose: () => void
}

const Modal: React.FC<modal> = ({ onRequestClose }) => {
	// 
	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				onRequestClose();
			}
		}

		document.addEventListener("keydown", onKeyDown);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className={styles.modalBackdrop}>
			<div className={styles.modalContainer}>
				<h3 className={styles.formHeading}>Contact Me</h3>
        <label htmlFor="name" className={styles.formLabel}>Name</label>
        <input type='text' className={styles.formInput}></input>
        <label htmlFor="email" className={styles.formLabel}>Email</label>
        <input type='text' className={styles.formInput}></input>
        <label htmlFor="email" className={styles.formLabel}>Message</label>
        <textarea className={styles.formArea}></textarea>
				<div className={styles.formButtons}>
        <button type="button" className={styles.formCancel} onClick={onRequestClose}>
					Cancel
				</button>
        <button type="button" className={styles.formSubmit} onClick={onRequestClose}>
					Submit
				</button>
        </div>
			</div>
		</div>
	);
};


const Navbar = () => {
  const [isModalOpen, setModalIsOpen] = useState(false);
	const toggleModal = () => {
		setModalIsOpen(!isModalOpen);
	};

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
    
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        },
      };
    
  return (
    <div className={styles.container}
       
    >
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
        <div className={styles.navbar}>
            <motion.div 
            variants={item}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true}}
            className={styles.logo}>
                Osaid<span>.</span>Dev
            </motion.div>
            <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true}}
            className={styles.links}>
                <motion.h4 
                variants={item}
                className={styles.link}>About Me</motion.h4>
                <motion.h4 
                variants={item} className={styles.link}>Resume</motion.h4>
                <motion.h4 
                variants={item} className={styles.link}>Works</motion.h4>
                <motion.button 
                variants={item}
                whileHover={{ scale: 1.1 }}
                onClick={toggleModal}
                className={styles.button}>
                    Contact Me
                </motion.button>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar