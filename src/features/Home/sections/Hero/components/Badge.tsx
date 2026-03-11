import type {ReactNode} from 'react'

interface Props {
  text: string;
  icon: ReactNode;
}

export const Badge = ({ text, icon
}: Props) => {
  return (
    <div className="flex items-center text-xs gap-2 justify-center bg-darkPink/20 text-center font-title px-3 py-1 rounded-full md:text-2xl md:mb-4 ">
      <div className="text-lg">{icon}</div><p>{text}</p>
    </div>
  )
}