import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectHorario(props) {
  const [sector, setSector] = React.useState('');

  const handleChange = (event) => {
    setSector(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.nombre_sector}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sector}
          label={props.nombre_sector}
          onChange={handleChange}
        >
          <MenuItem value={1}>9:00</MenuItem>
          <MenuItem value={2}>10:00</MenuItem>
          <MenuItem value={3}>11:00</MenuItem>
          <MenuItem value={4}>12:00</MenuItem>
          <MenuItem value={5}>13:00</MenuItem>
          <MenuItem value={6}>14:00</MenuItem>
          <MenuItem value={7}>15:00</MenuItem>
          <MenuItem value={8}>16:00</MenuItem>
          <MenuItem value={9}>17:00</MenuItem>
          <MenuItem value={10}>18:00</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}