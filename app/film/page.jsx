'use client'

import { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from '@react-three/drei'
import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import { Play, Zap, Camera, Award, Users, Clock } from 'lucide-react'
import CountUp from 'react-countup'

const filmVideos = [
    { id: '84NEEaYf_p4', title: 'Dynamic Pursuit', category: 'Action Tracking', location: 'Monaco', duration: '2:45' },
    { id: 'V5I4JJg_3-0', title: 'Heavy-Lift Cinema', category: 'Commercial', location: 'Dubai', duration: '3:28' },
    { id: 'qCE-Msr9Ctk', title: 'Aerial Choreography', category: 'VFX Plates', location: 'Los Angeles', duration: '3:55' },
    { id: 'aRFkEvb9yr4', title: 'High-Speed Tracking', category: 'Automotive', location: 'California', duration: '2:38' },
    { id: 'XbbsoKny4OA', title: 'Micro FPV Precision', category: 'Cinewhoop', location: 'Studio', duration: '1:55' },
]

const stats = [
    { number: 85, suffix: '', label: 'Feature & Commercial Projects', icon: Award },
    { number: 120, suffix: '+', label: 'mph Pursuit Speed', icon: Zap },
    { number: 25, suffix: '', label: 'lbs Max Payload', icon: Camera },
    { number: 98, suffix: '%', label: 'On-Time Delivery', icon: Clock },
]

const testimonials = [
    {
        quote: "SovereignSkies delivered some of the most dynamic aerial shots we've ever had in a commercial. Their dual-operator system gave us true cinematic control at altitude.",
        name: "Marcus Hale",
        role: "Director, Nike Global Campaigns",
        location: "Los Angeles"
    },
    {
        quote: "The VFX plates they shot were flawless. Clean, repeatable, and perfectly lit. Saved us weeks in post-production.",
        name: "Aisha Rahman",
        role: "VFX Supervisor, Nomad Pictures",
        location: "London"
    },
]

export default function FilmPage() {
    const [activeVideo, setActiveVideo] = useState(null)
    const [scrolled, setScrolled] = useState(false)
    const [activeFilter, setActiveFilter] = useState('All')

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

    const filteredVideos = activeFilter === 'All'
        ? filmVideos
        : filmVideos.filter(v => v.category === activeFilter)

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    return (
        <main className="relative w-full bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden">

            {/* Subtle 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <Suspense fallback={null}>
                    <Scene className="w-full h-full" />
                </Suspense>
            </div>

            {/* Enhanced Navigation */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
                <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
                    <Link href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif">SOVEREIGNSKIES</Link>
                    <nav className="hidden gap-8 text-xs tracking-widest uppercase md:flex text-white/80">
                        <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
                        <Link href="/work" className="hover:text-[#D4AF37]">Work</Link>
                        <Link href="/hotels" className="hover:text-[#D4AF37]">Hotels</Link>
                        <Link href="/realestate" className="hover:text-[#D4AF37]">Real Estate</Link>
                        <Link href="/film" className="text-[#D4AF37]">Film & TV</Link>
                        <Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
                        <button onClick={() => setActiveVideo(null)} className="absolute top-8 right-8 text-white/60 hover:text-white uppercase tracking-widest text-sm z-50">✕ CLOSE</button>
                        <div className="w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-2xl relative">
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`} allowFullScreen className="absolute inset-0" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10">

                {/* HERO SECTION */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
                    <div className="absolute inset-0 z-0">
                        <iframe
                            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-105"
                            src="https://www.youtube.com/embed/aRFkEvb9yr4?autoplay=1&mute=1&controls=0&loop=1&playlist=aRFkEvb9yr4"
                            frameBorder="0" allow="autoplay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                    </div>

                    <div className="relative z-10 px-6 max-w-5xl mx-auto">
                        <div className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 rounded-full">
                            FILM & TELEVISION
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none mb-8">
                            Vision.<br />Velocity.<br />Precision.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
                            When the story demands the impossible — we make it cinematic reality.
                        </p>

                        <button
                            onClick={() => setActiveVideo('aRFkEvb9yr4')}
                            className="group px-10 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-4 text-sm tracking-widest uppercase mx-auto"
                        >
                            <Play className="w-5 h-5 group-hover:scale-110 transition" /> WATCH PRODUCTION REEL
                        </button>
                    </div>
                </section>

                {/* STATS BAR */}
                <section className="py-10 border-b border-white/10 bg-black/70 backdrop-blur">
                    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} className="flex flex-col items-center">
                                <stat.icon className="w-8 h-8 text-[#D4AF37] mb-3" />
                                <div className="text-5xl font-serif"><CountUp end={stat.number} duration={2} />{stat.suffix}</div>
                                <div className="text-xs tracking-widest uppercase text-white/60 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* THE ARSENAL */}
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                                <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-10">
                                    Built for the Big Screen
                                </h2>
                                <div className="space-y-8 text-lg text-white/70 font-light">
                                    <p>Our fleet carries full cinema payloads — RED V-Raptor, ARRI Alexa Mini LF, Sony Venice — with anamorphic glass. Dual-operator systems give directors precise control over framing while maintaining aggressive flight paths.</p>
                                    <p>From hypercar chases at 120+ mph to delicate VFX plate work, we deliver shots that elevate narratives and save production time.</p>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { num: "01", label: "Dual Operator Systems" },
                                    { num: "02", label: "Cinema Camera Rigs" },
                                    { num: "03", label: "FPV Pursuit Units" },
                                    { num: "04", label: "VFX / LiDAR Ready" }
                                ].map((item) => (
                                    <div key={item.num} className="border border-white/10 p-8 hover:border-[#D4AF37] transition-all group">
                                        <div className="text-6xl font-serif text-white/30 group-hover:text-[#D4AF37] transition">{item.num}</div>
                                        <p className="mt-6 text-lg font-medium">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAPABILITIES */}
                <section className="py-28 bg-neutral-950">
                    <div className="container px-6 mx-auto md:px-12">
                        <h2 className="text-center text-4xl font-serif mb-16">Production Services</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { icon: "🏎️", title: "High-Speed Action", desc: "Immersive FPV tracking for automotive, chase sequences, and extreme sports at previously impossible angles." },
                                { icon: "🎥", title: "Heavy-Lift Cinematography", desc: "Stunning aerial sequences with full cinema cameras and dual-operator precision control." },
                                { icon: "🌌", title: "VFX & Plates", desc: "Clean, repeatable aerial plates, HDR environments, photogrammetry, and LiDAR data for seamless CGI integration." }
                            ].map((service, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} className="p-10 border border-white/10 hover:border-[#D4AF37] group">
                                    <div className="text-6xl mb-8 opacity-80 group-hover:scale-110 transition">{service.icon}</div>
                                    <h3 className="text-2xl font-serif mb-5">{service.title}</h3>
                                    <p className="text-white/70">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXPANDED VIDEO SHOWCASE */}
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <h2 className="text-4xl font-serif">The Production Vault</h2>
                                <p className="text-white/60">Signature aerial work for film, TV & commercials</p>
                            </div>
                            <div className="flex gap-3 mt-6 md:mt-0">
                                {['All', 'Action Tracking', 'Commercial', 'VFX Plates', 'Automotive'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveFilter(cat)}
                                        className={`px-6 py-2 text-xs tracking-widest transition ${activeFilter === cat ? 'bg-[#D4AF37] text-black' : 'border border-white/30 hover:border-white'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredVideos.map((video, i) => (
                                <motion.div
                                    key={video.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeUp}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setActiveVideo(video.id)}
                                    className="group relative aspect-video cursor-pointer overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all"
                                >
                                    <img src={getThumbnail(video.id)} alt={video.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                        <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur">
                                            <Play className="w-8 h-8 ml-1" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <p className="text-xs text-[#D4AF37] tracking-widest mb-1">{video.category} • {video.location}</p>
                                        <h4 className="text-2xl font-serif">{video.title}</h4>
                                        <p className="text-xs text-white/50 mt-1">{video.duration}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-28 bg-zinc-950">
                    <div className="container px-6 mx-auto max-w-4xl">
                        <h2 className="text-center text-4xl font-serif mb-16">Directors & Producers Love Working With Us</h2>
                        <div className="grid md:grid-cols-2 gap-10">
                            {testimonials.map((t, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-10 border border-white/10 bg-black/40">
                                    <p className="italic text-lg leading-relaxed mb-8">“{t.quote}”</p>
                                    <div>
                                        <div className="font-medium">{t.name}</div>
                                        <div className="text-sm text-white/60">{t.role} • {t.location}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-32 text-center bg-gradient-to-b from-black to-neutral-950 border-t border-white/10">
                    <div className="container px-6 mx-auto max-w-2xl">
                        <h2 className="text-6xl font-serif text-[#D4AF37] mb-6">Ready for your next impossible shot?</h2>
                        <p className="text-xl text-white/70 mb-12">Fully insured • Worldwide • Production-ready</p>
                        <Link href="/contact" className="inline-block px-16 py-6 bg-[#D4AF37] text-black text-sm tracking-widest uppercase hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] transition">
                            DISCUSS YOUR PROJECT
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-black pt-20 pb-12 border-t border-[#D4AF37]/20">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="flex flex-col items-center mb-20 text-center">
                            <h2 className="text-3xl font-serif text-[#D4AF37]">SovereignSkies</h2>
                            <p className="text-xs tracking-widest text-white/50 mt-2">WHERE THE SKY BOWS</p>
                        </div>

                        <div className="text-center text-xs text-white/40 mt-20">
                            © {new Date().getFullYear()} SOVEREIGNSKIES • ALL RIGHTS RESERVED
                        </div>
                    </div>
                </footer>
            </div>

            <Loader />
        </main>
    )
}