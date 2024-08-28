'use client' // This is a client component 👈🏽

import Image from 'next/image'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Loader2 } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { getMessageFromCode } from '@/lib/utils'
import { toast } from 'sonner'
import { appendEmail } from './waitlist_action'
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover'

export default function Newsletter() {
    const [done, setDone] = useState(false)
    const [result, dispatch] = useFormState(appendEmail, undefined)
    const [imageLoading, onImageLoading] = useState(true)
    // Append Function
    useEffect(() => {
        if (result) {
            if (result.type === 'error') {
                toast.error(getMessageFromCode(result.resultCode))
            } else {
                toast.success(getMessageFromCode(result.resultCode))
                setDone(true)
            }
        }
    }, [result])
    return (
        <section id="newsletter">
            <div className="max-w-4xl mb-80 md:mb-64 mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-1">
                <div className="grow py-12 md:py-20">
                    {/* CTA box */}
                    <div
                        className="relative border bg-background rounded-lg py-8 px-8 md:py-12 md:px-12 shadow-md overflow-hidden"
                        data-aos="zoom-y-out"
                    >
                        <div className="relative flex flex-col md:flex-row justify-between items-center">
                            {/* CTA content */}
                            <div className="grow text-center lg:text-left lg:max-w-xl">
                                <h3 className="text-2xl font-semibold text-foreground mb-2">
                                    🚀 Join to make a better LLM app
                                </h3>
                                <p className="text-foreground/50 text-lg mb-6">
                                    Leave your email, we will send you the latest updates.
                                    <br />
                                    No spam, we promise.
                                </p>

                                {/* CTA form */}
                                <form className="w-full lg:w-auto" action={dispatch}>
                                    {done ? (
                                        <p className="text-sm text-gray-400 mt-3">Thanks for your interest!</p>
                                    ) : (
                                        <div className="flex flex-col gap-4 sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                                            <div className="flex flex-row gap-2 justify-start items-center w-full">
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="email"
                                                    aria-label="Your email…"
                                                    required
                                                />
                                                <SubmitButton />
                                            </div>
                                            {/* <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="default" type="button">
                                                        扫码加群
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-64 h-96 flex justify-center items-center">
                                                    {imageLoading && <Loader2 className="animate-spin" />}
                                                    <Image
                                                        fill
                                                        src="/wechat_qr.jpg"
                                                        alt="qr_code"
                                                        className="min-h-full rounded-md border-2"
                                                        onLoadingComplete={() => onImageLoading(false)}
                                                        priority
                                                    />
                                                </PopoverContent>
                                            </Popover> */}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjvfZvnsb4jmiLwFEkeWRxcjqbPfOE35Xad-xgXikcznW2Bw/viewform?embedded=true" width="840" height="682" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>           */}
            </div>
        </section>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            variant="outline"
            type="submit"
            disabled={pending}
            aria-disabled={pending}
        >
            {pending ? <Loader2 className="animate-spin" /> : 'Submit'}
        </Button>
    )
}
