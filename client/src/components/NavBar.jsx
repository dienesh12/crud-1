import React from 'react'
import {Toolbar,AppBar,styled} from '@mui/material'
import {NavLink} from 'react-router-dom'

const Header = styled(AppBar)`
background: black
`

const Tab = styled(NavLink)`
margin-right:20px;
color: white;
text-decoration: none
`

const NavBar = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Tab to='/'>Student Details</Tab>
            <Tab to='/all'>All Students</Tab>
            <Tab to='/add'>Add Student</Tab>
        </Toolbar>
    </Header>
  )
}

export default NavBar