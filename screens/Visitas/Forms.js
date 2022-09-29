import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Forms(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-basic"
        label={props.nombre}
        variant="filled"
        value={props.valor}
        onChange={(e) => props.settear (e.target.value)}
        type="props.tipo"
        className="form-control"
        minlength={props.min}
        maxlength={props.max}
      />
    </Box>
  );
}
