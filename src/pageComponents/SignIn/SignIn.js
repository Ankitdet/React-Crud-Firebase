import React, { useState } from 'react'
import { jumbotronStyle } from '../../style/style'
import { signInWithEmail, signOut } from '../../firebase/Config'
import { Container, Row, Col, Jumbotron, Form, Button, Alert } from 'react-bootstrap'

const SignIn = (props) => {

  const initialFieldValues = {
    email: '',
    password: '',
    error: ''
  }

  const [user, setUser] = useState(initialFieldValues)
  const [show, setShow] = useState(true)

  const handlerInputChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
      error: '',
    })
  }

  const handlerFormSubmit = (e) => {
    signInWithEmail(user.email, user.password).then(result => {
      if (!result.user.email) {
        setUser({
          ...user,
          error: 'Please verify your email before to continue',
        })
        signOut()
      }
      else if (result.user) {
        props.history.push('/')
      }
    })
    .catch(error => {
      // Update the error
      setUser({
        ...user,
        error: error.message,
      })
    })
    e.preventDefault()
  }

  return (
    <Container className='my-5 py-5'>
      <Row className='my-1'>
        <Col xs={12} sm={12} md={10} lg={8} xl={6}>
          <Jumbotron style={jumbotronStyle}>
            <h1>Sign in with your email</h1>
            <Form className='my-2' onSubmit={handlerFormSubmit}>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <input
                  className='form-control'
                  placeholder='Input E-mail'
                  name='email'
                  value={user.email}
                  onChange={handlerInputChange} />
              </Form.Group>

              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Input password'
                  name='password'
                  value={user.password}
                  onChange={handlerInputChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              {
                user.error !== '' && show &&
                <Alert
                  className='my-2'
                  variant='danger'
                  onClose={() => setShow(false)}
                  dismissible>
                  {user.error}
                </Alert>
              }
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
