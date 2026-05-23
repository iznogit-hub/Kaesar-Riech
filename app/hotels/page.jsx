'use client'

import { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from '@react-three/drei'
import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import { Play } from 'lucide-react'
import CountUp from 'react-countup'

const hotelVideos = [
    { id: 'OESeRIrOoYA', title: 'Coastal Retreats', category: 'Landscape & Scale', location: 'Maldives', duration: '4:18' },
    { id: 'qCE-Msr9Ctk', title: 'The Grand Reveal', category: 'Architectural Flow', location: 'Santorini', duration: '3:35' },
    { id: 'V5I4JJg_3-0', title: 'Golden Hour Estates', category: 'Twilight Magic', location: 'Bali', duration: '5:02' },
    { id: 'pSlntz0srXw', title: 'Overwater Serenity', category: 'Resort Immersion', location: 'French Polynesia', duration: '2:55' },
    { id: 'KHdyXbE_kik', title: 'Clifftop Luxury', category: 'Dramatic Vistas', location: 'Amalfi Coast', duration: '4:12' },
]

const stats = [
    { number: 120, suffix: '+', label: 'Luxury Properties' },
    { number: 35, suffix: '', label: 'Countries' },
    { number: 96, suffix: '%', label: 'Repeat Clients' },
    { number: 8, suffix: '', label: 'Avg. Booking Uplift' },
]

const testimonials = [
    {
        quote: "Sovereign Skyz completely transformed how we market our resorts. Our direct bookings increased by 68% after launching their cinematic campaigns.",
        name: "Isabella Rossi",
        role: "Brand Director, Aman Resorts",
        location: "Italy"
    },
    {
        quote: "Their ability to capture the soul of a destination is unmatched. The footage doesn't just show the resort — it makes people dream of staying.",
        name: "Arjun Mehta",
        role: "VP Marketing, Six Senses",
        location: "Thailand"
    },
]

export default function HotelsPage() {
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
        ? hotelVideos
        : hotelVideos.filter(v => v.category.includes(activeFilter) || activeFilter === 'All')

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

            {/* Navigation */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
                <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
                    <Link href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif">SOVEREIGNSKYZ</Link>
                    <nav className="hidden gap-8 text-xs tracking-widest uppercase md:flex text-white/80">
                        <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
                        <Link href="/work" className="hover:text-[#D4AF37]">Work</Link>
                        <Link href="/hotels" className="text-[#D4AF37]">Hotels & Resorts</Link>
                        <Link href="/realestate" className="hover:text-[#D4AF37]">Real Estate</Link>
                        <Link href="/film" className="hover:text-[#D4AF37]">Film</Link>
                        <Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
                        <button onClick={() => setActiveVideo(null)} className="absolute top-8 right-8 text-white/60 hover:text-white uppercase tracking-widest text-sm z-50 flex items-center gap-2">✕ CLOSE</button>
                        <div className="w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-2xl relative">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&playsinline=1`}
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10">

                {/* HERO SECTION */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <iframe
                            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none"
                            src="https://www.youtube.com/embed/OESeRIrOoYA?autoplay=1&mute=1&controls=0&loop=1&playlist=OESeRIrOoYA&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1"
                            frameBorder="0" allow="autoplay; encrypted-media" tabIndex={-1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                    </div>

                    <div className="relative z-10 px-6 max-w-5xl mx-auto pt-20">
                        <div className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 rounded-full">
                            HOSPITALITY & RESORTS
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none mb-8">
                            Turn Destinations<br />Into Desires.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
                            We capture the emotion of arrival — the moment a guest falls in love with your resort.
                        </p>

                        <button
                            onClick={() => setActiveVideo('OESeRIrOoYA')}
                            className="group px-10 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-4 text-sm tracking-widest uppercase mx-auto"
                        >
                            <Play className="w-5 h-5 group-hover:scale-110 transition" /> WATCH HOSPITALITY REEL
                        </button>
                    </div>
                </section>

                {/* STATS BAR */}
                <section className="py-10 border-b border-white/10 bg-black/70 backdrop-blur">
                    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} className="flex flex-col items-center">
                                <div className="text-5xl font-serif"><CountUp end={stat.number} duration={2} />{stat.suffix}</div>
                                <div className="text-xs tracking-widest uppercase text-white/60 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* SOVEREIGN APPROACH */}
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                                <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-10">
                                    From the sky to the soul of your resort.
                                </h2>
                                <div className="space-y-8 text-lg text-white/70 font-light">
                                    <p>We don’t shoot hotels. We tell stories of escape, luxury, and unforgettable moments.</p>
                                    <p>Our cinematic approach combines sweeping heavy-lift aerials with intimate FPV journeys through villas, spas, and dining experiences — creating powerful emotional connections with future guests.</p>
                                </div>
                            </motion.div>

                            <div className="relative aspect-[4/5] border border-white/10 overflow-hidden group">
                                <img src={getThumbnail('qCE-Msr9Ctk')} alt="Resort Experience" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="text-[#D4AF37] text-xs tracking-widest mb-2">SIGNATURE TECHNIQUE</p>
                                    <p className="text-3xl font-serif leading-tight">The One-Take Arrival Sequence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAPABILITIES */}
                <section className="py-28 bg-neutral-950">
                    <div className="container px-6 mx-auto md:px-12">
                        <h2 className="text-center text-4xl font-serif mb-16">Services for Hospitality Leaders</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { title: "Cinematic Brand Films", desc: "High-production aerial storytelling that captures the essence and luxury of your brand." },
                                { title: "Amenity Immersion Tours", desc: "Seamless FPV journeys through pools, spas, restaurants, and private villas." },
                                { title: "Golden Hour & Twilight", desc: "Expertly timed shoots that showcase your property at its most magical." }
                            ].map((service, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} className="p-10 border border-white/10 hover:border-[#D4AF37] group">
                                    <h3 className="text-2xl font-serif mb-5">{service.title}</h3>
                                    <p className="text-white/70">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* VIDEO SHOWCASE */}
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <h2 className="text-4xl font-serif">The Resort Collection</h2>
                                <p className="text-white/60">Properties that define luxury hospitality</p>
                            </div>
                            <div className="flex gap-3 mt-6 md:mt-0">
                                {['All', 'Landscape & Scale', 'Architectural Flow', 'Twilight Magic'].map(cat => (
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
                        <h2 className="text-center text-4xl font-serif mb-16">Trusted by the World’s Finest</h2>
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
                        <h2 className="text-6xl font-serif text-[#D4AF37] mb-6">Make your resort unforgettable.</h2>
                        <p className="text-xl text-white/70 mb-12">From first glance to lasting memory — we help turn visitors into loyal guests.</p>
                        <Link href="/contact" className="inline-block px-16 py-6 bg-[#D4AF37] text-black text-sm tracking-widest uppercase hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] transition">
                            START YOUR CAMPAIGN
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-black pt-20 pb-12 border-t border-[#D4AF37]/20">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="flex flex-col items-center mb-20 text-center">
                            <h2 className="text-3xl font-serif text-[#D4AF37]">Sovereign Skyz</h2>
                            <p className="text-xs tracking-widest text-white/50 mt-2">WHERE THE SKY BOWS</p>
                        </div>

                        <div className="text-center text-xs text-white/40 mt-20">
                            © {new Date().getFullYear()} SOVEREIGNSKYZ • ALL RIGHTS RESERVED
                        </div>
                    </div>
                </footer>
            </div>

            <Loader />
        </main>
    )
}