import { FileTabs } from '../Navigation/FileTabs'

export const FileContainer = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-64px)]">
      <FileTabs />
      <div
        className="bg-white h-110 w-220 border border-lightGray rounded-xl shadow-lg"
      >
      </div>
    </div>
  )
}
