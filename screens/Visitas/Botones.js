import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Botones() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button className='boton'>Guardar</Button>
      <Button className='boton'>Cancelar</Button>
    </ButtonGroup>
  );
}