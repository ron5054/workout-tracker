import { Dumbbell } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/utils'
import type { Exercise } from '../types'

type MachineImageProps = {
  exercise: Exercise
  className?: string
  sizes?: string
}

export const MachineImage = ({ exercise, className, sizes }: MachineImageProps) => {
  const sources = [exercise.image, exercise.imageFallback].filter(
    (value): value is string => Boolean(value),
  )
  const [srcIndex, setSrcIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const src = sources[srcIndex]
  const failed = !src

  if (failed) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-zinc-800 text-zinc-500',
          className,
        )}
      >
        <Dumbbell className="size-10" />
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden bg-zinc-800', className)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-zinc-800" />}
      <img
        key={src}
        src={src}
        alt={exercise.name}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(false)
          setSrcIndex((index) => index + 1)
        }}
        className={cn(
          'h-full w-full transition-opacity duration-300',
          exercise.imageFit === 'contain' ? 'object-contain bg-zinc-100 p-4' : 'object-cover',
          loaded ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  )
}
