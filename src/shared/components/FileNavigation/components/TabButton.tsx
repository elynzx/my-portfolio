
import { cn } from '@/utils/cn'

interface Props {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

/**
 * Tab button for file navigation
 */
export const TabButton = ({ label, isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(

        // Mobile
        "text-DeepGray tracking-tighter flex items-center justify-center h-30 w-7 rounded-r-md cursor-pointer border border-gray-200/50 border-r-0",

        // Desktop
        'md:w-58 md:h-14 md:rounded-t-2xl md:rounded-b-none md:border-b-0',

        // Active state
        isActive
          ? 'bg-gray-300/10 border-r-0 -mr-px text-white shadow-[0_0_5px_0_#000000] md:-mb-px md:border-b-0 md:shadow-[0_2px_0_0_#715061]'
          : 'bg-bgLightGray mr-0 shadow-none md:mb-0',

        // Hover
        ' hover:bg-gray-300/10 hover:text-white hover:border-r-0 md:hover:border-b-0 hover:tracking-widest transition-all duration-150'
      )}
    >
      <span className="rotate-90 md:rotate-0 text-[10px] md:text-[15px] font-title font-semibold uppercase ">{label}</span>
    </button>
  );
}