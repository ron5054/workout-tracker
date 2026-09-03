import { ArrowRight, Trash2 } from 'lucide-react'
import { formatDateTime, formatWeight } from '../lib/dates'
import { MUSCLE_LABELS } from '../data/exercises'
import type { Exercise, WorkoutLog } from '../types'
import { LogForm } from './LogForm'
import { MachineImage } from './MachineImage'
import { Button } from './ui/button'

type ExerciseDetailProps = {
  exercise: Exercise
  logs: WorkoutLog[]
  onBack: () => void
  onAdd: (values: { weight: number; reps: number; sets: number }) => void
  onRemove: (id: string) => void
}

export const ExerciseDetail = ({
  exercise,
  logs,
  onBack,
  onAdd,
  onRemove,
}: ExerciseDetailProps) => {
  const last = logs[0]

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 pb-10">
      <div className="flex items-center justify-between gap-3">
        <Button variant="ghost" onClick={onBack} className="px-2">
          <ArrowRight />
          חזרה למכונות
        </Button>
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
          {MUSCLE_LABELS[exercise.muscle]}
        </span>
      </div>

      <MachineImage
        exercise={exercise}
        className="aspect-[16/10] w-full rounded-3xl border border-zinc-800"
      />

      <header className="space-y-1">
        <h1 className="text-3xl font-black text-zinc-50">{exercise.name}</h1>
        <p className="text-zinc-400">{exercise.hint}</p>
        {last ? (
          <p className="pt-2 text-4xl font-black text-lime-300">{formatWeight(last.weight)}</p>
        ) : (
          <p className="pt-2 text-zinc-400">עדיין אין משקל אחרון. תרשום את הסט הראשון.</p>
        )}
      </header>

      <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-4">
        <h2 className="mb-4 text-base font-bold">רישום אימון</h2>
        <LogForm
          key={last?.id ?? exercise.id}
          lastWeight={last?.weight}
          lastReps={last?.reps}
          lastSets={last?.sets}
          onSubmit={onAdd}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-bold">היסטוריה</h2>
        {logs.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-zinc-700 px-4 py-6 text-center text-sm text-zinc-400">
            אין עדיין היסטוריה למכשיר הזה. אחרי הסט הראשון יופיעו כאן כל הרישומים.
          </p>
        ) : (
          <ul className="space-y-2">
            {logs.map((log, index) => {
              const older = logs[index + 1]
              const delta = older ? log.weight - older.weight : 0
              return (
                <li
                  key={log.id}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3"
                >
                  <div>
                    <p className="text-lg font-bold text-zinc-50">{formatWeight(log.weight)}</p>
                    <p className="text-sm text-zinc-400">
                      {log.sets} סטים × {log.reps} חזרות · {formatDateTime(log.at)}
                    </p>
                    {older && delta !== 0 && (
                      <p className={`text-xs ${delta > 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                        {delta > 0 ? '+' : ''}
                        {formatWeight(delta)} מהפעם הקודמת
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemove(log.id)}
                    aria-label="מחיקת רישום"
                  >
                    <Trash2 className="text-zinc-400" />
                  </Button>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}
