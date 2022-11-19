import React from 'react'
import { useState } from 'react';
  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddState = () => {
const [info,setInfo]=useState()

 const infhandeler=(e)=>{
setInfo(e.target.value)
console.log(info)

}
  const sendInfo=(e)=>{

    e.preventDefault()
    fetch('http://localhost:8080/travel/create', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name:info})
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
  }
  return (
    <>
    <div className='d-flex justify-content-center mt-5'>

    <Form className='mt-5 ' onSubmit={(e)=>sendInfo(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  onChange={(e)=>infhandeler(e)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    </div>
    
    </>
  )
}

export default AddState