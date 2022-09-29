import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectFechas(props) {
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
          <MenuItem value={1}>12/11</MenuItem>
          <MenuItem value={2}>09/12</MenuItem>
          <MenuItem value={3}>18/10</MenuItem>
          <MenuItem value={4}>30/10</MenuItem>
          <MenuItem value={5}>20/11</MenuItem>
          <MenuItem value={6}>21/11</MenuItem>
          <MenuItem value={7}>22/11</MenuItem>
          <MenuItem value={8}>23/11</MenuItem>
          <MenuItem value={9}>24/11</MenuItem>
          <MenuItem value={10}>25/11</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}