import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import star from '../../public/images/resume/starY.png'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
            <h3 className={styles.footerText}>Made Within 24-hours For The GIAIC 2nd Semester Assessment</h3>
            <h3 className={styles.footerText}>By <span>Osaid</span></h3>
            <Image src={star} alt='star' className={styles.star} />
        </div>
    </div>
  )
}

export default Footer;