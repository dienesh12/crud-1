import React from 'react'
import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {FormGroup,FormControl,InputLabel,Input,Typography,styled,Button} from '@mui/material'
import {  getUser } from '../service/api'
import { editUser } from '../service/api'

const Container = styled(FormGroup)`
width: 50%;
margin: 10% auto 0 auto;
& > div{
  margin-top:20px
}
`

const EditUser = () => {

  const [name,setName] = useState('')
  const [rollno,setRoll] = useState('')
  const [emailID,setEmail] = useState('')
  const [photo,setFile] = useState('')

  const {id} = useParams()

  useEffect(() => {
    loadUserDetails() 
    //console.log('render')
  },[])

  const loadUserDetails = async () => {
    const response = await getUser(id)
    console.log(response.data)
    setName(response.data.name)
    setRoll(response.data.rollno)
    setEmail(response.data.emailID)
    setFile(response.data.photo)
  }


  const editStudentDetails = async (e) => {
    e.preventDefault()
    //console.log(user)

    const formData = new FormData();
      
    formData.append('name', name);
    formData.append('rollno', rollno);
    formData.append('emailID', emailID);
    formData.append('photo', photo);
    console.log(formData)
    await editUser(formData,id)
  }

  return (
    <Container  encType='multipart/form-data'>
      <Typography variant='h4'>Edit Student</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>Roll no</InputLabel>
          <Input type="text" value={rollno} onChange={(e) => setRoll(e.target.value)} name="rollno"/>
      </FormControl>
      <FormControl>
        <InputLabel>E-Mail</InputLabel>
          <Input type="text" value={emailID} onChange={(e) => setEmail(e.target.value)} name="emailID"/>
      </FormControl>
      <FormControl>
        <Input type='file' onChange={(e) => setFile(e.target.files[0])} name="photo"/>
      </FormControl>
      <FormControl>
        <Button type="submit" variant='contained' onClick={editStudentDetails}>Edit Student</Button>
      </FormControl>
    </Container>
  )
}

export default EditUser