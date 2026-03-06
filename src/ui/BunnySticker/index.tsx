import { useState, useEffect } from 'react'
import bunny1 from '@/assets/Decoration/bunny01.svg'
import bunny2 from '@/assets/Decoration/bunny02.svg'

export const BunnySticker = () => {
  const [isFirstFrame, setIsFirstFrame] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstFrame((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <img
      src={isFirstFrame ? bunny1 : bunny2}
      alt="Animated bunny"
      className="w-42 h-42 absolute -top-20 -left-30 z-50 pointer-events-none"
    />
  )
}
