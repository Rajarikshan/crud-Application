import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import React from 'react';
import SmallExample from "./table.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './popup.jsx';

function App() {
  // const [count, setCount] = useState(0)
  const [show, setShow] = useState(false);
  const [status,setStatus]=useState(false)
  const [tempData,setTempData]=useState({})


    const handleClose = () => setShow(false);
    const handleShow = (rowData) =>{
     if(rowData){
     setTempData(rowData);
     }
     else{
      setTempData({
        name:null,
       EmailId:null,
       location:null,
       Qualification:null 
      })
    
     }
     setShow(true);
    }
  return (
    <>
    <Popup ref={status} setRef={setStatus} theaTer={show} End={handleClose} FieldData={tempData} setFieldData={setTempData}/>
    <SmallExample card={handleShow} update={status} setUpdate={setStatus} newData={tempData} />
    
    </>
  )
}

export default App
