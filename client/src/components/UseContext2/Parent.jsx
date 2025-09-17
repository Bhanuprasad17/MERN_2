import React, { useContext } from 'react'
import { UserContext } from '../../App'

const Parent = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.role}</h1>
    </div>
  )
}

export default Parent