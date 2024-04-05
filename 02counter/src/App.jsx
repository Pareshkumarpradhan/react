import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter]  = useState(0)

  // let counter = 5

  const addValue = () => {
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
      console.log('Counter Value:', counter)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
      console.log('Counter Value:', counter)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
       onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter} </button>

      <p>Footer : {counter}</p>
    </>
  )
}

export default App
