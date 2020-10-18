import React from 'react'
import SignUp from './SignUp/SignUp'
import { jumbotronStyle } from '../style/style'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

const NotLogIn = () => {

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={10} lg={8} xl={6}>
          <Jumbotron style={jumbotronStyle}>
            <h1>Please Log In To Continue</h1>
            <p>
              If you  don't have an account,please sign up at this form.
            </p>
            <SignUp />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}

export default NotLogIn
