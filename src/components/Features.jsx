import { Sparkles, ShieldCheck, LineChart } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10">
      <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2 text-cyan-300">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-300">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Feature icon={Sparkles} title="Premium visuals" desc="Glassmorphic design, soft gradients, and a 3D credit card hero." />
        <Feature icon={ShieldCheck} title="Reliable math" desc="Bank‑grade formulas for loans and growth, calculated instantly." />
        <Feature icon={LineChart} title="Actionable insights" desc="See totals, interest, and growth at a glance with smooth motion." />
      </div>
    </section>
  )
}

export default Features
