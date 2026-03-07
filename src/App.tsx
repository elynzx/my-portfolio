import { useState, useEffect } from "react";
import { StarBackground } from '@/ui'
import { FileLayout } from '@/layout/FileLayout'


function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  let content;

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
