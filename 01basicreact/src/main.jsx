import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App | chai</h1>
//     </div>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google',
// }

// const anotherElement = (
//   <a href="https://www.google.com" target="_blank">
//     Click me to visit Google
//   </a>

// )

// const reactElement = React.createElement(
//   'a', 
//   {
//   href: 'https://www.google.com',
//   target: '_blank',
//   },
//  'Click me to visit Google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App />
  
)
