'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { MyCoolCodeBlock } from './code_block'
import { User, Database, Plus, Rocket } from 'lucide-react'

export default function Features() {
    const demoCode1 = `#! pip install memobase
from memobase import MemoBaseClient

# Backend will give you project url and access token
client = MemoBaseClient(
  project_url="<YOUR_RPOJECT_URL>", 
  api_key="<YOUR_ACCESS_TOKEN>"
)`
    const demoCode2 = `# Bind any data to a user
user_id = client.add_user({
    "age": 25, 
    "name": "Fool"
})

client.update_user(user_id, {
    "age": 30, 
    "name": "New Name"
})

print(client.get_user(user_id))    

client.delete_user(user_id)`
    const demoCode3 = `from memobase import DocBlob

user = client.user(user_id)

# Insert
blob = DocBlob(
    content="Why I love MemoBase💓...", 
    fields={"from": "note"}
)
blob_id = user.insert(blob)
print(user.get(blob_id))

# Query
hit_blobs = user.query("Should I use MemoBase?")
print(hit_blobs)
`
    const demoCode4 = `from memobase import (
    DocBlob, 
    ChatBlob, 
    ImageBlob, 
    TranscriptBlob
)
`
    const [tab, setTab] = useState<number>(1)

    const tabs = useRef<HTMLDivElement>(null)

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])


    return (
        <section>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 text-4xl mb-4">Explore the SDKs</h1>
                        <p className="text-xl text-gray-600">MemoBase offers easy-to-use SDKs for building applications</p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5" data-aos="fade-right">

                            <div className="mb-8 md:mb-0">
                                <Link
                                    className={`flex justify-between items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-background shadow-md  hover:shadow-lg hover:border-gray-200' : 'bg-secondary border-transparent border-gray-200'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1 text-primary">Connect to a MemoBase Project</div>
                                        <div className="text-primary/50 text-sm">You can self-host or use our <Link href="/pricing" className='underline'>cloud-based</Link> platform to create your MemoBase backend.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-secondary rounded-full flex-shrink-0 ml-3">
                                        <Database />
                                    </div>
                                </Link>

                                <Link
                                    className={`flex justify-between items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-background shadow-md  hover:shadow-lg hover:border-gray-200' : 'bg-secondary border-transparent border-gray-200'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(2); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1 text-primary">Manage Users</div>
                                        <div className="text-primary/50 text-sm">Create, update and delete users</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-secondary rounded-full flex-shrink-0 ml-3">
                                        <User />
                                    </div>
                                </Link>
                                <Link
                                    className={`flex justify-between items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-background shadow-md  hover:shadow-lg hover:border-gray-200' : 'bg-secondary border-transparent border-gray-200'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(3); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1 text-primary">Insert and Query User Memory</div>
                                        <div className="text-primary/50 text-sm">Insert data to a user, and retrieve the memory</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-secondary rounded-full flex-shrink-0 ml-3">
                                        <Plus />
                                    </div>
                                </Link>
                                <Link
                                    className={`flex justify-between items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-background shadow-md  hover:shadow-lg hover:border-gray-200' : 'bg-secondary border-transparent border-gray-200'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(4); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1 text-primary">Multi-modal Memory</div>
                                        <div className="text-primary/50 text-sm">MemoBase recognizes different types of memory, and optimizes separately.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-secondary rounded-full flex-shrink-0 ml-3">
                                        <Rocket />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div className="max-w-sm md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-7 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <MyCoolCodeBlock showLineNumbers={false} code={demoCode1} className='text-start rounded-lg font-mono text-sm font-semibold' />
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <MyCoolCodeBlock showLineNumbers={false} code={demoCode2} className='text-start rounded-lg font-mono text-sm font-semibold' />
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <MyCoolCodeBlock showLineNumbers={false} code={demoCode3} className='text-start rounded-lg font-mono text-sm font-semibold' />
                                    </div>
                                </Transition>
                                {/* Item 4 */}
                                <Transition
                                    show={tab === 4}
                                    appear={true}
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <MyCoolCodeBlock showLineNumbers={false} code={demoCode4} className='text-start rounded-lg font-mono text-sm font-semibold' />
                                    </div>
                                </Transition>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}