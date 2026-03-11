import { useState, type ReactNode } from 'react'
import { Hero } from './sections'

const HOME_SECTIONS: Record<string, ReactNode> = {
  hero: <Hero />,
}

export const Home = () => {

  const [activeSection, setActveSection] = useState('hero')
  const section = HOME_SECTIONS[activeSection] || HOME_SECTIONS.hero

  return (

    <div className="flex h-full w-full md:relative">
{/*       <aside className="mt-20 ml-3">
        {/* <Sidebar selected={activeSection} onSelect={setActiveSection} /> 
      </aside> */}
      <section className="p-6 md:p-12 md:flex-1 w-full ">
        <div
          key={activeSection}
          className="h-full w-full rounded-xl bg-bgDeepBlack/60 slide-left md:ml-7 md:px-16 md:py-10 ">

          {/* <ClipDeco /> */}
          <div className="overflow-y-auto no-scrollbar">
            {section}
          </div>
        </div>
      </section>
    </div>

  )
}