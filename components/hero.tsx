'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import AddonRead from './addon_read'
import { MyCoolCodeBlock } from './code_block'

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false)
    const demoCode = `u = client.get_user(id)
print(u.profile())

# Output:
[
    UserProfile("basic_info", "name", "Gus"),
    UserProfile("basic_info", "age", 25),
    UserProfile("basic_info", "marital", "married"),
    UserProfile("interests", "movies", "Gattaca")
    # ... and more
]
`
    // 确保组件在客户端渲染时更新状态
    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <section className="relative">

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1
                            className="text-5xl md:text-6xl mb-4"
                            data-aos="zoom-y-out"
                        >
                            <span className="text-6xl md:text-8xl bg-clip-text font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-500 to-teal-600 font-mono">
                                memobase
                            </span>
                            <br />
                            <p className="text-xl font-bold md:text-4xl">
                                Manage user profile for your LLM Apps
                            </p>
                        </h1>
                        <div className="max-w-sm md:max-w-3xl mx-auto">
                            <p
                                className="text-primary/60 text-xl font-light leading-relaxed  mb-8 text-start"
                                data-aos="zoom-y-out"
                                data-aos-delay="150"
                            >
                                MemoBase is a <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-600'>user profile</span> backend for your LLM Apps.
                                With <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-600'>few lines of code</span>,
                                you can easily maintain dynamic user profiles from {" "}
                                <AddonRead addon='various' content='chats, docs, images and transcripts...' /> types of user data.
                                So you can create truly <span className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-600'>personalized AI</span> in your App that keep users coming back.

                            </p>
                            <Link
                                className={buttonVariants({
                                    variant: 'default',
                                    className: "text-lg"
                                })}
                                href={'/#newsletter'}
                            >
                                Does your AI understand your users?
                            </Link>
                            <MyCoolCodeBlock code={demoCode} className='mt-8 text-start rounded-lg font-mono text-sm font-semibold max-w-lg mx-auto' showLineNumbers={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
