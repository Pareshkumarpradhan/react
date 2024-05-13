import React from 'react'
import ChildComp from './ChildComp'

function UseCallbackHook() {
    const [num, setNum] = React.useState(0)
    const [theme, setTheme] = React.useState('flase')

    const style = {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black'
    }

    const getNumbers = React.useCallback(() => {
        return [num, num * 1, num * 2]
    }, [num])
  return (
    <div style={style}>
        <h1>UseCallback Hook</h1>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
        <ChildComp getNumbers={getNumbers} />
        <button onClick={() => setTheme(prev => !prev)}>Change Theme</button>
    </div>
  )
}

export default UseCallbackHook