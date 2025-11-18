import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="bg-[#e7dac9] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-stone-900">Handmade 3D Printed Treasures</h2>
        <p className="text-stone-700 mt-2">Thoughtfully designed pieces crafted with care.</p>

        {loading ? (
          <p className="mt-8 text-stone-600">Loading products…</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden bg-[#efe3d4] shadow-md"
                style={{ filter: 'url(#paper)' }}
              >
                {p.image ? (
                  <div className="aspect-[4/3] bg-stone-200">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300" />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-medium text-stone-900">{p.title}</h3>
                  {p.description && <p className="text-stone-700 mt-1">{p.description}</p>}
                  <div className="mt-3 flex items-center justify-between text-stone-800">
                    <span className="font-semibold">${'{'}p.price{'}'}</span>
                    <span className={`text-sm ${p.in_stock ? 'text-emerald-700' : 'text-rose-700'}`}>{p.in_stock ? 'In stock' : 'Sold out'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
