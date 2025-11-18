import React from 'react'
import { motion } from 'framer-motion'
import { PawTrail, SvgDefs } from './Decor'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{background: 'linear-gradient(180deg,#f7efe6 0%, #efe3d4 50%, #e7dac9 100%)'}}>
      <SvgDefs />
      <div className="absolute inset-0 opacity-[0.15]" style={{filter: 'url(#watercolor)'}} />

      <div className="container mx-auto px-6 pt-20 pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight text-stone-900"
        >
          Beatrix-Potter style storybook for a bear-made shop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-700"
        >
          Warm cocoa browns and cream pages, playful edges, and watercolor whimsy. Discover handmade 3D printed curiosities with a friendly bear as your guide.
        </motion.p>

        <div className="mt-10">
          <PawTrail />
        </div>
      </div>

      {/* Organic clipped bottom */}
      <svg className="absolute bottom-0 left-0 right-0" height="80" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z" fill="#e7dac9" />
      </svg>
    </section>
  )
}
