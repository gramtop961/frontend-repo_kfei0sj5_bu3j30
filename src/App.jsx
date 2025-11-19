import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      <Hero />
      <Calculator />
      <Features />
      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 text-sm text-slate-400">
        Built with love • Not financial advice
      </footer>
    </div>
  )
}

export default App
