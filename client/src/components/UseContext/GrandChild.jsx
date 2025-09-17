import React from 'react'

const GrandChild = ({data}) => {
  console.log(data)
  return (
    <div>
        <h1>GrandChild</h1>
        <p>{data.name} || {data.role}</p>
    </div>
  )
}

export default GrandChild