import './index.css'

import React from 'react'
import { Box, Grid, InputAdornment, TextField, Button, makeStyles } from '@mui/material'
import { AccountCircle, Email, Send } from '@mui/icons-material'


const CallToAction = () =>{
  return(
    <>I would love to hear from you!</>
  )
}

const Contactme = () => {
  return (
    <div>
    <CallToAction/>
    <Box 
      component="form"
      sx={{
        border: 1, //temporary for styling
        width: "35%",
        maxWidth: "450px",
        height: "auto",
        borderRadius: 0.5,
      }}
      >
      <Grid container spacing={1}  direction={'column'} p={1}>
        <Grid item xs>
          <TextField
            required
            fullWidth
            color="primary" 
            className="text-field" 
            id="name" 
            label="Name" 
            variant="filled"
            InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                  <AccountCircle/>
                </InputAdornment>
              )
            }} />
          </Grid>
          <Grid item xs>
            <TextField 
            fullWidth
            color="primary" 
            className="text-field" 
            id="email" 
            label="Email Address" 
            variant="filled" 
            InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                  <Email/>
                </InputAdornment>
              )
            }} />
          </Grid>
          <Grid item xs >
          <TextField 
          fullWidth
          color="primary" 
          className="text-field" 
          id="subject" 
          label="Subject" 
          variant="filled" 
          />
          </Grid>
          <Grid item xs={6}>
          <TextField 
          fullWidth
          color="primary" 
          className="text-field" 
          id="message" 
          label="Message" 
          variant="filled"
          multiline
          rows={6}
          maxRows={8}
          />
          </Grid>

      </Grid>
      <Button variant="contained" id="sendBtn" color="info" endIcon={<Send />}>Send</Button>
    </Box>
    </div>

  )
}

export default Contactme

