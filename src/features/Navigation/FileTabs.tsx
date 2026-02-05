import { useState } from 'react'
import { TabButton } from './TabButton'

const NAV_TABS = [
  { label: 'Home' },
  { label: 'Projects' },
  { label: 'Certifications' },
  { label: 'Contact' },

]

export const FileTabs = () => {

  const [activeTab, setActiveTab] = useState(NAV_TABS[0].label)

  return (

    <div className="flex gap-x-3">
      {NAV_TABS.map(tab => (
        <TabButton isActive={activeTab === tab.label}
          onClick={() => setActiveTab(tab.label)}
          label={tab.label}
          key={tab.label}
        />
      ))}
    </div>
  )
}
