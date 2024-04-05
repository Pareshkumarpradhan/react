
import Card from './components/Card'
import './App.css'

function App() {
 

  let myObj = {
    name: 'chaiaurcode',
    age: 24
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "chaiaurcode" btntext ="click me"/>
      <Card  username = "paresh" />
    </>
  )
}

export default App
