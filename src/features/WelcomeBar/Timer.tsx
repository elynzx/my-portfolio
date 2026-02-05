import { useState, useEffect } from 'react'

export const Timer = () => {

  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hour = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const day = String(dateTime.getDate()).padStart(2, '0')
  const month = String(dateTime.getMonth() + 1).padStart(2, '0')
  const year = dateTime.getFullYear()
  const date = `${day} . ${month} . ${year}`

  return (
    <>
      <span className="font-semibold text-[15px] px-2">{hour}</span> - <span className="ml-2">{date}</span>
    </>
  )
}
