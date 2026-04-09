import { useState, type ReactNode } from 'react'
import { Hero, About, Education, Skills } from './sections'
import { Pagination } from '@/shared/components'
import { ClipDeco } from '@/shared/ui'
import { Sidebar } from '@/shared/components'


const HOME_SECTIONS: Record<string, ReactNode> = {
  hero: <Hero />,
  about: <About />,
  education: <Education />,
  skills: <Skills />
}

export const Home = () => {

  const [activeSection, setActiveSection] = useState('hero')
  const section = HOME_SECTIONS[activeSection] || HOME_SECTIONS.hero

  return (

    <div className="flex h-full w-full md:relative">
      <aside className="mt-20 ml-3">
        <Sidebar selected={activeSection} onSelect={setActiveSection} />
      </aside>
      <section className="p-6 md:p-12 md:flex-1 w-full">
        <div
          key={activeSection}
          className="h-full w-full rounded-xl bg-bgDeepBlack/60 slide-left ml-5 md:ml-7 md:px-16 md:py-10 ">
          <ClipDeco />
          <div className="overflow-y-auto no-scrollbar">
            {section}
          </div>
          <div className="px-5">
            <Pagination />
          </div>
        </div>
      </section>
    </div>

  )
}