import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from './external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'mt-[512px] md:mt-32 px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Built by <ExternalLink href="https://memodb.io">memodb.io</ExternalLink>
    </p>
  )
}
