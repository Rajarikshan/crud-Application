import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



export default function popup(abc){
  console.log(abc.FieldData,"###")

  const updateData=()=>{
    
fetch(`https://67d7ee179d5e3a10152ca343.mockapi.io/Rikshan/Rikshan/${abc.FieldData.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(abc.FieldData)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
     alert("success....!");
     abc.setRef(!abc.ref)
}).catch(error => {
  console.log(error)
})
  }


  const creteUser=()=>{

  
    fetch('https://67d7ee179d5e3a10152ca343.mockapi.io/Rikshan/Rikshan', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(abc.FieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      // do something with the new task
      alert("User added successfully....")
    abc.setRef(!abc.ref)
  
    }).catch(error => {
      // handle error
      console.log(error)
    })
abc.End()

  }
  


    return(
        <Modal show={abc.theaTer} onHide={abc.End}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your name"
                autoFocus
                defaultValue={abc.FieldData.name}
                onChange={(e)=>abc.setFieldData({...abc.FieldData,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                autoFocus
                defaultValue={abc.FieldData.EmailId}
                onChange={(e)=>abc.setFieldData({...abc.FieldData,email:e.target.value})}


              />
            </Form.Group>
           
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone no"
                autoFocus
                defaultValue={abc.FieldData.location}
                onChange={(e)=>abc.setFieldData({...abc.FieldData,location:e.target.value})}


              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Qualification"
                autoFocus
                defaultValue={abc.FieldData.Qualification}

              />
            </Form.Group>
           


            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.End}>
            Close
          </Button>

          {abc.FieldData.id ?  <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> : 
          <Button variant="primary" onClick={creteUser}>
            Create
          </Button>}
        </Modal.Footer>
      </Modal>
    )
} 