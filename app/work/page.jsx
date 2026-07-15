'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Camera, Zap, Award } from 'lucide-react'

const allWork = [
    {
        id: 'hrAdFZ6SDDY',
        title: 'Model Home KH',
        category: 'Real Estate',
        discipline: 'Interior FPV',
        duration: '1:45',
        process: 'Precision indoor navigation using sub-250g ducted platforms to seamlessly transition between interior spaces.'
    },
    {
        id: 'pK5_MnscTe8',
        title: 'Tammy Nell Ct',
        category: 'Real Estate',
        discipline: 'Heavy-Lift Exterior',
        duration: '2:30',
        process: 'Designed specifically for ultra-luxury property marketing. Sweeping architectural shots highlight the scale of the estate.'
    },
    {
        id: 'MxDihTx34_g',
        title: 'Ranch Views',
        category: 'Events',
        discipline: 'Dynamic Tracking',
        duration: '2:45',
        process: 'Wide-angle landscape pursuit capturing the scale and energy of rural activations and sprawling properties.'
    },
    {
        id: 'pqbPSlCTkDA',
        title: 'Fly through house',
        category: 'Real Estate',
        discipline: 'Cinewhoop / Interior',
        duration: '3:12',
        process: 'Continuous single-take fly-throughs that give potential buyers a true spatial understanding of the property layout.'
    },
    {
        id: 'RU60sNn_FAs',
        title: 'Harbor Town Willis',
        category: 'Real Estate',
        discipline: 'Architectural Drama',
        duration: '2:55',
        process: 'High-contrast sunset and golden hour captures that emphasize the dramatic lines and lighting of luxury architecture.'
    },
    {
        id: 'PoYq2aS-eJA',
        title: 'Entrance approach to The Wave',
        category: 'Real Estate',
        discipline: 'Heavy-Lift Exterior',
        duration: '1:50',
        process: 'A steady, commanding approach shot establishing the property boundaries and creating an immediate sense of arrival.'
    },
    {
        id: '4jByPpc9LAs',
        title: 'Rotating venue aerial',
        category: 'Events',
        discipline: 'Dynamic Tracking',
        duration: '2:55',
        process: 'Precise orbital maneuvers keeping the focal point perfectly centered while showcasing the surrounding environment.'
    },
    {
        id: '5j97ffTxEVs',
        title: 'The Wave Circle Around',
        category: 'Inspections',
        discipline: 'Waypoint Autonomous',
        duration: '5:10',
        process: 'GPS-guided waypoint missions ensuring perfectly repeatable flight paths for high-accuracy 3D photogrammetry.'
    },
    {
        id: 'NzgjREnzl-Q',
        title: 'The wave fly up and above',
        category: 'Inspections',
        discipline: 'Proximity Flight',
        duration: '2:38',
        process: 'Close-proximity vertical structural survey utilizing advanced FPV systems for micro-fracture analysis.'
    },
    {
        id: 'on8CRRO4Png',
        title: 'Harbor town venue',
        category: 'Inspections',
        discipline: 'Data Mapping',
        duration: '4:02',
        process: 'Wide-area zoom-out mapping for macro-level site overview, planning, and structural context.'
    },
    {
        id: 'HnutE8DjBI4',
        title: 'Boat follow',
        category: 'Inspections',
        discipline: 'Dynamic Pursuit',
        duration: '5:40',
        process: 'High-speed over-water tracking maintaining a consistent vector and altitude for marine asset documentation.'
    },
    {
        id: 'SkoF0xsy0Ao',
        title: 'Fire Dance Willis TX',
        category: 'Events',
        discipline: 'Custom FPV Pursuit',
        duration: '4:12',
        process: 'Low-light, high-action capture using specialized sensors to maintain clarity during high-contrast live performances.'
    },
    {
        id: 'euK2jBRWSeI',
        title: 'Lighthouse and docks',
        category: 'Events',
        discipline: 'Proximity Navigation',
        duration: '3:10',
        process: 'Navigating complex vertical structures safely to deliver stunning establishing shots for brand activations.'
    },
    {
        id: 'Nu4EVW_8Fx4',
        title: 'Birthday Party Harbor Town',
        category: 'Events',
        discipline: 'Live Event Coverage',
        duration: '3:28',
        process: 'Unobtrusive, low-noise operations capturing candid, high-energy moments of crowds and celebrations.'
    }
]

const categories = ['All', 'Portfolio', 'Real Estate', 'Inspections', 'Events']

export default function WorkPage() {
    const [activeVideo, setActiveVideo] = useState(null)
    const [filter, setFilter] = useState('All')

    const filteredWork = filter === 'All'
        ? allWork
        : allWork.filter(item => item.category === filter)

    const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    }

    return (
        <main className="relative w-full bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden">

            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-br from-zinc-900 to-black"></div>

            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg py-4 border-b border-white/10 transition-all duration-500">
                <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
                    <a href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif flex items-center gap-2">
                        <span className="text-3xl">✦</span> SOVEREIGNSKYZ
                    </a>

                    <nav className="hidden gap-8 text-xs tracking-widest uppercase md:flex text-white/80">
                        <a href="/" className="hover:text-[#D4AF37] transition-colors">Home</a>
                        <a href="/work" className="text-[#D4AF37] transition-colors">Portfolio</a>
                        <a href="/realestate" className="hover:text-[#D4AF37] transition-colors">Real Estate</a>
                        <a href="/inspections" className="hover:text-[#D4AF37] transition-colors">Inspections</a>
                        <a href="/events" className="hover:text-[#D4AF37] transition-colors">Events</a>
                        <a href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-8 right-8 z-50 text-sm tracking-widest uppercase text-white/60 hover:text-white flex items-center gap-2"
                        >
                            ✕ CLOSE
                        </button>
                        <div className="w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-2xl relative overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&playsinline=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute inset-0 pointer-events-none"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 pt-32 pb-24">

                <div className="container px-6 mx-auto md:px-12 lg:px-24 mb-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] text-[#D4AF37] mb-6 border border-[#D4AF37]/30 px-6 py-2 rounded-full">
                            <Zap className="w-4 h-4" /> PRECISION AERIAL IMAGING
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-white mb-6">
                            Selected Work
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            From dynamic event coverage to high-resolution structural mapping — exploring the intersection of aviation and technical cinematography.
                        </p>
                    </motion.div>
                </div>

                <div className="container px-6 mx-auto md:px-12 mb-16">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 border-b border-white/10 pb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 text-xs tracking-[0.125em] uppercase transition-all rounded-full border ${filter === cat
                                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                                    : 'border-white/20 hover:border-white/40 text-white/70 hover:text-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="container px-6 mx-auto md:px-12 lg:px-24">
                    <div className="space-y-28">
                        {filteredWork.map((item, i) => (
                            <motion.div
                                key={`${item.id}-${i}`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
                            >
                                <div className="lg:col-span-7 relative">
                                    <div
                                        onClick={() => setActiveVideo(item)}
                                        className="relative aspect-video overflow-hidden cursor-pointer border border-white/10 group-hover:border-[#D4AF37] transition-all duration-700"
                                    >
                                        <img
                                            src={getThumbnail(item.id)}
                                            alt={item.title}
                                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all">
                                            <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                                                <Play className="w-9 h-9 text-white ml-1" fill="white" />
                                            </div>
                                        </div>

                                        <div className="absolute top-6 right-6 bg-black/70 text-[10px] px-3 py-1 tracking-widest border border-white/30">
                                            {item.duration}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-5 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-mono">
                                            {item.category}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-serif mt-3 leading-none">{item.title}</h2>
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mb-6">
                                        <Camera className="w-4 h-4" />
                                        <span>{item.discipline}</span>
                                    </div>

                                    <div>
                                        <h4 className="uppercase text-xs tracking-widest text-[#D4AF37] mb-3">The Process</h4>
                                        <p className="text-white/70 leading-relaxed text-[15px]">
                                            {item.process}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setActiveVideo(item)}
                                        className="mt-10 self-start group/btn flex items-center gap-3 text-sm tracking-widest uppercase border-b border-transparent hover:border-[#D4AF37] pb-1 transition-all hover:text-[#D4AF37]"
                                    >
                                        WATCH FULL OPERATION
                                        <span className="group-hover/btn:translate-x-1 transition">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    className="mt-32 text-center container px-6 mx-auto"
                >
                    <div className="max-w-2xl mx-auto">
                        <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
                        <h2 className="text-5xl font-serif mb-6">Ready to elevate your vision?</h2>
                        <p className="text-white/70 mb-10">Whether capturing a property, mapping a site, or filming an event — I deliver precision.</p>

                        <a
                            href="/contact"
                            className="inline-block px-14 py-5 bg-[#D4AF37] text-black font-medium tracking-widest text-sm hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] transition-all"
                        >
                            REQUEST A QUOTE
                        </a>
                    </div>
                </motion.div>
            </div>

            <footer className="bg-black pt-20 pb-12 border-t border-white/10">
                <div className="container px-6 mx-auto md:px-12 text-center">
                    <div className="text-3xl font-serif text-[#D4AF37] mb-2 flex items-center justify-center gap-2">
                        <span>✦</span> Sovereign Skyz
                    </div>
                    <p className="text-[10px] tracking-widest uppercase text-white/50 mb-12">ADVANCED AERIAL OPERATIONS</p>
                    <div className="pt-12 border-t border-white/10 text-[10px] text-white/40 tracking-widest uppercase">
                        <p>© {new Date().getFullYear()} SOVEREIGNSKYZ • ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            </footer>
        </main>
    )
}