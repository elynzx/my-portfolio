interface Props {
  text: string;
}

export const Badge = ({ text
}: Props) => {
  return (
    <div className="text-darkPink text-center bg-darkPink/10 text-xs font-title border border-darkPink/70 px-3 py-1 rounded-full md:text-2xl md:mb-4 ">
      <p>{text}</p>
    </div>
  )
}