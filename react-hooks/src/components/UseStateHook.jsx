import  { useState } from 'react'

function UseStateHook() {
    const [count, setCount] = useState(0)

const handleIncrement = () => {
    if(count < 20){
        setCount(count + 1)
    }
}

const handleDecrement = () => {
    if(count === 0) return
    setCount(count - 1)
}
  return (
    <div>
        <div>Counter Value: {count}</div>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseStateHook