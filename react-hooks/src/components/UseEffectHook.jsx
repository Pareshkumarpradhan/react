import React, { useEffect } from 'react'

function UseEffectHook() {
    const[tab, setTab] = React.useState('posts')

    useEffect(() =>  {
        fetch(`https://jsonplaceholder.typicode.com/${tab}`)
        .then(response => response.json())
        .then(json => console.log(json))   
    }, [tab])
  return (
    <div>
        <div>
        <button onClick={() => setTab('posts')}>Posts</button>
        <button onClick={() => setTab('users')}>Users</button>
        <button onClick={() => setTab('comments')}>Comments</button>
        </div>
        <h3>{tab}</h3>
    </div>
  )
}

export default UseEffectHook