import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [seconds, setSeconds] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() =>{
        const IntervalId =  setInterval(()=>{
            setSeconds(count => count + 1)
        },1000)

        return () => {
            clearInterval(IntervalId)
            console.log('cleanup function')
        }

    },[count])

    const handleCount = () =>{
        setCount(count => count + 1)
    }
    


  return (
    <div>
        <h1>{seconds}</h1>
        <h1>{count}</h1>
        <button onClick={handleCount}>Increment</button>
    </div>
  )
}

export default Timer