/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Differentials from './components/Differentials';
import Stats from './components/Stats';
import Process from './components/Process';
import SpecialPhotography from './components/SpecialPhotography';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans select-text overflow-x-hidden w-full max-w-full">
      {/* Decorative Elegant Ambient Light Glow (Universal accent) */}
      <div className="absolute top-[10%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-[#C7A26A]/5 filter blur-3xl pointer-events-none select-none z-0" />
      <div className="absolute top-[40%] right-[10%] w-[45rem] h-[45rem] rounded-full bg-[#EAE3D2]/30 filter blur-3xl pointer-events-none select-none z-0" />
      
      {/* Exquisite Top Navbar */}
      <Navbar />

      {/* Main Structural Components */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Detailed Bios Section */}
        <AboutMe />

        {/* Brand Differentials cards Grid */}
        <Differentials />

        {/* Animated Counter Statistics */}
        <Stats />

        {/* Stepper Timeline Collaboration Road */}
        <Process />

        {/* 15 Year Photography Story & Filterable Image Library Overlay */}
        <SpecialPhotography />

        {/* Interactive Inquire Form & Bottom Permanent CTA Block */}
        <ContactForm />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
