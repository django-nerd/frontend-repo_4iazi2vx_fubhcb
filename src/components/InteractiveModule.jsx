import React, { useMemo, useState } from 'react'

// Simple interactive visualization: drag the slider to see how a gradient (intensivo)
// turns into discrete segments (estensivo). No external libs required.
function InteractiveModule() {
  const [steps, setSteps] = useState(5)

  const segments = useMemo(() => {
    const arr = []
    for (let i = 0; i < steps; i++) {
      const t = i / Math.max(steps - 1, 1)
      arr.push({ i, color: `rgb(${160 + t * 80}, ${120 + t * 60}, 255)` })
    }
    return arr
  }, [steps])

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Dall'intensivo all'estensivo</h2>
          <p className="mt-2 text-gray-700 max-w-xl">
            Muovi il cursore: con pochi step, prevale il gradiente continuo (intensivo);
            aumentando gli step, emergono blocchi discreti che possono essere contati (estensivo).
          </p>
          <div className="mt-4 flex items-center gap-4">
            <input
              type="range"
              min={2}
              max={24}
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="w-64 accent-purple-600"
            />
            <span className="text-sm text-gray-600">Step: {steps}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-24 w-full rounded-xl overflow-hidden border shadow-inner grid" style={{ gridTemplateColumns: `repeat(${steps}, 1fr)` }}>
            {segments.map((s) => (
              <div key={s.i} style={{ background: s.color }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <span>Continuo (intensivo)</span>
            <span>Discreto e misurabile (estensivo)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveModule
