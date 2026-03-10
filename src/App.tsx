import { useState, useEffect } from "react";
import { StarBackground } from '@/ui'
import { FileLayout } from '@/layout/FileLayout'
import type { ReactNode } from "react";
import { Contact } from "./features/Contact";
import { Home } from "./features/Home";

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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <StarBackground />
      <FileLayout
        openFile={activeTab}
        changeFileById={setActiveTab}
        isLoading={loading}
      >
        {content}
      </FileLayout>
    </div>
  )
}

export default App
