/* eslint-disable react/prop-types */
import  { useState } from 'react'

function StateProps({country}) {
    
    let [name, setName] = useState("Paresh")
    

    function handleClick(){
        name = "Raju"
        setName(name)
    }

  return (
    <>
    <h1 className='font-bold'>Hello {name} From , {country}</h1>
    <button onClick={handleClick} className='bg-gray-300 border rounded p-1 mt-3'>Change Name </button>
    </>
  )
}

export default StateProps