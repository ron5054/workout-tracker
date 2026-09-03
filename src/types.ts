export type MuscleGroup = 'back' | 'arms' | 'legs' | 'chest' | 'abs' | 'shoulders'

export type Exercise = {
  id: string
  name: string
  hint: string
  muscle: MuscleGroup
  image: string
  imageFit: 'cover' | 'contain'
}

export type WorkoutLog = {
  id: string
  exerciseId: string
  weight: number
  reps: number
  sets: number
  at: string
}

export type StoredState = {
  version: 1
  logs: WorkoutLog[]
}
