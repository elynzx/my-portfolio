import { TabButton } from './components/TabButton'

const NAV_TABS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
]

interface Props {
  openFile: string
  changeFileById: (tabId: string) => void
}

export const FileNavigation = ({ openFile, changeFileById }: Props) => {

  return (

    <nav className="relative" aria-label="Main navigation">
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 z-0">
        {NAV_TABS.map((tab) => (
          <TabButton
            isActive={openFile === tab.id}
            onClick={() => changeFileById(tab.id)}
            label={tab.label}
            key={tab.id}
          />
        ))}
      </div>
    </nav>
  )
}