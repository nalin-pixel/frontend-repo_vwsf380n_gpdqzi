import React from 'react'
import { Hero } from './components'
import Products from './components/Products'
import Story from './components/Story'
import { SvgDefs } from './components/Decor'

function App() {
  return (
    <div className="min-h-screen bg-[#d8c9b6] text-stone-800">
      <SvgDefs />
      <header className="sticky top-0 z-20 backdrop-blur-sm bg-[#efe3d4]/70 border-b border-stone-300/40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐻</span>
            <span className="font-semibold tracking-tight">Bear & Clay</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:underline">Products</a>
            <a href="#story" className="hover:underline">Story</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="products"><Products /></div>
        <div id="story"><Story /></div>
      </main>

      <footer className="bg-[#3b2f2f] text-[#f7efe6] py-10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Bear & Clay • Crafted with care</p>
          <div className="opacity-80">Designed in watercolor and warm cocoa tones</div>
        </div>
      </footer>
    </div>
  )
}

export default App
