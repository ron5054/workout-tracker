import type { InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, type = 'text', ...props }: InputProps) => (
  <input
    type={type}
    className={cn(
      'flex h-12 w-full min-w-0 rounded-xl border border-zinc-700 bg-zinc-900 px-3 text-base text-zinc-50 shadow-sm transition-colors [font-size:16px] placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/70 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  />
)
