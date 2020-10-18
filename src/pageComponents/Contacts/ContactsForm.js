import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactsForm = ({ addOrEdit, currentID, contactsObj, setPage }) => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  }
  const [values, setValues] = useState(initialFieldValues)

  useEffect(() => {
    if(currentID === '') {
      setValues({
        ...initialFieldValues
      })
    }
    else {
      setValues({
        ...contactsObj[currentID]
      })
    }
  },[currentID, contactsObj])

  const handlerInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      // 這邊先串接useState中的valuses，然後使用陣列去寫入每個input裡面的name的值
      ...values,
      [name]: value
    })
  }

  const handlerFormSubmit = (e) => {
    e.preventDefault()
    addOrEdit(values)
    setPage('Table')
  }

  return (
    <Form className='my-2' onSubmit={handlerFormSubmit}>
      <Form.Group controlId='formFullName'>
        <Form.Label>Full Name:</Form.Label>
        <input
          className='form-control'
          placeholder={currentID === '' ? 'Input New Full Name' : 'Update Full Name'}
          name='fullName'
          value={values.fullName}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formMobile'>
        <Form.Label>Mobile:</Form.Label>
        <input
          className='form-control'
          placeholder={currentID === '' ? 'Input New Mobile' : 'Update Mobile'}
          name='mobile'
          value={values.mobile}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formEmail'>
        <Form.Label>Email:</Form.Label>
        <input
          className='form-control'
          placeholder={currentID === '' ? 'Input New E-mail' : 'Update E-mail'}
          name='email'
          value={values.email}
          onChange={handlerInputChange} />
      </Form.Group>

      <Form.Group controlId='formAddress'>
        <Form.Label>Address:</Form.Label>
        <textarea
          className='form-control'
          placeholder={currentID === '' ? 'Input New Address' : 'Update Address'}
          name='address'
          value={values.address}
          onChange={handlerInputChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {currentID === '' ? 'Submit' : 'Update'}
      </Button>
    </Form>
  )
}

export default ContactsForm
