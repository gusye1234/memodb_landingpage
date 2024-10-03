import React from "react"
import Link from "next/link"

function FeatureBlock({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="hover:scale-105 relative flex flex-col items-center h-44 sm:h-48 lg:h-56 p-6 bg-background border-2 rounded-md">
      <h2 className="font-semibold mb-4">
        <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 line-clamp-1">
          {title}
        </span>
      </h2>
      <p className="text-foreground/50 text-start">
        {children}
      </p>
    </div>
  )
}

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div> */}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Items */}
        <div className="max-w-full text-center mb-8 font-semibold text-3xl md:text-4xl">
          MemoBase is not just another RAG pipeline...
        </div>
        <div className=" max-w-sm sm:max-w-full mx-auto grid gap-2 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start lg:max-w-none">
          {/* 1st item */}
          <FeatureBlock title="🚀 Scale to million users">
            It's designed to be user-first and able to scale out. Each user's memory is managing separately.
          </FeatureBlock>
          <FeatureBlock title="🧠 AI Memory">
            It helps your App to build user memory. Create engaging experiences that keep users coming back.
          </FeatureBlock>
          <FeatureBlock title="🐙 Open source">
            It's core is open source and <Link href="https://github.com/memodb-io/memobase" className="underline">available</Link> for everyone to use/hack.
            We believe open source is the only way to keep everyone happy.
          </FeatureBlock>
          <FeatureBlock title="🪶 Multi-modal" >
            User memory can be multi-modal.
            MemoBase handles chats, docs, images, transcripts ... all in one place.
          </FeatureBlock>
          <FeatureBlock title="☁️ Built on Cloud">
            It can be self-managed, or you can use our cloud services.
            We help your memobase project to be scalable and reliable.
          </FeatureBlock>
          <FeatureBlock title="💰 Pay as you go">
            It's billing depends on how many users you have. We're on the same team to get more users for your app!
          </FeatureBlock>

          {/* 2nd item */}
        </div>
      </div>
    </section>
  )
}
