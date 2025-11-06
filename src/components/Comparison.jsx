import React from 'react'

function Comparison() {
  const rows = [
    {
      a: 'Intensità differenziale (Deleuze)',
      b: 'Fenomeno e disvelamento (Heidegger)'
    },
    {
      a: 'Genera il molteplice (individuazione)',
      b: 'Articola il senso dell\'essere-nel-mondo'
    },
    {
      a: 'Non additivo: varia per gradienti',
      b: 'Non quantitativo: riguarda il modo di apparire'
    },
    {
      a: 'Diventa estensivo quando si attualizza',
      b: 'Non si riduce a misura, ma a comprensione (Verstehen)'
    }
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Deleuze vs Heidegger: punti-chiave</h2>
      <div className="mt-6 overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
          <div className="p-4 bg-purple-50 font-semibold text-purple-900">Deleuze</div>
          <div className="p-4 bg-indigo-50 font-semibold text-indigo-900">Heidegger</div>
        </div>
        <ul className="divide-y">
          {rows.map((r, i) => (
            <li key={i} className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 text-gray-800">{r.a}</div>
              <div className="p-4 text-gray-800 bg-gray-50">{r.b}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Comparison
