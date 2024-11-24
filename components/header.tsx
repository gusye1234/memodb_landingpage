'use client'
import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'
import { Button, buttonVariants } from './ui/button'
import { Github, Menu, X } from 'lucide-react'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-1'>
        <Link href="https://docs.memobase.io" className={buttonVariants({
          variant: 'ghost',
          className: 'font-semibold'
        })}>
          Docs
        </Link>
        <Link href="/pricing" className={buttonVariants({
          variant: 'ghost',
          className: 'font-semibold'
        })}>
          Pricing
        </Link>
        <Link href="https://github.com/memodb-io" className={buttonVariants({
          variant: 'ghost',
          size: 'icon',
        })}>
          <Github />
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className='flex items-center gap-1 md:hidden'>
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 right-0 bg-background border-b md:hidden"
        >
          <div className="flex flex-col p-4 space-y-3">
            <Link
              href="https://docs.memobase.io"
              className={buttonVariants({
                variant: 'ghost',
                className: 'w-full justify-start font-semibold'
              })}
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: 'ghost',
                className: 'w-full justify-start font-semibold'
              })}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="https://github.com/memodb-io"
              className={buttonVariants({
                variant: 'ghost',
                className: 'w-full justify-start'
              })}
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
