import {Timer} from './Timer'

export const WelcomeBar = () => {

  return (
    <div className="fixed bottom-0 w-full bg-white px-18 h-16 flex justify-end items-center">
      <p className="text-lightGray">
        Bienvenido a mi portafolio | <Timer />
      </p>
    </div>
  )
}
