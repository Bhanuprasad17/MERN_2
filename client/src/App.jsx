import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Timer from './components/Timer'
import Todo from './components/Todo'
import Parent from './components/UseContext/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count /> */}
      {/* <Timer /> */}
      {/* <Todo /> */}
      <Parent />
    </>
  )
}

export default App
