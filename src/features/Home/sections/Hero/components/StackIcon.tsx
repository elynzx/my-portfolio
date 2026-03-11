import type { ReactNode } from 'react'

interface Props {
  icon: ReactNode;
}

export const StackIcon = ({ icon
}: Props) => {
  return (
    <div className="text-darkPink">
      <span className="text-xl md:text-4xl">{icon}</span>
    </div>
  )
}

