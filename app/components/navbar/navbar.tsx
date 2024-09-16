'use client'
import React from 'react';
import styles from './navbar.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    
  return (
    <div className={styles.container}
       
    >
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
        <div className={styles.navbar}>
            <div 
            className={styles.logo}>
                Osaid<span>.</span>Dev
            </div>
            <div
            className={styles.links}>
                <Link href="#first-section">
                <h4 className={styles.link}>About Me</h4>
                </Link>
                <Link href="#first-section">
                <h4  className={styles.link}>Resume</h4>
                </Link>
                <button
                onClick={toggleModal}
                className={styles.button}>
                    Contact Me
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar