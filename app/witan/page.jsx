'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WitanPage() {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const reichPaths = [
        {
            id: 'marketing',
            name: 'THE SIREN',
            role: 'Digital Marketing Command',
            locked: false,
            desc: 'Master the art of influence to command markets.',
            courses: ['Digital Marketing Mastery', 'SEO Domination', 'SMM Strategies', 'Content Warfare', 'Brand Sovereignty'],
            img: '/siren-vortex.png'
        },
        {
            id: 'ai',
            name: 'THE ORACLE',
            role: 'AI Sovereignty',
            locked: false,
            desc: 'Harness predictive intelligence to shape futures.',
            courses: ['Prompt Engineering Essentials', 'AI Agent Automation', 'Machine Learning Foundations', 'Neural Network Tactics', 'Ethical AI Governance'],
            img: '/oracle-vision.png'
        },
        {
            id: 'web-dev',
            name: 'THE ARCHITECT',
            role: 'Web Empire Building',
            locked: false,
            desc: 'Build unbreakable digital fortresses for rule.',
            courses: ['Frontend Empire Building', 'Backend Fortress Design', 'Fullstack Command', 'DevOps Mastery', 'Scalable Architecture'],
            img: '/architect-neural.png'
        },
        {
            id: 'trading',
            name: 'THE TRADER',
            role: 'Financial Conquest',
            locked: false,
            desc: 'Conquer financial realms through strategic execution.',
            courses: ['Crypto Market Conquest', 'Stock Analysis Arsenal', 'Algorithmic Trading Systems', 'Risk Management Protocols', 'Portfolio Sovereignty'],
            img: '/trader-aurum.png'
        },
        {
            id: 'strategy',
            name: 'THE STRATEGIST',
            role: 'Imperial Leadership',
            locked: false,
            desc: 'Forge empires with visionary operational dominance.',
            courses: ['Business Strategy Supremacy', 'Leadership in the Digital Age', 'Entrepreneurial Warfare', 'Innovation Command', 'Global Expansion Tactics'],
            img: '/strategist-imperium.png'
        },
        {
            id: 'data',
            name: 'THE ANALYST',
            role: 'Data Dominion',
            locked: false,
            desc: 'Unleash data as your ultimate weapon for rule.',
            courses: ['Data Analytics Dominion', 'Visualization Vanguard', 'Big Data Battlefields', 'Predictive Modeling', 'Insight Intelligence'],
            img: '/analyst-datum.png'
        },
        // Locked for future seasons
        { id: 'locked-1', name: '???', role: 'Season 2', locked: true, img: '/locked-encrypted.png', courses: [] },
        { id: 'locked-2', name: '???', role: 'Season 2', locked: true, img: '/locked-encrypted.png', courses: [] },
        { id: 'locked-3', name: '???', role: 'Season 2', locked: true, img: '/locked-encrypted.png', courses: [] },
    ]

    return (
        <div className='relative min-h-screen w-full bg-[#050505] text-white p-6 md:p-20 font-mono overflow-hidden'>
            <div className='scanline' />

            {/* Hero Expansion: Immersive Intro */}
            <section className='text-center mb-16 relative z-10'>
                <motion.h1
                    className='font-bleach text-5xl md:text-7xl text-[#D4AF37] mb-4 tracking-[0.1em]'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    WITAN TERMINAL
                </motion.h1>
                <motion.p
                    className='text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Enter the Vault of Knowledge. Select your path to sovereignty. Each archetype unlocks elite courses, forging you into a ruler of the Digital Reich.
                </motion.p>
                <motion.div
                    className='mt-8 text-sm text-zinc-600 tracking-[0.3em] uppercase'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    [ CHOOSE YOUR LEGACY ]
                </motion.div>
            </section>

            <header className='mb-12 border-b border-[#D4AF37]/30 pb-6 text-center'>
                <h2 className='font-bleach text-3xl md:text-4xl text-[#D4AF37]'>Archetype Selection</h2>
                <p className='text-[12px] md:text-[14px] tracking-[0.4em] text-zinc-500 uppercase'>Paths to Educational Rule</p>
            </header>

            {/* Expanded Grid: 3 Columns, Taller Cards with Images & Course Teasers */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto relative z-10'>
                {reichPaths.map((archetype, index) => (
                    <motion.div
                        key={archetype.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className={`relative min-h-[700px] p-8 md:p-12 border-2 transition-all duration-300 rounded-xl overflow-hidden ${archetype.locked
                            ? 'border-zinc-900 bg-zinc-900/20 grayscale opacity-40 cursor-not-allowed'
                            : 'border-[#D4AF37]/20 bg-black/50 hover:border-[#D4AF37]/50 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] cursor-pointer'
                            }`}
                        onClick={() => !archetype.locked && router.push(`/${archetype.id}`)}
                        whileHover={!archetype.locked ? { y: -10 } : {}}
                    >
                        {/* Background Glow on Hover */}
                        {!archetype.locked && (
                            <motion.div
                                className='absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent'
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}

                        <div className='relative z-10 h-full flex flex-col justify-between'>
                            {/* Archetype Image - Prominent Hero Image */}
                            <motion.div
                                className='relative w-full h-48 md:h-56 mb-6 rounded-lg overflow-hidden bg-zinc-900/20'
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image
                                    src={archetype.img}
                                    alt={`${archetype.name} Archetype`}
                                    fill
                                    className={`object-cover transition-transform duration-300 ${archetype.locked ? 'filter grayscale' : ''}`}
                                    priority={index < 3}
                                />
                            </motion.div>

                            {/* Header */}
                            <div className='mb-6 flex-1'>
                                <h3 className='font-bleach text-3xl md:text-4xl text-[#D4AF37] mb-2 tracking-[0.05em]'>
                                    {archetype.name}
                                </h3>
                                <p className='text-lg md:text-xl text-zinc-400 uppercase tracking-widest font-bold'>
                                    {archetype.role}
                                </p>
                                {!archetype.locked && (
                                    <p className='text-zinc-600 text-sm md:text-base mt-2 leading-relaxed italic'>
                                        {archetype.desc}
                                    </p>
                                )}
                            </div>

                            {/* Course Teasers - Scrollable List */}
                            {!archetype.locked ? (
                                <div className='mb-6 overflow-y-auto max-h-48 pr-2 custom-scrollbar'>
                                    <h4 className='font-bleach text-xl text-white mb-3 uppercase tracking-wide'>Elite Courses</h4>
                                    <ul className='space-y-1 text-sm md:text-base text-zinc-300'>
                                        {archetype.courses.map((course, i) => (
                                            <motion.li
                                                key={i}
                                                className='flex items-center justify-between py-1 hover:text-[#D4AF37] transition-colors cursor-pointer'
                                                whileHover={{ x: 5 }}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    router.push(`/${archetype.id}/${course.toLowerCase().replace(/ /g, '-')}`)
                                                }}
                                            >
                                                <span>{course}</span>
                                                <span className='text-xs text-zinc-500'>→</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className='flex-1 flex items-center justify-center'>
                                    <p className='text-zinc-500 text-lg uppercase tracking-widest'>[ LOCKED: SEASON 2 ]</p>
                                </div>
                            )}

                            {/* Action Button */}
                            <button className={`w-full py-4 md:py-6 text-lg md:text-xl font-bleach uppercase transition-all ${archetype.locked
                                ? 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                                : 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-black'
                                }`}>
                                {archetype.locked ? 'ENCRYPTED' : 'INITIALIZE PATH'}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Expanded Footer with More Stats */}
            <footer className='mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] text-zinc-600 border-t border-zinc-900 pt-6 md:pt-8 gap-4 md:gap-0'>
                <div className='text-center md:text-left'>
                    SESSION_TIME: {mounted ? new Date().toLocaleTimeString() : '---'} | PATHS_UNLOCKED: {reichPaths.filter(p => !p.locked).length}/9
                </div>
                <div className='flex items-center gap-4'>
                    <span className='text-[#D4AF37] hover:cursor-pointer' onClick={() => router.push('/shop')}>
                        KT_BALANCE: 0.00 [ TOP_UP ]
                    </span>
                    <span className='text-zinc-500'>| PROGRESS: 0%</span>
                </div>
            </footer>

            <style jsx>{`
                .scanline {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.3), transparent);
                    animation: scan 6s linear infinite;
                }
                @keyframes scan {
                    0% { top: -2px; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100vh; opacity: 0; }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(212, 175, 55, 0.3);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(212, 175, 55, 0.5);
                }
            `}</style>
        </div>
    )
}