/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

function ChildComp({getNumbers}) {
  const[numList, setNumList] = React.useState([])

    useEffect(() => {
         setNumList(getNumbers)
    },[getNumbers])
  return (
    <div>
        <h1>Child Component</h1>
        {numList.map(((item, i) => {
            return <div key={i}>{item}</div>
        }))}
    </div>
  )
}

export default (ChildComp)