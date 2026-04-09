import PaperClip from '@/assets/stickers/paperClip.png'

export const ClipDeco = () => {

  return (
    <img
      src={PaperClip}
      alt="Animated paper clip"
      className="w-24 md:w-42 md:h-auto pointer-events-none absolute z-50 -right-6 -top-8 md:-right-12 md:-top-10 jello-horizontal"
    />
  )
}
