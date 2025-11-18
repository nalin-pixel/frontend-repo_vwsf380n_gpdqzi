import React from 'react'

// Hidden SVG defs for watercolor and noise filters
export function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        {/* Subtle watercolor texture using turbulence + displacement */}
        <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise"/>
          <feColorMatrix type="saturate" values="0.05"/>
          <feGaussianBlur stdDeviation="0.4"/>
          <feBlend in="SourceGraphic" in2="noise" mode="multiply"/>
        </filter>

        {/* Paper grain overlay */}
        <filter id="paper" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="1" seed="2"/>
          <feColorMatrix type="saturate" values="0.15"/>
          <feBlend in="SourceGraphic" mode="multiply"/>
        </filter>

        {/* Soft shadow */}
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3b2f2f" floodOpacity="0.2" />
        </filter>

        {/* Organic edge clip paths */}
        <clipPath id="organicTop" clipPathUnits="objectBoundingBox">
          <path d="M0,0 C0.25,0.05 0.75,0.05 1,0 L1,1 L0,1 Z" />
        </clipPath>
        <clipPath id="organicBottom" clipPathUnits="objectBoundingBox">
          <path d="M0,1 C0.25,0.95 0.75,0.95 1,1 L1,0 L0,0 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}

// Tiny pawprint SVG for accents
export function Paw({ className = 'w-4 h-4 text-stone-700/80' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden>
      <circle cx="20" cy="22" r="6"/>
      <circle cx="32" cy="18" r="6"/>
      <circle cx="44" cy="22" r="6"/>
      <path d="M24 34c6-6 10-6 16 0 4 4 4 10-4 12-4 1-8 1-12 0-8-2-8-8-4-12z" />
    </svg>
  )
}

export function PawTrail({ count = 6 }) {
  return (
    <div className="pointer-events-none select-none">
      <div className="flex gap-3 opacity-40">
        {Array.from({ length: count }).map((_, i) => (
          <Paw key={i} className={`w-4 h-4 text-stone-600/60 ${i % 2 ? '-rotate-12' : 'rotate-6'}`} />
        ))}
      </div>
    </div>
  )
}
