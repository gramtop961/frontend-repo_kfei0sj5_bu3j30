import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and noise overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light" style={{ backgroundImage: 'radial-gradient(1300px 600px at 10% -10%, rgba(56,189,248,0.2), transparent), radial-gradient(900px 400px at 90% -20%, rgba(99,102,241,0.18), transparent)'}} />

      {/* Headline */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium tracking-wide text-cyan-100/90">Fintech • Glassmorphic • 3D</span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            AI Finance Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200/80">
            Plan loans, mortgages, and investments with real‑time insights. Premium visuals, precise math, and a delightful 3D experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#calculator" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400/90 px-5 py-3 text-slate-900 shadow-[0_10px_40px_-12px_rgba(34,211,238,0.55)] transition hover:bg-cyan-300">
              Get Started
            </a>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100/90 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live calculations
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
