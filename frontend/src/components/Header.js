import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Tabs,Tab} from '@mui/material';

import {NavLink} from 'react-router-dom';
import logo1 from '../images/logo1.jpg';
const Header = () => {
  const[value,setValue]=useState()
  return (
    <div>
    <AppBar sx={{backgroundColor: '#cc0000'}}   position='sticky'> 
      <Toolbar>
      
      <Typography><img src={logo1} width='50'/></Typography>
        <Typography>Counselling and Visitor Management System </Typography>
        <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
        <Tab LinkComponent={NavLink} to ='/' label='Home'/>
        <Tab LinkComponent={NavLink} to ='/signin' label='Sign_In'/>
        <Tab LinkComponent={NavLink} to ='/signup' label ='Sign_Up'/>
        <Tab LinkComponent={NavLink} to ='/counsellor' label='Add Counsellor'/> 
        <Tab LinkComponent={NavLink} to ='/appointment' label='Appointment'/> 
        <Tab LinkComponent={NavLink} to ='/visitor' label='Add Visitor'/> 
        <Tab LinkComponent={NavLink} to ='/contactus' label='Contactus'/> 
        <Tab LinkComponent={NavLink} to ='/aboutus' label='Aboutus'/>
        </Tabs>
      </Toolbar>
    </AppBar>
    
    </div>
  )
}

export default Header;
