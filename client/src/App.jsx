import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Timer from './components/Timer'
import Todo from './components/Todo'
// import Parent from './components/UseContext/Parent'
import Todo2 from './components/Todo2'
import Parent from './components/UseContext2/Parent'
import UseRef from './components/useRef/UseRef'
import FormWithUseState from './components/UseReducer/FormWithUseState'
import FormWithUseReducer from './components/UseReducer/FormWithUseReducer'
import Counter from './components/UseReducer/Counter'
import Counter2 from './components/UseReducer/Counter2'

export const UserContext = createContext(null)

function App() {
    const [data,setData] = useState({ name: "Bhanu", role: "Admin" })
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count /> */}
      {/* <Timer /> */}
      {/* <Todo /> */}
      {/* <UserContext.Provider value={data}>
      <Parent />
      </UserContext.Provider> */}
      {/* <Todo2 /> */}
      {/* <UserContext.Provider value={data}>
        <Parent />
      </UserContext.Provider> */}
      {/* <UseRef /> */}
      {/* <Todo2 /> */}
      <FormWithUseState />
      {/* <FormWithUseReducer /> */}
      {/* <Counter /> */}
      {/* <Counter2 /> */}
    </>
  )
}

export default App
