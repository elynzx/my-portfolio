import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Pagination = () => {
  return (
    <div className="md:hidden flex gap-3 border-t border-gray-500 py-3 mb-5 w-full items-center justify-center">
      <IoIosArrowBack className="text-darkPink text-lg" />
      <div className="flex gap-1 text-xs text-gray-300">
        <span>1</span>
        <span className="">/</span>
        <span>4</span>
      </div>
      <IoIosArrowForward className="text-darkPink text-lg" />
    </div>
  )
}