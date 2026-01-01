'use client'

import { useRouter } from 'next/navigation'

export default function ShopPage() {
    const router = useRouter()

    const bundles = [
        { id: 'soldat', name: 'Soldat Pack', kt: 500, price: 99, desc: 'Starter KT injection' },
        { id: 'commander', name: 'Commander Bundle', kt: 3000, price: 499, desc: 'Unlock 1 Archetype Instantly' },
        { id: 'kaiser', name: 'Kaiser Sovereignty', kt: 10000, price: 999, desc: 'Lifetime Access + All Heroes' },
    ]

    const handlePayment = (amount) => {
        const upiId = "YOUR_ID@okicici" // REPLACE WITH YOUR ACTUAL UPI ID
        const name = "Kaesar Reich"
        const url = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`

        // Redirects to GPay/PhonePe on Mobile
        window.location.href = url
    }

    return (
        <div className='min-h-screen bg-black p-8 text-white md:p-20 witan-container'>
            <div className='scanline' />

            <header className='mb-16 border-b border-[#D4AF37] pb-6'>
                <h1 className='font-bleach text-4xl text-[#D4AF37]'>The Geld Pouch</h1>
                <p className='font-mono text-[10px] uppercase tracking-widest text-zinc-500'>Convert Currency into Power</p>
            </header>

            <div className='grid gap-8 md:grid-cols-3'>
                {bundles.map((bundle) => (
                    <div key={bundle.id} className='group relative border border-zinc-800 bg-zinc-900/10 p-8 transition-all hover:border-[#D4AF37]'>
                        <div className='mb-8'>
                            <h2 className='font-bleach text-2xl text-[#D4AF37]'>{bundle.name}</h2>
                            <p className='mt-2 font-mono text-xs text-zinc-400'>{bundle.desc}</p>
                        </div>

                        <div className='mb-10'>
                            <div className='text-4xl font-black text-white'>₹{bundle.price}</div>
                            <div className='font-mono text-[10px] text-[#D4AF37]'>+ {bundle.kt} KT TOKENS</div>
                        </div>

                        <button
                            onClick={() => handlePayment(bundle.price)}
                            className='btn-reich w-full'
                        >
                            Acquire Geld
                        </button>

                        {/* Subtle Glitch Decoration */}
                        <div className='absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 font-mono text-[8px] text-[#D4AF37]'>
                            SECURE_LINK_ENCRYPTED
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => router.back()}
                className='mt-12 font-mono text-[10px] uppercase text-zinc-500 hover:text-[#D4AF37]'
            >
                [ Return to Witan ]
            </button>
        </div>
    )
}