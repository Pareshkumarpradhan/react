import{ useEffect, useState } from 'react'

function PracticeApi() {
  const[data, setData] = useState([])
  const[error, setError] = useState(null)
  const[loading, setLoading] = useState(true)
  const[currentPage, setCurrentPage] = useState(1)
  const[postPerPage] = useState(9)
  const[searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
    .then((response) => {
                if(!response.ok){
                  throw new Error("Failed to fetch api")
                }
                return response.json()
    })
    .then((data) => {
          setData(data)
          setLoading(false)
    })
    .catch((error) => {
         setError(error)
         setLoading(false)
    })
  })


  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = data
   .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (
    <div className='container m-4 p-4'>
      <h1 className='text-xl font-bold mb-2'>APi Data</h1>
      <div className='mt-2'>
        <input 
        type="text"
        placeholder='Search by Title'
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full px-3 py-1 rounded-md'
        />

      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {currentPosts.map((post) => (
              <div key={post.id} className='rounded-sm shadow-lg p-3 max-w-sm overflow-hidden'>
                 <div>
                  <h3 className='font-bold mb-2'>{post.title}</h3>
                  <p className='text-sm text-gray-700 mb-4'>{post.body}</p>
                 </div>
                 <div>
                  <span className='inline-block rounded-full bg-slate-400 px-4 '>{post.id}</span>
                 </div>
              </div>
            ))}
          </div>
          <div className='mt-4'>
              {
                Array.from({length: Math.ceil(data.length / postPerPage)}, (_, index) => (
                  <button 
                    key={index}
                    onClick={() => paginate(index+1)}
                    className={`mx-1 px-3 py-1 bg-slate-400 rounded-md hover:bg-slate-600 ${currentPage === index+1 ? "bg-slate-600": ""}`}
                    >
                     {index+1}
                  </button>
                ))
              }
          </div>
    </div>
  )
}

export default PracticeApi