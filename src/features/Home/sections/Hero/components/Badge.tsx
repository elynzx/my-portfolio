import type {ReactNode} from 'react'

interface Props {
  text: string;
  icon: ReactNode;
}

export const Badge = ({ text, icon
}: Props) => {
  return (
    <div className="flex items-center justify-center text-xs gap-2 bg-darkPink/20 text-center font-title px-3 py-1 rounded-full md:text-sm md:mb-4 md:w-62 md:py-3">
      <div className="text-lg">{icon}</div><p>{text}</p>
    </div>
  )
}