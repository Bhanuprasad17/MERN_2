import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        setCount(count => count + 1)
    }

    const handleDecrement = () =>{
        setCount(count => count - 1)
    }

    const handleReset = () =>{
        setCount(0)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Count