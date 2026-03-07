import { FileNavigation } from '@/components'
import { BunnySticker } from '@/ui'
import type { ReactNode } from "react";
import { useState, useEffect } from "react";

interface Props {
  children: ReactNode;
  openFile: string;
  changeFileById: (tabId: string) => void;
  isLoading: boolean;
}

export const FileLayout = ({
  openFile,
  changeFileById,
  children,
  isLoading,
}: Props) => {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowCover(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center" role="main">
      <div className="relative flex flex-row md:flex-col-reverse md:items-center md:justify-center">
        <div className="flex flex-row md:flex-col-reverse md:items-center md:justify-center">
          <div className="relative min-w-80 min-h-145 border border-gray-200/50 bg-gray-300/10 rounded-3xl shadow-xl shadow-gray-500/40 md:h-170 md:w-350">
            <BunnySticker />
            {children}
          </div>
          <FileNavigation openFile={openFile} changeFileById={changeFileById} />
        </div>

      </div>
    </main>
  );
};