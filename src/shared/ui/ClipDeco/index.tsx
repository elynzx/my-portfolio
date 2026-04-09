import PaperClip from '@/assets/stickers/paperClip.png'

export const ClipDeco = () => {

  return (
    <img
      src={PaperClip}
      alt="Animated paper clip"
      className="w-35 h-35 pointer-events-none absolute z-50 -right-12 -top-10 jello-horizontal"
    />
  )
}
