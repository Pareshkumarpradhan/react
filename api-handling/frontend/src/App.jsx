
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
 const[products, setProducts] = useState([])
 const[error, setError] = useState(false)
 const [loading, setLoading] = useState(false)
 const [search, setSearch] = useState('')


 useEffect(() => {
  const controler = new AbortController();

  (async () => {
   try {
    setLoading(true)
    setError(false)
     const response = await axios.get('/api/products?search=' + search, {
      signal: controler.signal
     })
     console.log(response.data);
     setProducts(response.data)
     setLoading(false)
   } catch (error) {
    if(axios.isCancel(error)){
      console.log('Request canceled', error.message);
      return;
    }
      setError(true)
      setLoading(false)
   }
  })()

  // cleanup
  return () => {
      controler.abort()
  }

 }, [search])

 if(error) return <h1>Something went wrong</h1>
 if(loading) return <p>Loading...</p>

  return (
    <>
      
      <h1>APi in React</h1>
      <input type="text" placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      <h2>Number of Products are: {products.length}</h2>
    </>
  )
}

export default App
