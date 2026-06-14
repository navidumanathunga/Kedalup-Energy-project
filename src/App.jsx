import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChallengeModel from './components/ChallengeModel'
import Beneficiaries from './components/Beneficiaries'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChallengeModel />
        <Beneficiaries />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
