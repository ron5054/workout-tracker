import { ArrowDownRight, ArrowUpRight, Minus, Plus } from 'lucide-react'
import { formatRelative, formatWeight } from '../lib/dates'
import { MUSCLE_LABELS } from '../data/exercises'
import type { Exercise, WorkoutLog } from '../types'
import { MachineImage } from './MachineImage'
import { Button } from './ui/button'

type ExerciseCardProps = {
  exercise: Exercise
  last?: WorkoutLog
  previous?: WorkoutLog
  onOpen: () => void
  onQuickLog: () => void
}

export const ExerciseCard = ({
  exercise,
  last,
  previous,
  onOpen,
  onQuickLog,
}: ExerciseCardProps) => {
  const delta = last && previous ? last.weight - previous.weight : 0
  const TrendIcon = delta > 0 ? ArrowUpRight : delta < 0 ? ArrowDownRight : Minus

  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-lg shadow-black/20">
      <button
        type="button"
        onClick={onOpen}
        className="block w-full touch-manipulation text-right active:bg-zinc-800/40"
      >
        <MachineImage exercise={exercise} className="aspect-[16/10] w-full sm:aspect-[4/3]" />
        <div className="space-y-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium tracking-wide text-lime-300/90">
                {MUSCLE_LABELS[exercise.muscle]}
              </p>
              <h2 className="text-lg font-bold text-zinc-50">{exercise.name}</h2>
              <p className="text-sm text-zinc-400">{exercise.hint}</p>
            </div>
          </div>
          {last ? (
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[1.75rem] leading-none font-black tracking-tight text-lime-300 sm:text-3xl">
                  {formatWeight(last.weight)}
                </p>
                <p className="text-xs text-zinc-400">
                  {last.sets}×{last.reps} · {formatRelative(last.at)}
                </p>
              </div>
              {previous && (
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                    delta > 0
                      ? 'bg-emerald-500/15 text-emerald-300'
                      : delta < 0
                        ? 'bg-rose-500/15 text-rose-300'
                        : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  <TrendIcon className="size-3.5" />
                  {delta === 0 ? 'אותו משקל' : formatWeight(Math.abs(delta))}
                </span>
              )}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-zinc-700 px-3 py-3 text-sm text-zinc-400">
              עדיין לא נרשם משקל במכשיר הזה
            </p>
          )}
        </div>
      </button>
      <div className="px-4 pb-4">
        <Button className="w-full" onClick={onQuickLog}>
          <Plus />
          רישום מהיר
        </Button>
      </div>
    </article>
  )
}
