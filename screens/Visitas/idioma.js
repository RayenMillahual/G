import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Idioma() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Elige el idioma"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
            
          }}
        />
      )}
    />
  );
}
const countries = [
  { code: 'CN', label: 'China', phone: '86' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'ES', label: 'Spain', phone: '34' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'IT', label: 'Italy', phone: '39' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'PT', label: 'Portugal', phone: '351' },
];
