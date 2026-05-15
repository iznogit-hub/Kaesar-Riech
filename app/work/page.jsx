'use client'

import { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from '@react-three/drei'
import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import { Play, Camera, Zap, Award } from 'lucide-react'

const allWork = [
    {
        id: 'CbhcB0wlAfo',
        title: 'The Sovereign Reel',
        category: 'Showcase',
        discipline: 'Master Edit',
        duration: '4:12',
        location: 'Global',
        process: 'A high-energy synthesis of our most complex maneuvers. This reel focuses on seamless transitions between heavy-lift cinematic shots and aggressive FPV pursuit, demonstrating our ability to maintain a consistent visual language across varied platforms.'
    },
    {
        id: 'aRFkEvb9yr4',
        title: 'High-Speed Tracking',
        category: 'Action',
        discipline: 'Custom FPV Pursuit',
        duration: '2:45',
        location: 'Monaco',
        process: 'Shot using a custom-tuned 7-inch FPV rig carrying a GoPro 12 for metadata-stabilized tracking. Process involved high-frequency radio link management to maintain signal integrity behind obstacles at speeds exceeding 100mph.'
    },
    {
        id: 'V5I4JJg_3-0',
        title: 'Heavy-Lift Cinema',
        category: 'Commercial',
        discipline: 'Heavy-Lift / Dual-Op',
        duration: '3:28',
        location: 'Dubai',
        process: 'Executed with an Alta X octocopter carrying a RED V-Raptor and Cooke Anamorphic glass. Required a Pilot-in-Command for flight pathing and a dedicated Camera Operator for framing and iris control via a remote Wheels system.'
    },
    {
        id: 'XbbsoKny4OA',
        title: 'Micro FPV Precision',
        category: 'Indoor',
        discipline: 'Cinewhoop / Interior',
        duration: '1:55',
        location: 'Private Villa',
        process: 'Flying a sub-250g ducted "Cinewhoop" drone. This process relies on visual line-of-sight coordination to navigate tight corridors and proximity to talent without compromising safety or audio on set.'
    },
    {
        id: 'OESeRIrOoYA',
        title: 'Landscape & Mapping',
        category: 'Environment',
        discipline: 'Long-Range / Waypoint',
        duration: '5:10',
        location: 'Iceland',
        process: 'Utilizing GPS-guided waypoint missions to ensure perfectly repeatable flight paths. This allows for complex "time-lapse" style aerials and high-accuracy 3D photogrammetry for environment reconstruction.'
    },
    {
        id: '84NEEaYf_p4',
        title: 'Dynamic Pursuit',
        category: 'Automotive',
        discipline: 'Chase / FPV',
        duration: '2:38',
        location: 'California',
        process: 'Direct pursuit of high-velocity vehicles. The pilot utilizes Goggles for an immersive 1st-person view, allowing for precision proximity (inches from the bumper) to capture the raw energy of automotive motion.'
    },
    {
        id: 'qCE-Msr9Ctk',
        title: 'Aerial Choreography',
        category: 'VFX Plates',
        discipline: 'Stabilized Tracking',
        duration: '3:55',
        location: 'Studio Backlot',
        process: 'Designed specifically for post-production integration. Focuses on extremely smooth, high-altitude tracking shots that provide clean plates for VFX artists to overlay CGI architecture or digital crowds.'
    },
]

const categories = ['All', 'Showcase', 'Action', 'Commercial', 'Indoor', 'Environment']

export default function WorkPage() {
    const [activeVideo, setActiveVideo] = useState(null)
    const [filter, setFilter] = useState('All')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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

            {/* Subtle 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
                <Suspense fallback={null}>
                    <Scene className="w-full h-full" />
                </Suspense>
            </div>

            {/* Enhanced Navigation */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
                <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
                    <Link href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif flex items-center gap-2">
                        ✦ SOVEREIGNSKIES
                    </Link>

                    <nav className="hidden gap-8 text-xs tracking-widest uppercase md:flex text-white/80">
                        <Link href="/" className="hover:text-[#D4AF37]">Home</Link>
                        <Link href="/work" className="text-[#D4AF37]">Work</Link>
                        <Link href="/hotels" className="hover:text-[#D4AF37]">Hotels</Link>
                        <Link href="/realestate" className="hover:text-[#D4AF37]">Real Estate</Link>
                        <Link href="/film" className="hover:text-[#D4AF37]">Film</Link>
                        <Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Video Modal */}
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
                                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 pt-32 pb-24">
                {/* HERO HEADER */}
                <div className="container px-6 mx-auto md:px-12 lg:px-24 mb-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] text-[#D4AF37] mb-6 border border-[#D4AF37]/30 px-6 py-2 rounded-full">
                            <Zap className="w-4 h-4" /> PRECISION AERIAL CINEMATOGRAPHY
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-white mb-6">
                            The Work
                        </h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            From inches above the asphalt to thousands of feet above the earth — every frame is deliberate.
                        </p>
                    </motion.div>
                </div>

                {/* FILTERS */}
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

                {/* PORTFOLIO GRID - Enhanced */}
                <div className="container px-6 mx-auto md:px-12 lg:px-24">
                    <div className="space-y-28">
                        {filteredWork.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
                            >
                                {/* Video Side */}
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

                                {/* Technical Details Side */}
                                <div className="lg:col-span-5 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-mono">
                                            {item.category} • {item.location}
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

                {/* FINAL CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    className="mt-32 text-center container px-6 mx-auto"
                >
                    <div className="max-w-2xl mx-auto">
                        <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
                        <h2 className="text-5xl font-serif mb-6">Ready to create something extraordinary?</h2>
                        <p className="text-white/70 mb-10">From concept to final delivery — we handle the impossible shots.</p>

                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 bg-[#D4AF37] text-black font-medium tracking-widest text-sm hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] transition-all"
                        >
                            START YOUR PROJECT
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* FOOTER */}
            <footer className="bg-black border-t border-white/10 pt-20 pb-12">
                <div className="container px-6 mx-auto md:px-12 lg:px-24">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <div className="text-2xl font-serif text-[#D4AF37]">SovereignSkies</div>
                            <p className="text-xs text-white/40 mt-1">Mastery Above • Precision Below</p>
                        </div>

                        <div className="flex gap-8 text-sm text-white/60">
                            <Link href="/contact" className="hover:text-white">Get in Touch</Link>
                            <a href="https://instagram.com/sovereignskies" target="_blank" className="hover:text-white">Instagram</a>
                            <a href="https://youtube.com/@SovereignSkyz" target="_blank" className="hover:text-white">YouTube</a>
                        </div>
                    </div>

                    <div className="text-center text-[10px] text-white/30 mt-16">
                        © {new Date().getFullYear()} SOVEREIGNSKIES • ALL RIGHTS RESERVED
                    </div>
                </div>
            </footer>

            <Loader />
        </main>
    )
}