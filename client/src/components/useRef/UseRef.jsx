import React, { useRef } from 'react'

const UseRef = () => {

    const headingRef = useRef(null)
    // const headingRef = {
    //     current : null
    // }

    const handleClick = () =>{
        headingRef.current.textContent = "Hello Bhanu";
    }

  return (
    <div>
        <h1 ref={headingRef}>hello user</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default UseRef