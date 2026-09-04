import type { Exercise, MuscleGroup } from '../types'

export const MUSCLE_LABELS: Record<MuscleGroup, string> = {
  back: 'גב',
  arms: 'ידיים',
  legs: 'רגליים',
  chest: 'חזה',
  abs: 'בטן',
  shoulders: 'כתפיים',
}

export const MUSCLE_FILTERS: Array<{ id: MuscleGroup | 'all'; label: string }> = [
  { id: 'all', label: 'הכל' },
  { id: 'back', label: 'גב' },
  { id: 'chest', label: 'חזה' },
  { id: 'legs', label: 'רגליים' },
  { id: 'arms', label: 'ידיים' },
  { id: 'shoulders', label: 'כתפיים' },
  { id: 'abs', label: 'בטן' },
]

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

export const EXERCISES: Exercise[] = [
  {
    id: 'lat-pulldown',
    name: 'פולי עליון',
    hint: 'משיכה מלמעלה לחזה',
    muscle: 'back',
    image: pexels(18060085),
    imageFallback: unsplash('photo-1534872724459-3a23213491fc'),
    imageFit: 'cover',
  },
  {
    id: 'seated-row',
    name: 'פולי חתירה',
    hint: 'חתירה בישיבה מול הפולי',
    muscle: 'back',
    image: pexels(3253498),
    imageFallback: pexels(4162482),
    imageFit: 'cover',
  },
  {
    id: 'tricep-pushdown',
    name: 'יד אחורית בפולי',
    hint: 'פשיטת מרפקים למטה',
    muscle: 'arms',
    image: pexels(29218854),
    imageFallback: pexels(29084391),
    imageFit: 'cover',
  },
  {
    id: 'bicep-cable',
    name: 'יד קדמית בפולי',
    hint: 'כפיפת מרפקים מהפולי התחתון',
    muscle: 'arms',
    image: pexels(1480520),
    imageFallback: pexels(31818704),
    imageFit: 'cover',
  },
  {
    id: 'leg-extension',
    name: '4 ראשי ישיבה',
    hint: 'הארכת ברכיים בישיבה',
    muscle: 'legs',
    image: pexels(28731788),
    imageFallback: pexels(9152547),
    imageFit: 'cover',
  },
  {
    id: 'lying-legs',
    name: '4 ראשי שכיבה',
    hint: 'מכונת רגליים בשכיבה',
    muscle: 'legs',
    image: 'https://www.tevabari.co.il/images/article-new/361134620.jpg',
    imageFallback: pexels(28731788),
    imageFit: 'cover',
  },
  {
    id: 'smith-chest',
    name: "חזה סמית'",
    hint: 'לחיצת חזה במכונת סמית׳',
    muscle: 'chest',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Smith_machine.webp/960px-Smith_machine.webp',
    imageFallback: pexels(34100808),
    imageFit: 'cover',
  },
  {
    id: 'dumbbell-chest',
    name: 'חזה דאמבלס',
    hint: 'לחיצת חזה עם משקולות יד',
    muscle: 'chest',
    image: pexels(29526383),
    imageFallback: unsplash('photo-1571019614242-c5c5dee9f50b'),
    imageFit: 'cover',
  },
  {
    id: 'seated-fly',
    name: 'פולי פלייס',
    hint: 'פתיחת ידיים בפולי לחזה',
    muscle: 'chest',
    image: 'https://i.ytimg.com/vi/Vgppg2kbPPU/maxresdefault.jpg',
    imageFallback: pexels(14616295),
    imageFit: 'cover',
  },
  {
    id: 'bosu-abs',
    name: 'בטן על בוסו',
    hint: 'כפיפות בטן על כדור בוסו',
    muscle: 'abs',
    image:
      'https://totalfitness.co.il/wp-content/uploads/2020/11/Inkedproducts1707_LI-430x430.jpg',
    imageFallback:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Half_ab_ball_or_BOSU_Ball.webp/960px-Half_ab_ball_or_BOSU_Ball.webp',
    imageFit: 'cover',
  },
  {
    id: 'smith-shoulders',
    name: "כתפיים בעמידה סמית'",
    hint: 'לחיצת כתפיים בעמידה בסמית׳',
    muscle: 'shoulders',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Smith_machine.webp/960px-Smith_machine.webp',
    imageFallback: pexels(7289236),
    imageFit: 'cover',
  },
  {
    id: 'tbar-row',
    name: 'חתירה טי בר',
    hint: 'רוכנים קדימה ומושכים מלמטה למעלה',
    muscle: 'back',
    image:
      'https://totalfitness.co.il/wp-content/uploads/2021/04/tb61-%EF%BC%8824.5965_result-430x430.jpg',
    imageFallback: unsplash('photo-1603287681836-b174ce5074c2'),
    imageFit: 'cover',
  },
]

export const getExercise = (id: string) => EXERCISES.find((item) => item.id === id)
