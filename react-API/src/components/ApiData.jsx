import{ useState, useEffect } from 'react';

function ApiData() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9)  // number of post per page
  const [searchTerm, setSearchTerm] = useState('')
  

  useEffect(()=> {
       const apiUrl = "https://jsonplaceholder.typicode.com/posts"

       fetch(apiUrl)
       .then((response) => {
        if(!response.ok){
            throw new Error("failed to fedth")
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

  // calculate current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data
  .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
  .slice(indexOfFirstPost, indexOfLastPost)

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl, font-bold my-5'>API data</h1>
      <div className='mb-4'>
            <input 
            type="text" 
            placeholder='Search by title...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='px-3 py-1 w-full border rounded-md'
            />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {currentPosts.map((post) => (
          <div key={post.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='py-4 px-6'>
                  <div className='font-bold text-sm mb-2'>{post.title}</div>
                  <p className='text-gray-700 text-base'>{post.body}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                <span className='inline-block rounded-full bg-slate-100 px-4 py-2 font-semibold text-sm '>Post Id: {post.id}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4'>
         {Array.from({length: Math.ceil(data.length / postsPerPage)}, (_, index) => (
          <button
           key={index}
           onClick={() => paginate(index + 1)}
           className={`mx-1 px-3 py-1 bg-gray-300 rounded hover:bg-gray-500 ${currentPage === index + 1 ? "bg-gray-500" : ""}`}
           >
               {index + 1}
          </button>
         ))}
      </div>
    </div>
   
  )
}

export default ApiData;

























// import { useEffect } from 'react'
// import { useState } from 'react'

// function ApiData() {

//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)


//     useEffect(() => {
//         const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

//         fetch(apiUrl)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Failed to fetch')
//             }
//             return response.json()
//         })
//         .then((data) => {
//             setData(data)
//             setLoading(false)
//         })
//         .catch((error) => {
//             setError(error)
//             setLoading(false)
//         })
//     }, [])

//     if (loading) return <div>Loading...</div>
//     if (error) return <div>Error: {error.message}</div>

//   return (
//     <div>
//         <h1>API Data</h1>
//         <ul>
//             {data.map((post) => (
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     </div>
//   )
// }

// export default ApiData