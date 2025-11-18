import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Paw } from './Decor'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Story() {
  const [chapters, setChapters] = useState([])

  useEffect(() => {
    async function fetchStory() {
      try {
        const res = await fetch(`${API_BASE}/api/story`)
        const data = await res.json()
        setChapters(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchStory()
  }, [])

  return (
    <section className="relative bg-[#efe3d4] py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-stone-900">The Bear's Little Chronicle</h2>
          <p className="text-stone-700 mt-2">Charming notes from the workshop, paw-signed with care.</p>
        </div>

        <div className="mt-10 space-y-6">
          {chapters.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-[#f7efe6] rounded-3xl p-6 shadow-sm border border-stone-300/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-stone-900">{c.title}</h3>
                  <p className="text-stone-700 mt-1">{c.excerpt}</p>
                </div>
                <Paw className="w-6 h-6 text-stone-700/60" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative clipped bottom edge */}
      <svg className="absolute bottom-0 left-0 right-0" height="70" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,90 C300,40 560,120 840,70 C1120,20 1280,120 1440,60 L1440,120 L0,120 Z" fill="#efe3d4" />
      </svg>
    </section>
  )
}
