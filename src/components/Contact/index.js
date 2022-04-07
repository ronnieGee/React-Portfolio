import './index.css'
import{ init, sendForm } from '@emailjs/browser';
import React from 'react'
import { Box, Grid, InputAdornment, TextField, Button, makeStyles } from '@mui/material'
import { AccountCircle, Email, Send } from '@mui/icons-material'


const CallToAction = () =>{
  return(
    <>I would love to hear from you!</>
  )
}

const Contactme = () => {

  init("ybxiO1M4YKAENg0hy");
  
  const sendEmail = (event)=>{
    const serviceID = 'default_service';
    const templateID = 'portfolio_template';
    event.preventDefault();

    if(window.confirm("Send Email to Ronnie?")){
      sendForm(serviceID, templateID, '#email-form')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
       console.log('FAILED...', error);
      }) 
    }
  }

  return (
    <div>
    <CallToAction/>
    <Box 
      component="form"
      id="email-form"
      onSubmit={sendEmail}
      sx={{
        border: 1, //temporary for styling
        width: "35%",
        maxWidth: "450px",
        height: "auto",
        borderRadius: 1,
        padding: 3
      }}
      >
      <Grid container spacing={2}  direction={'column'} p={1}>
        <Grid item xs>
          <TextField
            required
            fullWidth
            color="primary" 
            className="text-field" 
            id="name"
            name="name"
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
            name="email" 
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
          name="subject"
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
          name="message"
          label="Message" 
          variant="filled"
          multiline
          rows={6}
          />
          </Grid>
      </Grid>
      <div id="button-container">
      `<Button type="submit" variant="contained" className="btn" id="sendBtn" color="info" endIcon={<Send />}>Send</Button>
      </div>
    </Box>
    </div>

  )
}

export default Contactme

