import { FileNavigation } from '@/shared/components'
import { BunnySticker } from '@/shared/ui'
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
    <main className="relative px-4 mt-6 md:mt-0 w-full h-full mx-auto flex items-center justify-center" role="main">
      <div className="w-full flex flex-row items-center justify-center md:flex-col-reverse md:items-center md:justify-center">
        <main className="w-full h-140 relative border border-gray-200/50 bg-gray-300/10 rounded-3xl shadow-xl shadow-gray-500/40 md:h-160 md:w-330">
          <BunnySticker />
          {children}
        </main>
        <FileNavigation openFile={openFile} changeFileById={changeFileById} />
      </div>
    </main>
  );
};