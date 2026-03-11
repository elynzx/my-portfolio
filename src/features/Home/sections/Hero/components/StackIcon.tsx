import type { ReactNode } from 'react'

interface Props {
  icon: ReactNode;
}

export const StackIcon = ({ icon
}: Props) => {
  return (
    <div className="text-darkPink transition-transform duration-300 hover:scale-110">
      <span className="text-xl md:text-4xl ">{icon}</span>
    </div>
  )
}

