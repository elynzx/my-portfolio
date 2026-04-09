import { SidebarItem } from './components/SidebarItem'
import HeroIcon from '@/assets/home/SidebarIcons/heroIcon.png'
import AboutIcon from '@/assets/home/SidebarIcons/aboutIcon.png'
import AchievementIcon from '@/assets/home/SidebarIcons/achievementIcon.png'
import EducationIcon from '@/assets/home/SidebarIcons/educationIcon.png'
import SkillsIcon from '@/assets/home/SidebarIcons/skillsIcon.png'

interface Props {
  selected: string
  onSelect: (menuId: string) => void
}

const MENU_ITEMS = [
  { id: 'hero', label: 'Hero', icon: HeroIcon },
  { id: 'about', label: 'About', icon: AboutIcon },
  { id: 'education', label: 'Education', icon: AchievementIcon },
  { id: 'achievements', label: 'Achievements', icon: EducationIcon },
  { id: 'skills', label: 'Skills', icon: SkillsIcon },
]

export const Sidebar = ({ selected, onSelect }: Props) => {
  return (
    <div
      className="hidden md:flex md:flex-col md:w-46 items-center md:items-start gap-2 md:gap-2 justify-end md:justify-start"
    >
      {MENU_ITEMS.map((item) => (
        <SidebarItem
          isActive={selected === item.id}
          label={item.label}
          onClick={() => onSelect(item.id)}
          icon={item.icon}
          key={item.label}
        />
      ))}
    </div>
  )
}