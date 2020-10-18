import React from 'react'
import { imageStyle, mainStyle } from '../style/style.js'
import { signInWithGoogle, signOut } from '../firebase/Config'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

const NavbarConent = ({ currentUser, setPage }) => {

  return (
    <Navbar bg='light' style={mainStyle} collapseOnSelect expand="lg">
      <Navbar.Brand className='navColor' href="/">Seller-Store</Navbar.Brand>
      {
        currentUser &&
          <Image
            href="/"
            className='m-2'
            style={imageStyle}
            rounded
            alt={`this photo is ${currentUser.displayName}`}
            src={currentUser.photoURL} />
      }
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navColor">
          {
            currentUser ?
            <>
              <Nav.Link href="/">Profile</Nav.Link>
              <Nav.Link onClick={signOut}>Log Out</Nav.Link>
              <Nav.Link href="/myStore">My Store</Nav.Link>
            </> :
            <NavDropdown title="Log In" >
              <NavDropdown.Item onClick={signInWithGoogle}>
                Google Login
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setPage('SignIn')}>
                Email Login
              </NavDropdown.Item>
            </NavDropdown>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarConent
