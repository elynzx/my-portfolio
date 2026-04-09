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

    <div className="flex h-full w-full justify-center items-center md:relative">
      <div className="flex md:flex-row md:gap-20 p-4 md:px-4 md:py-12 w-full h-full">
        <aside className="mt-8">
          <Sidebar selected={activeSection} onSelect={setActiveSection} />
        </aside>
        <section key={activeSection} className="w-full flex flex-col items-center justify-center md:mr-8 rounded-2xl h-full bg-bgDeepBlack/65">
          <ClipDeco />
          <div

            className="h-full ml-14 w-full slide-left md:ml-32 md:px-4 md:py-12 ">
            <div className="overflow-y-auto no-scrollbar">
              {section}
            </div>
          </div>
          <div className="w-full px-5">
            <Pagination />
          </div>
        </section>
      </div>
    </div>

  )
}