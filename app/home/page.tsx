'use client'
import Footer from '@/app/components/footer/footer'
import Hero from '@/app/components/hero/hero'
import Navbar from '@/app/components/navbar/navbar'
import Resume from '@/app/components/resume/resume'
import React from 'react'
import { useRef } from 'react'
import GeneratePdf from '../components/GeneratePDF/GeneratePDF';
import styles from './page.module.css'


const page = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className={styles.background}>
        <Navbar />
        <GeneratePdf html={ref}/>
        <Hero />
        <Resume />
        <Footer />
   

    </div>
  )
}

export default page