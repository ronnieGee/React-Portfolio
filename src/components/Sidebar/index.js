import './index.css';
import { AppBar, Box, Button, IconButton} from "@mui/material";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { Person, Home, Email, LinkedIn, YouTube, GitHub } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <>
      <Box sx={{ backgroundColor:"primary.main"}} className="nav-bar">
        <nav>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} exact="true" to="/home">
            <IconButton size="small"><Home className="nav-icon" sx={{fontSize:40}}/></IconButton>
          </NavLink>
          <NavLink exact="true" to="/about">
            <IconButton size="small"><Person className="nav-icon" sx={{fontSize:40}}/></IconButton>
          </NavLink>
          <NavLink exact="true" to="/contact">
            <IconButton size="small"><Email className="nav-icon" sx={{fontSize:40}}/></IconButton>
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ronnie-gee-alfonso/"
              rel>
                <IconButton><LinkedIn></LinkedIn></IconButton>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCECBSLSFHXIb7TMS_55-TnA"
              rel>
                <IconButton><YouTube></YouTube></IconButton>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/ronnieGee"
              rel>
                <IconButton><GitHub></GitHub></IconButton>
            </a>
          </li>
        </ul>
      </Box> 
    </>
  );
};

export default Sidebar;


