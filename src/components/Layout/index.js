import './index.css'; 
import { Container, ThemeProvider, Box } from "@mui/material";
import Sidebar from "../Sidebar/index.js";
import React from 'react'

const Layout = ({theme}) => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Sidebar></Sidebar>
        <Box className="page" sx={{backgroundColor:theme.palette.secondary.light}} >
            {/* <Outlet /> */}
          <span> </span>
        </Box>
    </ThemeProvider>
    </>
  )
}

export default Layout;