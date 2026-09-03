import type { StoredState, WorkoutLog } from '../types'

const KEY = 'gym-tracker:logs:v1'

export const loadLogs = (): WorkoutLog[] => {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as StoredState
    if (parsed.version !== 1 || !Array.isArray(parsed.logs)) return []
    return parsed.logs
  } catch {
    return []
  }
}

export const saveLogs = (logs: WorkoutLog[]) => {
  const payload: StoredState = { version: 1, logs }
  localStorage.setItem(KEY, JSON.stringify(payload))
}

export const createId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}
