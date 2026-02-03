import {useState} from 'react'

const Timer = () => {

  const[dateTime, setDateTime] = useState()

  return(
    <>
    <span className="font-semibold text-[15px] px-2">{hour}</span>
    </>
  )

}

export default Timer