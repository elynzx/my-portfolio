import { useState, useEffect } from 'react'
import bunny1 from '@/assets/stickers/bunny01.svg'
import bunny2 from '@/assets/stickers/bunny02.svg'

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
      className="absolute w-22 h-auto -top-16 md:-top-35 md:left-20 md:w-45 md:h-auto z-20 pointer-events-none"
    />
  )
}
