import { Timer } from './components/Timer'
import { MusicPlayer } from './components/MusicPlayer'

export const WelcomeBar = () => {

  return (
    <div className="text-lg absolute bottom-0 rounded-b-2xl w-full bg-black/40 shadow-md 
    shadow-gray-200/40 px-20 md:h-20 flex justify-between items-center " role="banner">
      <MusicPlayer />
      <p className="text-lightGray">
        Bienvenido a mi portafolio | <Timer />
      </p>
    </div>
  )
}
