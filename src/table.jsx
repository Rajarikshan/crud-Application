import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import { build } from 'vite';

function SmallExample(bcd) {

    const [tabledata,setTabledata]=useState(null)


useEffect(()=>{
    fetch('https://67d7ee179d5e3a10152ca343.mockapi.io/Rikshan/Rikshan', {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(tasks => {
        setTabledata(tasks.reverse())
      }).catch(error => {
        console.log(error)
      })

},[bcd.update])

console.log(tabledata);

const deleteUser=(id)=>{
  
fetch(`https://67d7ee179d5e3a10152ca343.mockapi.io/Rikshan/Rikshan/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert("deleted succesfully...");
  bcd.setUpdate(!bcd.update)

}).catch(error => {
  console.log(error)
})
}


  return (
    <>
    <Button onClick={()=>bcd.End()}  variant="warning" className='fs-5 mb-3'>ADD</Button>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th className='p-2'>id</th>
          <th className='p-2'>name</th>
          <th className='p-2'>Email Id</th>
          <th className='p-2'>Qualification</th>
          <th className='p-2'>phoneno</th>
          <th className='p-2'>Action</th>

        </tr>
      </thead>
      <tbody>
        {tabledata&&tabledata.map((item,out)=>{
        return(
            <>
                    <tr>
          <td>{out+1}</td>
          <td>{item.name}</td>
          <td>{item.Qualification}</td>
          <td>{item.location}</td>
          <td>{item.Qualification}</td>
          <td>  <Button onClick={()=>bcd.card(item)} variant="success" className='m-1'>Edit</Button><Button variant="danger" onClick={()=>deleteUser(item.id)}>Delete</Button></td>
        </tr>
         
            </>
        )
        })}

     
      </tbody>
    </Table>
    </>
  );
}

export default SmallExample;