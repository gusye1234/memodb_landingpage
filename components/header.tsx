import * as React from 'react'
import Link from 'next/link'


import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import { buttonVariants } from './ui/button'
import { Github } from 'lucide-react'

async function UserOrLogin() {
  return (
    <>
      <Link
        href="/"
        rel="nofollow"
        className="flex flex-row items-center mr-2"
      >
        <Image
          src="/memobase-light.svg"
          alt="logo"
          className='dark:hidden'
          width={164}
          height={128}
        />
        <Image
          src="/memobase-dark.svg"
          alt="logo"
          className='hidden dark:block'
          width={164}
          height={128}
        />
      </Link>
    </>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className='flex items-center gap-1'>
        <Link href="https://github.com/memodb-io/memobase" className={
          buttonVariants({
            variant: 'ghost',
            size: 'icon',
          })
        }>
          <Github />
        </Link>
        <ThemeToggle />
      </div>

    </header>
  )
}
