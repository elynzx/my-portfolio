import { useState, useEffect } from "react";
import { StarBackground } from '@/shared/ui'
import { FileLayout } from '@/layout/FileLayout'
import type { ReactNode } from "react";
import { Contact } from "../features/Contact";
import { Home } from "../features/Home";
import { WelcomeBar } from "@/shared/components";

const TABS_MAP: Record<string, ReactNode> = {
  home: <Home />,
  contact: <Contact />,
};


function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  const content = TABS_MAP[activeTab] || TABS_MAP.home;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen mx-auto min-h-screen min-w-screen max-w-full overflow-x-hidden">
      <StarBackground />
      <FileLayout
        openFile={activeTab}
        changeFileById={setActiveTab}
        isLoading={loading}
      >
        {content}
      </FileLayout>
      <WelcomeBar/>
    </div>
  )
}

export default App
