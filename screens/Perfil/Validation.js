import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <div>
<Typography variant="h6" color={'lightsteelblue'}>¿Desea cambiar alguna informacion?</Typography>
        <TextField
          Nombre
          id="filled-required"
          label="Required"
          placeholder='Nombre'
          variant="filled"
        />
    <TextField
          Apellido
          id="filled-required"
          label="Required"
          placeholder='Apellido'
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Nueva Contraseña"
          placeholder='min 7 caracteres'
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        
        <TextField
          id="filled-number"
          label="Id de gestion"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </div>
     
    </Box>
  );
}
