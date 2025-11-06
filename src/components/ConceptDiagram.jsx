import React from 'react'
import { motion } from 'framer-motion'

const Pill = ({ label, color }) => (
  <div className={`rounded-full px-4 py-2 text-sm font-medium ${color} text-white shadow`}>{label}</div>
)

function ConceptDiagram() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Visualizzazione dei concetti</h2>
      <p className="mt-2 text-gray-700">Un diagramma per distinguere qualitativamente tra intensivo ed estensivo.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Pill label="Intensivo" color="bg-purple-600" />
            <span className="text-sm text-gray-600">Differenze di gradiente, qualità, intensità</span>
          </div>
          <div className="flex items-center gap-3">
            <Pill label="Estensivo" color="bg-indigo-600" />
            <span className="text-sm text-gray-600">Misurabile per addizione: metri, litri, unità</span>
          </div>
          <div className="flex items-center gap-3">
            <Pill label="Individuazione" color="bg-emerald-600" />
            <span className="text-sm text-gray-600">Dal differenziale intensivo alla forma stabile</span>
          </div>
        </div>

        <div className="relative h-56 md:h-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 p-[2px]"
          >
            <div className="h-full w-full rounded-[14px] bg-white p-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Intensivo</h4>
                  <p className="text-sm text-gray-600">Differenze di temperatura, pressione, potenziale</p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded bg-purple-100">
                    <div className="h-2 rounded bg-purple-600 w-2/3" />
                  </div>
                  <div className="h-2 rounded bg-purple-100">
                    <div className="h-2 rounded bg-purple-600 w-1/3" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-gray-400">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#g)" opacity="0.25" />
                  <path d="M10,60 C40,10 60,90 90,40" stroke="#7c3aed" strokeWidth="4" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">Estensivo</h4>
                  <p className="text-sm text-gray-600">Aree, volumi, conteggi aggregabili</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-4 rounded bg-indigo-100" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ConceptDiagram
