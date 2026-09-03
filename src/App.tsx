import { Dumbbell } from 'lucide-react'
import { useMemo, useState } from 'react'
import { EXERCISES, MUSCLE_FILTERS } from './data/exercises'
import { useLogs } from './hooks/useLogs'
import { ExerciseCard } from './components/ExerciseCard'
import { ExerciseDetail } from './components/ExerciseDetail'
import { LogForm } from './components/LogForm'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './components/ui/dialog'
import type { MuscleGroup } from './types'

export const App = () => {
  const { addLog, removeLog, lastLog, previousLog, logsByExercise, todayCount } = useLogs()
  const [filter, setFilter] = useState<MuscleGroup | 'all'>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [quickId, setQuickId] = useState<string | null>(null)

  const selected = EXERCISES.find((item) => item.id === selectedId)
  const quick = EXERCISES.find((item) => item.id === quickId)

  const visible = useMemo(
    () => (filter === 'all' ? EXERCISES : EXERCISES.filter((item) => item.muscle === filter)),
    [filter],
  )

  if (selected) {
    return (
      <main className="min-h-dvh px-4 py-5">
        <ExerciseDetail
          exercise={selected}
          logs={logsByExercise(selected.id)}
          onBack={() => setSelectedId(null)}
          onAdd={(values) => addLog({ exerciseId: selected.id, ...values })}
          onRemove={removeLog}
        />
      </main>
    )
  }

  return (
    <main className="min-h-dvh px-4 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-xs font-semibold text-lime-300">
              <Dumbbell className="size-3.5" />
              שמירה מקומית במכשיר
            </div>
            <h1 className="text-4xl font-black tracking-tight text-zinc-50">המכונות שלי</h1>
            <p className="max-w-xl text-zinc-400">
              תמונת המכשיר והמשקל האחרון שעשית. הכל נשמר בטלפון, בלי חשבון ובלי ענן.
            </p>
          </div>
          <p className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
            {todayCount === 0
              ? 'היום עוד לא נרשם אימון'
              : `היום נרשמו ${todayCount} מכשירים`}
          </p>
        </header>

        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {MUSCLE_FILTERS.map((item) => (
            <Button
              key={item.id}
              size="sm"
              variant={filter === item.id ? 'default' : 'secondary'}
              onClick={() => setFilter(item.id)}
              className="shrink-0"
            >
              {item.label}
            </Button>
          ))}
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              last={lastLog(exercise.id)}
              previous={previousLog(exercise.id)}
              onOpen={() => setSelectedId(exercise.id)}
              onQuickLog={() => setQuickId(exercise.id)}
            />
          ))}
        </section>
      </div>

      <Dialog open={Boolean(quick)} onOpenChange={(open) => !open && setQuickId(null)}>
        {quick && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{quick.name}</DialogTitle>
              <DialogDescription>
                {lastLog(quick.id)
                  ? `המשקל האחרון: ${lastLog(quick.id)?.weight} ק״ג`
                  : 'אין עדיין משקל אחרון. אפשר להתחיל מכאן.'}
              </DialogDescription>
            </DialogHeader>
            <LogForm
              key={lastLog(quick.id)?.id ?? quick.id}
              lastWeight={lastLog(quick.id)?.weight}
              lastReps={lastLog(quick.id)?.reps}
              lastSets={lastLog(quick.id)?.sets}
              submitLabel="שמירה וסגירה"
              onSubmit={(values) => {
                addLog({ exerciseId: quick.id, ...values })
                setQuickId(null)
              }}
            />
          </DialogContent>
        )}
      </Dialog>
    </main>
  )
}

export default App
