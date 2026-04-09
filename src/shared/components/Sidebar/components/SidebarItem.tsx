interface Props {
  label: string
  isActive?: boolean
  onClick: () => void
  icon?: string
}

export const SidebarItem = ({ label, isActive, onClick, icon }: Props) => {

  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`
        flex items-center gap-1 w-full px-8 py-1 rounded-l-xl transition-all duration-200
        ${isActive
            ? 'font-bold'
            : 'hover:font-bold'} 
            cursor-pointer
      `}
      >
        <img src={icon} alt={label} className="w-12 h-12" />
        <span className="text-[17px]">{label}</span>
      </button>
    </div >
  )
}
