const rtf = new Intl.RelativeTimeFormat('he', { numeric: 'auto' })

export const formatDateTime = (iso: string) =>
  new Intl.DateTimeFormat('he-IL', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))

export const formatRelative = (iso: string) => {
  const then = new Date(iso).getTime()
  const now = Date.now()
  const diffMin = Math.round((then - now) / 60000)
  const abs = Math.abs(diffMin)
  if (abs < 60) return rtf.format(diffMin, 'minute')
  const diffHour = Math.round(diffMin / 60)
  if (Math.abs(diffHour) < 24) return rtf.format(diffHour, 'hour')
  const diffDay = Math.round(diffHour / 24)
  if (Math.abs(diffDay) < 30) return rtf.format(diffDay, 'day')
  const diffMonth = Math.round(diffDay / 30)
  return rtf.format(diffMonth, 'month')
}

export const isSameLocalDay = (iso: string, date = new Date()) => {
  const value = new Date(iso)
  return (
    value.getFullYear() === date.getFullYear() &&
    value.getMonth() === date.getMonth() &&
    value.getDate() === date.getDate()
  )
}

export const formatWeight = (weight: number) => {
  const formatted = Number.isInteger(weight) ? String(weight) : weight.toFixed(1)
  return `${formatted} ק״ג`
}
