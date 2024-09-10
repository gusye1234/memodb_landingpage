'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import AddonRead from './addon_read'

export default function Hero() {
    const { setTheme, theme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    // 确保组件在客户端渲染时更新状态
    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <section className="relative">
            {/* Illustration behind hero content */}
            {/* <div
                className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
                aria-hidden="true"
            >
                {isMounted && (
                    <svg
                        width="1360"
                        height="578"
                        viewBox="0 0 1360 578"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="illustration-01"
                            >
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#EAEAEA" offset="77.402%" />
                                <stop stopColor="#DFDFDF" offset="100%" />
                            </linearGradient>

                            <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="illustration-02"
                            >
                                <stop stopColor="#222" offset="0%" />
                                <stop stopColor="#888" offset="77.402%" />
                                <stop stopColor="#AAA" offset="100%" />
                            </linearGradient>
                        </defs>
                        {theme === 'dark' ? (
                            <g fill="url(#illustration-02)" fillRule="evenodd">
                                <circle cx="1232" cy="128" r="128" />
                                <circle cx="155" cy="443" r="64" />
                            </g>
                        ) : (
                            <g fill="url(#illustration-01)" fillRule="evenodd">
                                <circle cx="1232" cy="128" r="128" />
                                <circle cx="155" cy="443" r="64" />
                            </g>
                        )}
                    </svg>
                )}
            </div> */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1
                            className="text-5xl md:text-6xl mb-4"
                            data-aos="zoom-y-out"
                        >
                            <span className="bg-clip-text font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-500 to-teal-600 font-mono">
                                memobase
                            </span>
                            <br />
                            <p className="text-xl font-bold md:text-4xl">
                                Manage user memory for your LLM applications
                            </p>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p
                                className="text-primary/60 text-xl font-light leading-relaxed  mb-8 text-start"
                                data-aos="zoom-y-out"
                                data-aos-delay="150"
                            >
                                <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-600'>Say goodbye to the complexities of Search</span> {" "}
                                in <AddonRead addon="RAG" content='RAG stands for Retrieval-Augmented Generation, a method that make large corups be awared by Large Language Model and generate more stateful and factual responses.' />.
                                Store and manage{" "}
                                <AddonRead addon='various' content='For example: one-year of Chats, 6-month of blogs/podcasts' /> types of user data using{" "}
                                the <AddonRead addon='best' content='MemoBase use hybrid indexing that can handle both global and local questions.' /> algorithm{" "}
                                <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-600'>with one API token</span>.
                                All you need is to focus on <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-600'>building the best user experiences</span>.

                            </p>
                            <Link
                                className={buttonVariants({
                                    variant: 'default',
                                    className: "text-lg"
                                })}
                                href={'/#newsletter'}
                            >
                                Join the waitlist right now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
