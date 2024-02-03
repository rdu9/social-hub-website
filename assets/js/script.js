function updateTime() {
  const format = 'ro-RO'
  const timeZone = 'Europe/Bucharest'
  const date = new Date()
  const hour = date
    .toLocaleTimeString(format, { timeZone: timeZone, hour: '2-digit' })
    .padStart(2, '0')
  const minute = date
    .toLocaleTimeString(format, { timeZone: timeZone, minute: '2-digit' })
    .padStart(2, '0')

  const hourElement = document.getElementById('hour')
  const minuteElement = document.getElementById('minute')
  const timeZoneElement = document.getElementById('timezone')

  hourElement.innerText = hour
  minuteElement.innerText = minute
  timeZoneElement.setAttribute('title', timeZone)
}

updateTime()
setInterval(() => {
  updateTime()
}, 1000)
