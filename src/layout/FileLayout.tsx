import { FileNavigation } from '@/shared/components'
import { LoadingScreen } from '@/shared/components'
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
    <section className="relative px-4 mt-6 md:mt-0 w-full h-full mx-auto flex items-center justify-center">
      <div className={`w-full flex flex-row items-center justify-center md:flex-col-reverse md:items-center md:justify-center ${isLoading ? "blur-xs" : "blur-0 transition-all duration-700"}`}>
        <main className="w-full h-140 relative border border-gray-200/50 bg-gray-300/10 rounded-3xl shadow-xl shadow-gray-500/40 md:h-160 md:w-330">
          <BunnySticker />
          {children}
        </main>
        <FileNavigation openFile={openFile} changeFileById={changeFileById} />
      </div>

      {showCover && (
        <div
          className={`
              absolute h-full w-full md:h-162 md:w-330 md:mt-8 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-65 md:border border-borderGray/50 shadow-2xl 
               bg-DeepGray/95 md:rounded-2xl
              flex flex-col items-center justify-center
              ${isLoading ? "opacity-100 " : "opacity-0 transition-opacity duration-800 pointer-events-none"} 
            `}
        >
          <div className={!isLoading ? "opacity-0" : "opacity-100"}>
            <LoadingScreen />
            <p className="mt-6 md:mt-15 md:text-2xl font-semibold animate-pulse text-center">
              Loading Evelyn's Portfolio...
            </p>
          </div>
        </div>
      )}
    </section>
  );
};