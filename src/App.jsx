import React from 'react'
import Hero from './components/Hero'
import ConceptDiagram from './components/ConceptDiagram'
import Comparison from './components/Comparison'
import InteractiveModule from './components/InteractiveModule'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-900">
      <header className="sticky top-0 backdrop-blur bg-white/70 border-b z-20">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-xl">Deleuze × Heidegger</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#diagram" className="hover:text-gray-900">Visuale</a>
            <a href="#comparison" className="hover:text-gray-900">Confronto</a>
            <a href="#interactive" className="hover:text-gray-900">Interattivo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="diagram"><ConceptDiagram /></div>
        <div id="comparison"><Comparison /></div>
        <div id="interactive"><InteractiveModule /></div>
      </main>

      <footer className="border-t mt-10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
          Questo sito è una sintesi didattica: suggerisce collegamenti concettuali senza sostituire la lettura dei testi.
        </div>
      </footer>
    </div>
  )
}

export default App
