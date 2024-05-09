import  { useEffect, useState } from 'react'
import { data } from './ConstData'

function PracticeApi() {

  const[activeImageIndex, setActiveImageIndex] = useState(0)

  const handlePrev = () => {
    if(activeImageIndex === 0){
        setActiveImageIndex(data.length-1)
    }else{
      setActiveImageIndex(activeImageIndex - 1)
    }
  }

  const handleNext = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length)
  }

  useEffect(() => {
    setTimeout(() => {
      handleNext()
    },2000)
  },[activeImageIndex])

  return (
    <div className='flex justify-center'>
      <button className='mr-10 text-xl font-bold' onClick={handlePrev}>Prev</button>
      {data.map((url, i) => (
          <img 
            key={url}
            src={url} 
            alt="wallpaper" 
            className={'w-[700px] h-[500px] object-contain ' + (activeImageIndex === i ? "block" : "hidden")}
          />
      ))}
      <button className='ml-10 text-xl font-bold' onClick={handleNext}>Next</button>
    </div>
  )
}

export default PracticeApi