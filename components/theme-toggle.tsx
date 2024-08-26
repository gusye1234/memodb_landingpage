'use client'
import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button, buttonVariants } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [_, startTransition] = React.useTransition()
  const [isMounted, setIsMounted] = React.useState(false)

  // 确保组件在客户端渲染时更新状态
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // 只有在组件挂载后才渲染内容
  if (!isMounted) {
    return null
  }
  return (
    <div
      className={buttonVariants({
        variant: 'ghost',
        size: 'icon',
      })}
      onClick={() => {
        startTransition(() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        })
      }}
    >
      {theme === 'dark' ? (
        <Moon className="transition-all" />
      ) : (
        <Sun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
