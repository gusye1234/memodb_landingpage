'use client'

import { X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Banner() {

    const [bannerOpen, setBannerOpen] = useState<boolean>(true)

    return (
        <>
            {bannerOpen && (
                <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
                    <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-start">
                        <span>MemoBase is on active development, join the&nbsp;</span>
                        <Link className='underline text-green-500 hover:text-green-700' href='#newsletter'>waitlist</Link>.
                        <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
                            <span className="sr-only">Close</span>
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}