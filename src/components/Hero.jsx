import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Estensivo vs Intensivo
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Una guida visuale al concetto deleuziano di differenza tra quantità estensive e qualità intensive,
            con un confronto mirato con la fenomenologia di Heidegger.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Perché questo tema?</h3>
            <p className="mt-2 text-gray-700">
              In Deleuze, l'intensivo è ciò che differisce in sé e produce il molteplice; l'estensivo è ciò che
              si misura per addizione (lunghezze, superfici, quantità). Capire la differenza illumina il passaggio
              dal differenziale qualitativo alla forma riconoscibile delle cose.
            </p>
          </div>
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Confronto con Heidegger</h3>
            <p className="mt-2 text-gray-700">
              In Heidegger, la questione non è la quantità ma il modo di apparire dell'essere: fenomeno, disvelamento,
              mondo. Mettere a fuoco la differenza con l'intensivo deleuziano aiuta a distinguere ontologia ed
              ontogenesi delle differenze.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
