import React, { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    const [data, setData] = useState([])
 useEffect(() => {
 fetch('https://api.github.com/users/pareshkumarpradhan')
 .then(res => res.json())
 .then(data => {
    console.log(data)
    setData(data)
})
 }, [])

  return (
    <div className='text-cener m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt='avatar' className='rounded-full w-32 h-32'/>
    </div>
  )
}

export default Github


// export const githubInfoLoader = async () => {
//     const res = await fetch('https://api.github.com/users/pareshkumarpradhan')
//     const data = await res.json()
//     return data
//   }