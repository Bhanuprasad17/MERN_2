import React from 'react'
import GrandChild from './GrandChild'

const Child = ({data}) => {
  // console.log(data)
  return (
    <div>
        <h1>Child</h1>
        <GrandChild data = {data}/>
    </div>
  )
}

export default Child