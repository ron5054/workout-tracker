import { useCallback, useMemo, useState } from 'react'
import { createId, loadLogs, saveLogs } from '../lib/storage'
import { isSameLocalDay } from '../lib/dates'
import type { WorkoutLog } from '../types'

export const useLogs = () => {
  const [logs, setLogs] = useState<WorkoutLog[]>(() => loadLogs())

  const persist = useCallback((next: WorkoutLog[]) => {
    setLogs(next)
    saveLogs(next)
  }, [])

  const addLog = useCallback(
    (input: Omit<WorkoutLog, 'id' | 'at'> & { at?: string }) => {
      const entry: WorkoutLog = {
        id: createId(),
        exerciseId: input.exerciseId,
        weight: input.weight,
        reps: input.reps,
        sets: input.sets,
        at: input.at ?? new Date().toISOString(),
      }
      persist([entry, ...logs])
      return entry
    },
    [logs, persist],
  )

  const removeLog = useCallback(
    (id: string) => {
      persist(logs.filter((log) => log.id !== id))
    },
    [logs, persist],
  )

  const logsByExercise = useCallback(
    (exerciseId: string) =>
      logs
        .filter((log) => log.exerciseId === exerciseId)
        .sort((a, b) => (a.at < b.at ? 1 : -1)),
    [logs],
  )

  const lastLog = useCallback(
    (exerciseId: string) => logsByExercise(exerciseId)[0],
    [logsByExercise],
  )

  const previousLog = useCallback(
    (exerciseId: string) => logsByExercise(exerciseId)[1],
    [logsByExercise],
  )

  const todayCount = useMemo(() => {
    const seen = new Set<string>()
    for (const log of logs) {
      if (isSameLocalDay(log.at)) seen.add(log.exerciseId)
    }
    return seen.size
  }, [logs])

  return { logs, addLog, removeLog, logsByExercise, lastLog, previousLog, todayCount }
}
