import LoadingStar from '@/assets/stickers/loading.png'
import { LoadingBar } from './components/LoadingBar.tsx'

export const LoadingScreen = () => {

  return (
    <div className="relative z-50 flex flex-col items-center justify-center mb-4 md:mb-10 ">
      <div className="relative flex flex-col items-center ">
        <LoadingBar />
        <div>

          <img
            src={LoadingStar}
            alt="loading stars"
            className="loading-star pointer-events-none w-30 absolute "
          />
        </div>

      </div>
    </div>
  )
}
