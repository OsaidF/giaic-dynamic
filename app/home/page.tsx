import Footer from '@/app/components/footer/footer'
import Hero from '@/app/components/hero/hero'
import Navbar from '@/app/components/navbar/navbar'
import Resume from '@/app/components/resume/resume'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Resume />
      <Footer />
    </div>
  )
}

export default page