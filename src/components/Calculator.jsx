import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const format = (n) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n)

function Calculator() {
  const [amount, setAmount] = useState(25000)
  const [rate, setRate] = useState(6.5)
  const [years, setYears] = useState(5)
  const [type, setType] = useState('loan') // loan | invest

  const monthly = useMemo(() => {
    const r = rate / 100 / 12
    const n = years * 12

    if (type === 'loan') {
      if (r === 0) return amount / n
      const pmt = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      return pmt
    } else {
      // future value of series (monthly contributions)
      if (r === 0) return amount * n
      const fv = amount * ((Math.pow(1 + r, n) - 1) / r)
      return fv / n
    }
  }, [amount, rate, years, type])

  const totalPaid = useMemo(() => {
    const n = years * 12
    if (type === 'loan') return monthly * n
    return monthly * n // average monthly contribution value
  }, [monthly, years, type])

  const totalInterest = useMemo(() => {
    if (type === 'loan') return totalPaid - amount
    // For invest mode, show growth assuming contributions = amount monthly
    const r = rate / 100 / 12
    const n = years * 12
    if (r === 0) return 0
    const fv = amount * ((Math.pow(1 + r, n) - 1) / r)
    const principal = amount * n
    return fv - principal
  }, [amount, rate, years, type, totalPaid])

  return (
    <section id="calculator" className="relative z-10 mx-auto -mt-12 w-full max-w-6xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {/* Controls */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-4 flex gap-2 rounded-xl bg-white/5 p-1">
            <button
              onClick={() => setType('loan')}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition ${type==='loan' ? 'bg-cyan-400 text-slate-900' : 'text-slate-200/80 hover:bg-white/10'}`}
            >
              Loan
            </button>
            <button
              onClick={() => setType('invest')}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition ${type==='invest' ? 'bg-violet-400 text-slate-900' : 'text-slate-200/80 hover:bg-white/10'}`}
            >
              Invest
            </button>
          </div>

          <label className="mb-1 block text-sm text-slate-200">{type==='loan' ? 'Loan Amount' : 'Monthly Contribution'}</label>
          <input type="range" min="1000" max="200000" step="500" value={amount} onChange={e=>setAmount(Number(e.target.value))} className="w-full"/>
          <div className="mb-4 text-sm text-slate-300">${format(amount)}</div>

          <label className="mb-1 block text-sm text-slate-200">Annual Rate</label>
          <input type="range" min="0" max="20" step="0.1" value={rate} onChange={e=>setRate(Number(e.target.value))} className="w-full"/>
          <div className="mb-4 text-sm text-slate-300">{rate}%</div>

          <label className="mb-1 block text-sm text-slate-200">Years</label>
          <input type="range" min="1" max="30" step="1" value={years} onChange={e=>setYears(Number(e.target.value))} className="w-full"/>
          <div className="text-sm text-slate-300">{years} years</div>
        </div>

        {/* Results */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-300">{type==='loan' ? 'Monthly Payment' : 'Avg Monthly Growth'}</p>
              <p className="mt-1 text-2xl font-semibold text-white">${format(monthly)}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-300">Total Over Time</p>
              <p className="mt-1 text-2xl font-semibold text-white">${format(totalPaid)}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-300">{type==='loan' ? 'Total Interest' : 'Projected Growth'}</p>
              <p className="mt-1 text-2xl font-semibold text-white">${format(totalInterest)}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-300">Term</p>
              <p className="mt-1 text-2xl font-semibold text-white">{years} yrs</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-transparent p-4">
            <p className="text-sm text-slate-100/90">
              This is a simplified calculator for educational use. For precise quotes, consult your financial provider.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Calculator
