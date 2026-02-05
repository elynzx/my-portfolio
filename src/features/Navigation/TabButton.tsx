interface Props {
  label: string
  isActive?: boolean
  onClick: () => void
}

export const TabButton = ({ label, isActive, onClick }
  : Props) => {

  return (
    <button
      onClick={onClick}
      className={[
        'flex items-center text-xs justify-center w-44 h-12 rounded-t-xl cursor-pointer border border-lightGray border-b-bgPink z-60',
        isActive ? 'bg-white border-b-white' : 'bg-bgPink',
        'hover:bg-white hover:border-b-white transition-all duration-150',
      ].join(' ')}
      style={{
        marginBottom: isActive ? '-1px' : '0',
        boxShadow: isActive ? '0 2px 0 0 #fff' : 'none',
      }}
    >
      {label}
    </button>
  )
}

