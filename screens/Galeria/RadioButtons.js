import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function ErrorRadios() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(
    "Los cambios se guardan automaticamente"
  );

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "1") {
      setHelperText("Piso 1 seleccionado!");
      setError(false);
    } else if (value === "2") {
      setHelperText("Piso 2 seleccionado!");
      setError(true);
    } else if (value === "3") {
      setHelperText("Piso 3 seleccionado!");
      setError(true);
    } else {
      setHelperText("Por favor selecciona una opcion");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Piso:</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </form>
  );
}
