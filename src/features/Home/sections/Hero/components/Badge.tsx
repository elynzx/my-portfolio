interface Props {
  text: string;
}

export const Badge = ({ text
}: Props) => {
  return (
    <div className="font-title font-bold border px-3 rounded-full md:text-2xl md:mb-4 ">
      <p>{text}</p>
    </div>
  )
}