import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import "./ContactCard.scss";

export default function ContactCard() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: { lg: '35ch'}, display: 'flex', flexDirection: 'column', backgroundColor: 'white' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Box sx={{ 
            display: 'flex'
        }}>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          multiline
          maxRows={4}
        />
        </Box>
        <TextField
          id="outlined-textarea"
          label="Email"
          sx={{ 
            minWidth: { lg: '42vw' }
          }}
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="Subject"
          sx={{ 
            minWidth: { lg: '42vw' },
            top: { xs: '8px', lg: '8px'}
          }}
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          sx={{ 
            minWidth: { lg: '42vw' },
            top: { xs: '17px', lg: '17px'}
          }}
          multiline
          rows={6}
          defaultValue="Write your notes or questions here..."
        />
      </div>
      <div className="conCrd">
      <button>SEND MESSAGE</button>
      </div>
    </Box>
  );
}