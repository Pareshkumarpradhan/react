import React, { useEffect, useState } from 'react'

function PracticeApi() {
const[data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = fetch('https://jsonplaceholder.typicode.com/posts')
      if(!response.ok){
        throw new Error("failed to fetch")
      }
      const jsonData = await response.json()
      setData(jsonData)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }
  fetchData()
}, [])

  return (
    <div>PracticeApi</div>
  )
}

export default PracticeApi