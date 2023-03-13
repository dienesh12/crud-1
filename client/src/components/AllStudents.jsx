import React from 'react'
import { useEffect,useState } from 'react'
import { getUsers,deleteDetail} from '../service/api'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';



const Page = styled(TextField)`
margin: 2% 5% 2% 40%
`
const Typo = styled(Typography)`
margin: 10% 5% 2% 40%
`
//Button
/*const But = styled(Button)`
margin-left:44%;
margin-bottom:5%;
width:100px;
height:40px
`
<But variant='contained' onClick={() => SearchDetails()}>Search</But>*/
const AllStudents = () => {

    const [users,setUsers] = useState([])
    const [search,setSearch] = useState('')

    useEffect(() => {       
        getAllUsers()
        //handleSearch()
    },[])

    const getAllUsers = async() => {      
        let response = await getUsers()
        setUsers(response.data)
    }
    
    const deleteStudent = async(id) => {
      await deleteDetail(id)
      getAllUsers()
    }

    const handleSearch = (search_val) => {
      if(search_val.length < 1){
        getAllUsers()
      }
      setSearch(search_val)
      const filtered_data = users.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
      })
      setUsers(filtered_data)
    }
    


  return (
    <>
    <Container>
      <Page
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        name='search'
        onChange={(e)=>handleSearch(e.target.value)}
      />
    </Container>
    
    {
    //(() => console.log(users.length))
      (users.length) ?
      <Grid container spacing={4}>
      {
        users.map(user => (
        <Grid item xs={12} sm={6} md={4} key={user._id}>
          <Card sx={{ maxWidth: 345 }}>
          {
            (user.photo) ?
            <CardMedia
              component="img"
              height="200"
              image = {`/uploads/${user.photo}`}
              alt="user"
            />:
            <CardMedia
              component="img"
              height="200"
              image = {require('../userimg.jpg')}
              alt="user"
            />
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.rollno}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.emailID}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant='contained' color='success' component={Link} to={`/edit/${user._id}`}>Edit</Button>
            <Button size="small" variant='contained' color='error' onClick={() => deleteStudent(user._id)}>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    ))
    }
  </Grid>
  :
  <Typo variant="body2" color="text.secondary">
    No Students in the Database
  </Typo>
  }
  </>
  )
}

export default AllStudents