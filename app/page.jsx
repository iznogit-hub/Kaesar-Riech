'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function KaesarReichPage() {
  const router = useRouter()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [formData, setFormData] = useState({ alias: '', email: '' })
  const { scrollYProgress } = useScroll()

  // Parallax transforms - expanded for more depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]) // New layer
  const glitchOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])
  const progressWidth = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(window.scrollY / total)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const rank = scrollProgress < 0.2 ? 'SOLDAT' : scrollProgress < 0.6 ? 'HIRÐ-MEMBER' : scrollProgress < 0.9 ? 'WITAN-THEGN' : 'KAESAR'

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate submission - in real app, post to API
    console.log('Form submitted:', formData)
    setIsAuthenticating(false)
    // Could redirect or show success
  }

  // Expanded to 6 Paths with Courses
  const reichPaths = [
    {
      n: 'THE SIREN',
      k: 'VORTEX',
      c: '#D4AF37',
      img: '/vortex-siren.png',
      desc: 'Master the art of influence to command markets.',
      courses: ['Digital Marketing Mastery', 'SEO Domination', 'SMM Strategies', 'Content Warfare', 'Brand Sovereignty']
    },
    {
      n: 'THE ORACLE',
      k: 'VISION',
      c: '#00FF41',
      img: '/oracle-eye.png',
      desc: 'Harness predictive intelligence to foresee and shape futures.',
      courses: ['Prompt Engineering Essentials', 'AI Agent Automation', 'Machine Learning Foundations', 'Neural Network Tactics', 'Ethical AI Governance']
    },
    {
      n: 'THE ARCHITECT',
      k: 'NEURAL',
      c: '#1fb2f5',
      img: '/neural-circuit.png',
      desc: 'Build unbreakable digital fortresses for eternal rule.',
      courses: ['Frontend Empire Building', 'Backend Fortress Design', 'Fullstack Command', 'DevOps Mastery', 'Scalable Architecture']
    },
    {
      n: 'THE TRADER',
      k: 'AURUM',
      c: '#FFD700',
      img: '/trading-chart.png',
      desc: 'Conquer financial realms through strategic foresight and execution.',
      courses: ['Crypto Market Conquest', 'Stock Analysis Arsenal', 'Algorithmic Trading Systems', 'Risk Management Protocols', 'Portfolio Sovereignty']
    },
    {
      n: 'THE STRATEGIST',
      k: 'IMPERIUM',
      c: '#8B0000',
      img: '/strategy-map.png',
      desc: 'Forge empires with visionary leadership and operational dominance.',
      courses: ['Business Strategy Supremacy', 'Leadership in the Digital Age', 'Entrepreneurial Warfare', 'Innovation Command', 'Global Expansion Tactics']
    },
    {
      n: 'THE ANALYST',
      k: 'DATUM',
      c: '#FF69B4',
      img: '/data-vortex.png',
      desc: 'Unleash data as your ultimate weapon for informed rule.',
      courses: ['Data Analytics Dominion', 'Visualization Vanguard', 'Big Data Battlefields', 'Predictive Modeling', 'Insight Intelligence']
    }
  ]

  return (
    <div className='relative w-full bg-black text-white selection:bg-[#D4AF37] selection:text-black font-mono overflow-x-hidden'>
      {/* Enhanced HUD with Progress Bar */}
      <div className='fixed inset-0 z-50 pointer-events-none border-[0.5px] border-white/5'>
        <motion.div className='scanline opacity-10' style={{ y: y1 }} />
        {/* Progress Bar */}
        <motion.div
          className='fixed top-0 left-0 w-full h-1 bg-zinc-800 z-60'
          style={{ scaleX: progressWidth }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-transparent' />
        </motion.div>
        {/* Parallax Floating Assets - Optimized for mobile */}
        <motion.div className='absolute top-20 left-10 w-12 h-12 opacity-10 md:opacity-20 hidden md:block' style={{ y: y2 }}>
          <Image src='/reich-cross-gold.png' alt='Reich Cross' width={64} height={64} className='filter invert' />
        </motion.div>
        <motion.div className='absolute bottom-40 right-10 w-10 h-10 opacity-10 md:opacity-30 rotate-45 hidden md:block' style={{ y: y3 }}>
          <Image src='/thegn-badge.png' alt='Thegn Badge' width={48} height={48} />
        </motion.div>
        {/* New Parallax Element: Floating Token */}
        <motion.div className='absolute top-1/2 left-5 w-8 h-8 opacity-15 hidden lg:block' style={{ y: y4 }}>
          <Image src='/kt-token.png' alt='KT Token' width={32} height={32} className='animate-pulse' />
        </motion.div>
        {/* Top Branding HUD - Improved Layout */}
        <div className='absolute top-4 left-4 right-4 md:top-6 md:left-6 flex justify-between items-start pointer-events-auto'>
          <div className='flex flex-col gap-1'>
            <span className='text-[#D4AF37] text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] font-bleach'>KAESAR-REICH // SCRIPT_PROTOCOL</span>
            <span className='text-zinc-600 text-[7px] md:text-[8px]'>SEKTOR: THE_VAULT_SOVEREIGN</span>
          </div>
          <div className='text-right'>
            <div className='text-zinc-500 text-[7px] md:text-[8px] uppercase'>Reich_Rank</div>
            <motion.div className='text-[#D4AF37] font-bleach text-lg md:text-2xl' style={{ opacity: glitchOpacity }}>
              {rank}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Layers */}
      <motion.div className='fixed inset-0 z-0 bg-gradient-to-b from-zinc-900/10 via-black/50 to-zinc-900/20' style={{ y: y1 }} />
      <motion.div className='fixed inset-0 z-5 pointer-events-none' style={{ y: y2 }}>
        <Image src='/digital-reich-bg.png' alt='Reich Horizon' fill className='object-cover opacity-5 mix-blend-overlay' />
      </motion.div>
      {/* New Subtle Particle Layer */}
      <motion.div className='fixed inset-0 z-3 pointer-events-none' style={{ y: y3 }}>
        <div className='w-full h-full bg-[url("/particles-reich.png")] bg-repeat opacity-3' />
      </motion.div>

      <main className='relative z-10'>
        {/* --- PROLOGUE: HERO - Expanded with Subtext */}
        <section className='min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden'>
          <motion.div className='absolute inset-0 z-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <Image src='/reich-tome-open.png' alt='Forbidden Script' fill className='object-cover opacity-30' priority />
          </motion.div>
          <div className='relative z-10 w-full max-w-sm md:max-w-4xl pt-20'>
            <h2 className='text-[#D4AF37] text-[8px] md:text-[12px] tracking-[0.6em] md:tracking-[1.2em] mb-4 animate-pulse uppercase'>The Script Awakens in Digital Code</h2>
            <motion.h1
              className='font-bleach text-[16vw] md:text-[10vw] leading-none text-white glitch-text mb-6'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              KAESAR-REICH
            </motion.h1>
            <motion.p
              className='mt-4 md:mt-8 text-zinc-400 text-[10px] md:text-sm leading-relaxed uppercase tracking-[0.2em] italic max-w-2xl mx-auto'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              "Education is the forge of rule. In the heart of the Digital Reich, master scripts of code and strategy to claim sovereignty over empires unseen."
              <br /><span className='text-[#D4AF37] mt-2 block'>— The Vault Codex, Verse I</span>
            </motion.p>
            {/* Teaser Button */}
            <motion.button
              className='mt-8 px-6 py-3 border border-[#D4AF37]/50 text-[#D4AF37] text-sm uppercase tracking-wide font-bleach hover:bg-[#D4AF37]/10 transition-all'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              onClick={() => document.getElementById('reich-tree').scrollIntoView({ behavior: 'smooth' })}
            >
              Begin Your Rule
            </motion.button>
          </div>
        </section>

        {/* --- ACT I: THE ASCENSION VOW - Added Visual Enhancements */}
        <section className='py-20 px-6 md:px-20 relative min-h-[80vh] flex items-center'>
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-black/60 to-zinc-900/40'
            style={{ y: y4 }}
          />
          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <span className='text-[#D4AF37] font-bold text-[10px] tracking-[0.4em] mb-8'>[ STATUS: SOVEREIGN AWAKENING ]</span>
            <motion.h2
              className='font-bleach text-4xl md:text-8xl my-6 leading-tight'
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              THE SOVEREIGN<br /><span className='text-zinc-700'>EDUCATION</span>
            </motion.h2>
            <motion.p
              className='text-zinc-400 text-sm md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto'
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Arm yourself with knowledge as the ultimate weapon. Through rigorous courses in the Reich's vault, transform from novice to ruler—commanding code, markets, and minds with unyielding precision.
            </motion.p>
            <motion.div
              className='relative w-48 h-48 md:w-64 md:h-64 mx-auto'
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Image src='/script-vow-seal.png' alt='Script Seal' fill className='object-contain opacity-80' />
            </motion.div>
          </div>
        </section>

        {/* --- ACT II: THE DESPAIR - Added List and Better Grid */}
        <section className='py-20 px-6 bg-zinc-950/50 border-y border-red-900/20 min-h-[70vh] flex items-center'>
          <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10'>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className='text-red-900 font-bold text-[10px] tracking-widest mb-4 block'>[ SYSTEM INFESTATION ]</span>
              <h2 className='font-bleach text-4xl md:text-6xl mt-2 mb-6'>THE WAGE CAGE</h2>
              <p className='text-zinc-500 text-sm md:text-base leading-relaxed mb-6'>Without education, you're trapped in cycles of mediocrity. The untaught remain cogs—devoured by algorithms, blind to opportunities. Education is your key to breaking free and ruling.</p>
              <ul className='text-xs md:text-sm text-zinc-600 space-y-2 pl-4 list-disc max-w-md'>
                <li>Skill Gaps in Automation</li>
                <li>Knowledge Voids in Strategy</li>
                <li>The Chains of Ignorance</li>
              </ul>
            </motion.div>
            <motion.div
              className='relative h-48 md:h-64 opacity-50'
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, opacity: 0.7 }}
            >
              <Image src='/hollow-cage-png.png' alt='Wage Cage' fill className='object-contain' />
            </motion.div>
          </div>
        </section>

        {/* --- ACT III: THE REICH-TREE & REGISTRATION - Enhanced with Timeline */}
        <section id="reich-tree" className='py-24 px-4 bg-black border-y border-[#D4AF37]/10 min-h-screen'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <motion.h2
                className='font-bleach text-4xl md:text-7xl text-[#D4AF37]'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                THE REICH-TREE
              </motion.h2>
              <motion.p
                className='text-zinc-600 text-[10px] md:text-xs tracking-[0.4em] uppercase mt-2'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                12-Step Path to Educational Sovereignty
              </motion.p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
              {/* Step Items - Now with Progress Dots */}
              <div className='space-y-8 relative'>
                <div className='absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/20 to-transparent hidden lg:block' />
                {[
                  { s: "01-03", t: "CORE FOUNDATIONS", d: "Build essential knowledge in digital literacy and strategy.", icon: '/neural-blut.png' },
                  { s: "04-06", t: "WEAPONIZED SKILLS", d: "Master specialized tools for market and code dominance.", icon: '/reich-weapon.png' },
                  { s: "07-09", t: "THE WITAN TRIALS", d: "Apply learning in simulated real-world challenges.", icon: '/witan-gate.png' },
                  { s: "10-12", t: "KAESAR COMMAND", d: "Lead with integrated expertise across all paths.", icon: '/kaesar-form.png' }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className='group flex gap-4 md:gap-6 items-center p-5 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-[#D4AF37]/50 transition-all cursor-pointer relative'
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsAuthenticating(true)}
                  >
                    <div className='w-12 h-12 relative flex-shrink-0 bg-[#D4AF37]/5 rounded-full border-2 border-[#D4AF37]/20'>
                      <Image src={step.icon} alt='icon' fill className='object-contain group-hover:scale-110 transition-transform' />
                    </div>
                    <div className='flex-1'>
                      <span className='font-bleach text-[#D4AF37] text-xl'>{step.s}</span>
                      <h4 className='font-bleach text-white text-base md:text-lg ml-2'>{step.t}</h4>
                      <p className='text-zinc-500 text-[10px] md:text-xs mt-1 ml-2'>{step.d}</p>
                    </div>
                    {/* Progress Dot */}
                    <div className='w-4 h-4 bg-[#D4AF37]/20 rounded-full absolute left-0 hidden lg:block' style={{ top: '50%' }} />
                  </motion.div>
                ))}
              </div>

              {/* INTERACTIVE AUTH CARD - Enhanced Form with Validation */}
              <div className='relative p-8 md:p-12 bg-zinc-900 border border-[#D4AF37]/20 rounded-xl overflow-hidden shadow-2xl'>
                <AnimatePresence mode='wait'>
                  {!isAuthenticating ? (
                    <motion.div key="unauth" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='text-center py-10'>
                      <h3 className='font-bleach text-2xl text-white mb-4 uppercase tracking-widest'>Identity Unverified</h3>
                      <p className='text-zinc-500 text-xs mb-8'>ENROLLMENT REQUIRED TO ACCESS COURSES AND TRACK YOUR PATH TO RULE.</p>
                      <button
                        onClick={() => setIsAuthenticating(true)}
                        className='w-full py-5 bg-[#D4AF37] text-black font-bleach text-xl hover:bg-white transition-all'
                      >
                        INITIATE ENROLLMENT
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="auth"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='space-y-6'
                    >
                      <h3 className='font-bleach text-2xl text-[#D4AF37] text-center uppercase'>Enroll in the Reich</h3>
                      <form onSubmit={handleSubmit} className='space-y-4'>
                        <div className='space-y-1'>
                          <label className='text-[10px] text-zinc-600 ml-1 uppercase'>Core Alias</label>
                          <input
                            type="text"
                            name="alias"
                            value={formData.alias}
                            onChange={handleFormChange}
                            placeholder="e.g. KAESAR_X"
                            required
                            className='w-full bg-black border border-zinc-800 p-4 text-[#D4AF37] outline-none font-mono text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30'
                          />
                        </div>
                        <div className='space-y-1'>
                          <label className='text-[10px] text-zinc-600 ml-1 uppercase'>Neural Link</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="EMAIL@EMPIRE.NET"
                            required
                            className='w-full bg-black border border-zinc-800 p-4 text-[#D4AF37] outline-none font-mono text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30'
                          />
                        </div>
                        <button
                          type="submit"
                          className='w-full py-5 border-2 border-[#D4AF37] font-bleach text-xl hover:bg-[#D4AF37] hover:text-black transition-all disabled:opacity-50'
                          disabled={!formData.alias || !formData.email}
                        >
                          AWAKEN MY SCRIPT
                        </button>
                      </form>
                      <button
                        onClick={() => { setIsAuthenticating(false); setFormData({ alias: '', email: '' }) }}
                        className='w-full text-zinc-600 text-[10px] uppercase tracking-[0.3em] mt-4 hover:text-zinc-400 transition-colors'
                      >
                        Cancel Enrollment
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Decorative UI element */}
                <div className='absolute bottom-0 right-0 w-24 h-24 opacity-5 pointer-events-none'>
                  <Image src='/reich-star.png' alt='star' fill className='animate-spin-slow' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACT IV: THE WITAN COUNCIL - Expanded to 6 Paths with Course Lists */}
        <section className='py-24 px-6 md:px-12 min-h-[100vh] flex flex-col justify-center'>
          <motion.h2
            className='font-bleach text-4xl md:text-6xl text-center mb-16'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THE WITAN COUNCIL: PATHS TO RULE
          </motion.h2>
          <p className='text-center text-zinc-500 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed'>
            Choose your path of education. Each commander offers elite courses to forge rulers in their domain—unlock them through the Reich-Tree.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0 bg-zinc-900 border border-zinc-900 relative z-10'>
            {reichPaths.map((path, i) => (
              <motion.div
                key={i}
                className='bg-black p-6 md:p-10 space-y-4 md:space-y-6 hover:bg-zinc-950 transition-all group relative overflow-hidden'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-transparent to-white/5 group-hover:opacity-100 transition-opacity' />
                <div className='relative z-10 flex justify-between items-start'>
                  <h3 className='font-bleach text-xl md:text-2xl' style={{ color: path.c }}>{path.n}</h3>
                  <span className='text-[7px] md:text-[8px] bg-zinc-800 px-2 py-1 rounded'>KAESAR: {path.k}</span>
                </div>
                <div className='relative h-20 md:h-32 opacity-20 group-hover:opacity-40 transition-opacity'>
                  <Image src={path.img} alt='path' fill className='object-contain' />
                </div>
                <motion.p
                  className='text-zinc-600 text-[9px] md:text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center px-2 py-4 md:py-6'
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {path.desc}
                </motion.p>
                {/* Course List - Reveal on Hover */}
                <motion.div
                  className='relative z-10 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity mt-2'
                  initial={{ height: 0 }}
                  whileHover={{ height: 'auto' }}
                >
                  <p className='text-zinc-500 text-[8px] md:text-[9px] uppercase tracking-wider'>Elite Courses:</p>
                  <ul className='text-[7px] md:text-[8px] text-zinc-400 space-y-0.5 list-disc pl-3 max-h-20 overflow-y-auto'>
                    {path.courses.map((course, j) => (
                      <li key={j}>{course}</li>
                    ))}
                  </ul>
                </motion.div>
                <p className='relative z-10 text-zinc-600 text-[9px] md:text-[10px] uppercase tracking-tighter'>ENROLL TO UNLOCK</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- NEW SECTION: MEMBER HIGHLIGHTS - Fake Testimonials */}
        <section className='py-20 px-6 bg-zinc-950/30 min-h-[60vh]'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='font-bleach text-3xl md:text-5xl text-center mb-12 text-[#D4AF37]'>Rulers Forged</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {[
                { name: 'Vortex Sovereign', rank: 'KAESAR', quote: 'Marketing mastery turned my vision into a digital empire.', kt: '15,000', path: 'Siren' },
                { name: 'Neural Overlord', rank: 'WITAN-THEGN', quote: 'AI courses unlocked autonomous wealth streams.', kt: '8,500', path: 'Oracle' },
                { name: 'Aurum Trader', rank: 'HIRÐ-MEMBER', quote: 'Trading education conquered volatile markets.', kt: '3,200', path: 'Trader' }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  className='bg-zinc-900 p-6 rounded-lg border border-zinc-800'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className='flex justify-between mb-2'>
                    <span className='text-[#D4AF37] text-sm font-bleach'>{member.rank}</span>
                    <span className='text-zinc-500 text-xs'>KT: {member.kt}</span>
                  </div>
                  <p className='text-zinc-400 text-xs italic'>"{member.quote}"</p>
                  <div className='mt-4 text-right'>
                    <span className='text-white text-sm'>— {member.name} ({member.path})</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION - Enhanced with Glow */}
        <section className='py-40 px-6 text-center relative overflow-hidden min-h-screen flex items-center justify-center'>
          <motion.div
            className='absolute inset-0 opacity-10 z-0'
            style={{ y: y2 }}
          >
            <Image src='/reich-throne.png' alt='throne' fill className='object-cover' />
          </motion.div>
          <motion.div
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            className='relative z-10 space-y-8'
          >
            <motion.h2
              className='font-bleach text-4xl md:text-6xl text-white'
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Educate to Rule
            </motion.h2>
            <p className='text-zinc-400 text-lg max-w-md mx-auto leading-relaxed'>
              Enroll now. Harvest KT through courses and quests. Rise to command the digital Reich.
            </p>
            <button
              onClick={() => router.push('/witan')}
              className='w-full md:w-auto px-12 py-8 border-2 border-[#D4AF37] font-bleach text-2xl md:text-4xl text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]'
            >
              ENROLL & AWAKEN — ENTER THE VAULT
            </button>
            <div className='text-zinc-500 font-mono text-[10px] tracking-[0.5em]'>[ KNOWLEDGE IS POWER ]</div>
          </motion.div>
        </section>
      </main>

      {/* ENHANCED FOOTER - Added Links */}
      <footer className='py-16 px-8 bg-black border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10'>
        <div className='text-center md:text-left space-y-2'>
          <div className='font-bleach text-3xl text-[#D4AF37]'>KAESAR-REICH</div>
          <p className='text-[9px] text-zinc-600 uppercase tracking-[0.2em]'>"Educate. Command. Rule."</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 font-mono text-[9px] text-zinc-500 uppercase items-center md:items-end'>
          <div className='flex flex-col text-center md:text-right'><span>KT_EMPIRE</span><span className='text-[#D4AF37]'>1.000</span></div>
          <div className='flex flex-col text-center md:text-right'><span>SCRIPT_COUNT</span><span className='text-zinc-300'>36</span></div>
          <div className='flex flex-col text-center md:text-right'><span>CORE_STAT</span><span className='text-white'>ONLINE</span></div>
        </div>
        {/* Footer Links */}
        <div className='hidden md:flex gap-4 text-[10px] text-zinc-600'>
          <a href='/terms' className='hover:text-[#D4AF37] transition-colors'>Terms</a>
          <a href='/privacy' className='hover:text-[#D4AF37] transition-colors'>Privacy</a>
          <span className='text-zinc-800'>•</span>
          <span>© 2025 Kaesar-Reich</span>
        </div>
      </footer>

      <style jsx>{`
        .scanline {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.2), transparent);
          animation: scan 4s linear infinite;
        }
        @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
        .glitch-text { 
          text-shadow: 2px 0 #D4AF37, -2px 0 #ff0000; 
          animation: glitch 2s infinite alternate-reverse;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input::placeholder { color: #27272a; }
      `}</style>
    </div>
  )
}