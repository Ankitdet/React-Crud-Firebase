import React, { useState, useEffect, createContext } from 'react'
import { projectAuth } from "../firebase/Config"

export  const UserContext = createContext({ user: null })

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    projectAuth.onAuthStateChanged(userAuth => {
      userAuth ? setUser(userAuth) : setUser(null)
    })
  },[])

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
