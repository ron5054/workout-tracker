import { Minus, Plus } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

type LogFormProps = {
  lastWeight?: number
  lastReps?: number
  lastSets?: number
  submitLabel?: string
  onSubmit: (values: { weight: number; reps: number; sets: number }) => void
}

const bump = (value: number, delta: number) => Math.max(0, Math.round((value + delta) * 2) / 2)

export const LogForm = ({
  lastWeight,
  lastReps = 10,
  lastSets = 3,
  submitLabel = 'שמירת סט',
  onSubmit,
}: LogFormProps) => {
  const [weight, setWeight] = useState(lastWeight ?? 20)
  const [reps, setReps] = useState(lastReps)
  const [sets, setSets] = useState(lastSets)
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!Number.isFinite(weight) || weight <= 0) {
      setError('צריך משקל גדול מאפס')
      return
    }
    if (!Number.isFinite(reps) || reps < 1) {
      setError('צריך לפחות חזרה אחת')
      return
    }
    if (!Number.isFinite(sets) || sets < 1) {
      setError('צריך לפחות סט אחד')
      return
    }
    setError('')
    onSubmit({ weight, reps, sets })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="weight">משקל (ק״ג)</Label>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={() => setWeight((value) => bump(value, -2.5))}
            aria-label="הורדת 2.5 קילו"
          >
            <Minus />
          </Button>
          <Input
            id="weight"
            inputMode="decimal"
            type="number"
            step="0.5"
            min="0"
            value={Number.isFinite(weight) ? weight : ''}
            onChange={(event) => setWeight(Number(event.target.value))}
            className="text-center text-xl font-bold"
          />
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={() => setWeight((value) => bump(value, 2.5))}
            aria-label="הוספת 2.5 קילו"
          >
            <Plus />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {[2.5, 5].map((delta) => (
            <Button
              key={delta}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setWeight((value) => bump(value, delta))}
            >
              +{delta}
            </Button>
          ))}
          {lastWeight != null && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setWeight(lastWeight)}
            >
              חזרה ל-{lastWeight}
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="reps">חזרות</Label>
          <Input
            id="reps"
            inputMode="numeric"
            type="number"
            min="1"
            value={Number.isFinite(reps) ? reps : ''}
            onChange={(event) => setReps(Number(event.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sets">סטים</Label>
          <Input
            id="sets"
            inputMode="numeric"
            type="number"
            min="1"
            value={Number.isFinite(sets) ? sets : ''}
            onChange={(event) => setSets(Number(event.target.value))}
          />
        </div>
      </div>

      {error && <p className="text-sm text-rose-400">{error}</p>}

      <Button type="submit" className="w-full" size="lg">
        {submitLabel}
      </Button>
    </form>
  )
}
