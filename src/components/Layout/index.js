import './index.css'; 
import { Container, ThemeProvider, Box } from "@mui/material";
import Sidebar from "../Sidebar/index.js";
import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = ({theme}) => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Sidebar></Sidebar>
        <Box className="page" sx={{backgroundColor:theme.palette.secondary.light}} >
          <Outlet/>
        </Box>
    </ThemeProvider>
    </>
  )
}

export default Layout;