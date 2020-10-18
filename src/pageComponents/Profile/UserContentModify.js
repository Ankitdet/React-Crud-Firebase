import React, { useState, useEffect } from 'react'
// import { resetEmail, signOut } from '../../firebase/Config'
import { Col, Form, Button, Alert } from 'react-bootstrap'

const UserContetModify = ({ currentUser, snapData, setPage }) => {
  const initialFieldValues = {
    fullName: '',
    error: ''
  }

  const [user, setUser] = useState({ fullName: currentUser.displayName })
  const [subSuccess, setSubSuccess] = useState(false)
  const [errorShow, setErrorShow] = useState('')

  useEffect(() => {
    if(currentUser === '') {
      setUser({
        ...initialFieldValues
      })
    }
    else {
      // console.log(currentUser.displayName)
    }
  },[currentUser, initialFieldValues])

  const handlerInputChange = (e) => {
    const { name, value } = e.target
    if(value.match("^[\u4e00-\u9fa5a-zA-Z0-9]*$")) {
      setUser({
        // 這邊先串接useState中的valuses，然後使用陣列去寫入每個input裡面的name的值
        ...user,
        [name]: value
      })
    } else {
      setErrorShow('Can not input Null')
      setSubSuccess(false)
    }
  }

  const handlerFormSubmit = async (e) => {
    if (currentUser.email !== null
        && user.fullName !== ''
        && user.fullName.length >= 2) {
        currentUser.updateProfile({
          displayName: user.fullName
        }).then(() => {
          setUser(initialFieldValues)
          setSubSuccess(true)
          setErrorShow(false)
          setPage('display')
        }).catch((error) => {
          setUser({
            ...user,
            error: error.message
          })
        })
    } else {
      setSubSuccess(false)
      setErrorShow('Can not input null or length < 2')
    }
    e.preventDefault()
  }

  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
      <Form className='my-2' onSubmit={handlerFormSubmit}>
        <Form.Group controlId='formFullName'>
          <Form.Label>Full Name</Form.Label>
          <input
            className='form-control'
            placeholder='Input Full Name'
            name='fullName'
            value={user.fullName}
            onChange={handlerInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
        {
          subSuccess &&
          <Alert
            className='my-2'
            variant='success'
            onClose={() => setSubSuccess(false)}
            dismissible>
            Update User Name: {currentUser.displayName} Success
          </Alert>
        }
        {
          user.error &&
          <Alert
            className='my-2'
            variant='danger'
            onClose={() => setErrorShow(false)}
            dismissible>
            {user.error}
          </Alert>
        }
        {
          errorShow &&
          <Alert
            className='my-2'
            variant='danger'
            onClose={() => setErrorShow(false)}
            dismissible>
            {errorShow}
          </Alert>
        }
      </Form>
    </Col>
  )
}

export default UserContetModify
