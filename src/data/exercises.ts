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

export const EXERCISES: Exercise[] = [
  {
    id: 'lat-pulldown',
    name: 'פולי עליון',
    hint: 'משיכה מלמעלה לחזה',
    muscle: 'back',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lat_pulldown_machine_20180112.jpg/800px-Lat_pulldown_machine_20180112.jpg',
    imageFit: 'cover',
  },
  {
    id: 'seated-row',
    name: 'פולי חתירה',
    hint: 'חתירה בישיבה מול הפולי',
    muscle: 'back',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Woman_using_a_seated_cable_row_machine_at_the_gym.jpg/800px-Woman_using_a_seated_cable_row_machine_at_the_gym.jpg',
    imageFit: 'cover',
  },
  {
    id: 'tricep-pushdown',
    name: 'יד אחורית בפולי',
    hint: 'פשיטת מרפקים למטה',
    muscle: 'arms',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sz%C3%A9kesfeh%C3%A9rv%C3%A1r%2C_Cutler_Gym%2C_Combined_cable_machine.jpg/800px-Sz%C3%A9kesfeh%C3%A9rv%C3%A1r%2C_Cutler_Gym%2C_Combined_cable_machine.jpg',
    imageFit: 'cover',
  },
  {
    id: 'bicep-cable',
    name: 'יד קדמית בפולי',
    hint: 'כפיפת מרפקים מהפולי התחתון',
    muscle: 'arms',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Strong_woman_using_cable_machine_for_upper_body_workout_in_gym.jpg/800px-Strong_woman_using_cable_machine_for_upper_body_workout_in_gym.jpg',
    imageFit: 'cover',
  },
  {
    id: 'leg-extension',
    name: '4 ראשי ישיבה',
    hint: 'הארכת ברכיים בישיבה',
    muscle: 'legs',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LegExx_Regular_Leg_Extension2.jpg/800px-LegExx_Regular_Leg_Extension2.jpg',
    imageFit: 'cover',
  },
  {
    id: 'lying-legs',
    name: '4 ראשי שכיבה',
    hint: 'מכונת רגליים בשכיבה',
    muscle: 'legs',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c6/LyingLegCurlMachineExercise.JPG',
    imageFit: 'cover',
  },
  {
    id: 'smith-chest',
    name: "חזה סמית'",
    hint: 'לחיצת חזה במכונת סמית׳',
    muscle: 'chest',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/SmithMachineBenchPress.JPG',
    imageFit: 'cover',
  },
  {
    id: 'dumbbell-chest',
    name: 'חזה דאמבלס',
    hint: 'לחיצת חזה עם משקולות יד',
    muscle: 'chest',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    imageFit: 'cover',
  },
  {
    id: 'seated-fly',
    name: 'חזה פלייס ישיבה',
    hint: 'מכונת פרפר / פק-דק',
    muscle: 'chest',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pec_deck_Fly.jpg/800px-Pec_deck_Fly.jpg',
    imageFit: 'cover',
  },
  {
    id: 'bosu-abs',
    name: 'בטן על בוסו',
    hint: 'כפיפות בטן על כדור בוסו',
    muscle: 'abs',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Half_ab_ball_or_BOSU_Ball.webp/800px-Half_ab_ball_or_BOSU_Ball.webp',
    imageFit: 'cover',
  },
  {
    id: 'smith-shoulders',
    name: "כתפיים בעמידה סמית'",
    hint: 'לחיצת כתפיים בעמידה בסמית׳',
    muscle: 'shoulders',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Smith_machine.webp/800px-Smith_machine.webp',
    imageFit: 'cover',
  },
  {
    id: 'tbar-row',
    name: 'חתירת גב ברכינה',
    hint: 'רוכנים קדימה ומושכים מלמטה למעלה',
    muscle: 'back',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/T-bar-row-2.png',
    imageFit: 'contain',
  },
]

export const getExercise = (id: string) => EXERCISES.find((item) => item.id === id)
