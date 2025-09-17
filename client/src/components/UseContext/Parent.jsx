import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  // const [data,setData] = useState({ name: "Bhanu", role: "Admin" })
  return (
    <div>
        <h1>Parent</h1>
        <Child data = {data}/>
    </div>
  )
}

export default Parent