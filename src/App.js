import React, { useState, useEffect } from 'react'
import Navbar from './layoutComponents/Navbar'
import Footer from './layoutComponents/Footer'
import SignIn from './pageComponents/SignIn/SignIn'
import MyStore from './pageComponents/MyStore/MyStore'
import NotLogIn from './pageComponents/NotLogInPage'
import EditStore from './pageComponents/MyStore/EditStore'
import { projectAuth } from "./firebase/Config"
import { bgStyle } from './style/style'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from 'react-bootstrap'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  // console.log(currentUser)
  const [page, setPage] = useState('NotLogIn')

  useEffect(() => {
    projectAuth.onAuthStateChanged(userAuth => {
      userAuth ? setCurrentUser(userAuth) : setCurrentUser(null)
    })
  }, [])

  if (!currentUser) {
    return (
      <div style={bgStyle}>
        <Navbar currentUser={currentUser} setPage={setPage} />
        <Container className='mt-3'>
          {page === 'NotLogIn' ? <NotLogIn /> : <SignIn />}
        </Container>
        <Footer />
      </div>
    )
  }

  return (
    <div style={bgStyle}>
      <Navbar currentUser={currentUser} setPage={setPage} />
      <BrowserRouter>
        <Container className='mt-3'>
          <Switch>
            <Route path='/myStore'>
              <MyStore />
            </Route>
            <Route path='/store/:id' render={({ match }) => (
              <EditStore
                id={match.params.id}
              />
            )}>
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
