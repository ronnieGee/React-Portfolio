import './index.css';
import { musicPlay, musicPause } from '../music.js';
import { AppBar, Box, Button, IconButton, Tooltip} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Person, Home, Email, LinkedIn, YouTube, GitHub, MusicNote, MusicOff, Book, Work } from '@mui/icons-material';

const Sidebar = () => {

  const [music, playPause ] = useState(false);

  return (
    <>
      <Box sx={{ backgroundColor:"primary.main"}} className="nav-bar">
        <nav>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} exact="true" to="/home">
            <Tooltip title="Home Page" placement="right" arrow>
              <IconButton size="small"><Home className="nav-icon" sx={{fontSize:40}}/></IconButton>
            </Tooltip>
          </NavLink>
          <NavLink exact="true" to="/about">
            <Tooltip title="About" placement="right" arrow>
              <IconButton size="small"><Person className="nav-icon" sx={{fontSize:40}}/></IconButton>
            </Tooltip>
          </NavLink>
          <NavLink exact="true" to="/contact">
            <Tooltip title="Contact" placement="right" arrow>
              <IconButton size="small"><Email className="nav-icon" sx={{fontSize:40}}/></IconButton>
            </Tooltip>
          </NavLink>
          <NavLink exact="true" to="/blog">
            <Tooltip title="Blogs" placement="right" arrow>
              <IconButton size="small"><Book className="nav-icon" sx={{fontSize:40}}/></IconButton>
            </Tooltip>
          </NavLink>
          <NavLink exact="true" to="/projects">
            <Tooltip title="Projects" placement="right" arrow>
              <IconButton size="small"><Work className="nav-icon" sx={{fontSize:40}}/></IconButton>
            </Tooltip>
          </NavLink>
        </nav>
        
        <div id="social-media">
          <Tooltip title={!music? "Press to play music":"Pause music"}>
            <IconButton onClick={()=>{music? musicPause(): musicPlay(); playPause(!music)}}>
              {music? <MusicNote/>:<MusicOff/>}
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ronnie-gee-alfonso/"
              rel>
                <IconButton><LinkedIn/></IconButton>
            </a>
          </Tooltip>
          <Tooltip title="YouTube">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCECBSLSFHXIb7TMS_55-TnA"
              rel>
                <IconButton><YouTube/></IconButton>
            </a>
          </Tooltip>
          <Tooltip title="GitHub">
            <a
              target="_blank"
              href="https://github.com/ronnieGee"
              rel>
                <IconButton><GitHub/></IconButton>
            </a>
          </Tooltip>
        </div>
      </Box> 
    </>
  );
};

export default Sidebar;


