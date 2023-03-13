import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FormGroup,FormControl,InputLabel,Input,Typography,styled,Button} from '@mui/material'
import { addUser } from '../service/api'


const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div{
  margin-top:20px
}
`

const AddUser = () => {

  const navigate = useNavigate();

  const [name,setName] = useState('')
  const [rollno,setRoll] = useState('')
  const [emailID,setEmail] = useState('')
  const [photo,setFile] = useState('')




  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
      
    formData.append('name', name);
    formData.append('rollno', rollno);
    formData.append('emailID', emailID);
    formData.append('photo', photo);
    console.log(formData)
    navigate("/all")
    await addUser(formData)
  }


  return (
    <Container  encType='multipart/form-data'>
      <Typography variant='h4'>Add Student</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" required/>
      </FormControl>
      <FormControl>
        <InputLabel>Roll no</InputLabel>
          <Input type="text" value={rollno} onChange={(e) => setRoll(e.target.value)} name="rollno" required/>
      </FormControl>
      <FormControl>
        <InputLabel>E-Mail</InputLabel>
          <Input type="text" value={emailID} onChange={(e) => setEmail(e.target.value)} name="emailID" required/>
      </FormControl>
      <FormControl>
        <Input type='file' onChange={(e) => setFile(e.target.files[0])} name="photo"/>
      </FormControl>
      <FormControl>
        <Button type="submit" variant='contained' onClick={handleSubmit}>Add Student</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser