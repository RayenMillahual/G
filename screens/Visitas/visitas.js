import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../PrincipalScreen/Header";
import Footer from "../PrincipalScreen/footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Idioma from "./idioma";
import Forms from "./Forms";
import Botones from "./Botones";
import SelectFechas from "./SelectFechas";
import SelectHorario from "./SelectHorario";
import TextField from "@mui/material/TextField";
import "./visitas.css";

import { Navigate, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../src/firebaseconfig/firebase";
import { async } from "@firebase/util";

const sections = [
  { title: "Inicio", url: "/" },
  { title: "Galeria", url: "/Galeria" },
  { title: "Generar Turnos", url: "/Visitas" },
  { title: "Consultar Turnos", url: "/Modificar_Visitas" },
  { title: "Generar Beepcon", url: "/NewBeepcon" },
  { title: "Gestionar Beepcons", url: "/GestionarBeepcons" },
  { title: "Perfil", url: "/Perfil" },
  // { title: "Home", url: "/Home" },
];

const theme = createTheme();

export default function Visitas(props) {
  const [nombre_y_apellido, setNombre_y_apellido] = useState("");
  const [dni, setDni] = useState(0);
  const [nacimiento, setNacimiento] = useState("");

  const visitasCollection = collection(db, "visitas");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await addDoc(visitasCollection, {
      nombre_y_apellido: nombre_y_apellido,
      dni: dni,
      idioma: idioma,
      nacimiento: nacimiento,
      horario: horario,
      fecha: fecha,
    });
    navigate("/Modificar_Visitas");
  };
  const [fecha, setFecha] = useState("");
  const handleChange = (event) => {
    setFecha(event.target.value);
    (e) => setFecha(e.target.value);
  };

  const [horario, setHorario] = useState("");
  const handleChangeHora = (event) => {
    setHorario(event.target.value);
    {
      (e) => setHorario(e.target.value);
    }
  };

  const [idioma, setIdioma] = useState("");
  const handleChangeIdioma = (event) => {
    setIdioma(event.target.value);
    {
      (e) => setIdioma(e.target.value);
    }
  };


  return (
    <main>
      <Header title=" MNBA GESTION" sections={sections} />
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Programar Visitas Y Recorridos Guiados
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            En esta seccion se pueden programar las visitas y los recorridos
            guiados ya sea por nuestros guias o por los beepcons
          </Typography>
          <form onSubmit={store}>
            <div className="mb-3">
              <label className="form-label">Nombre y Apelllido</label>
              <input
                value={nombre_y_apellido}
                onChange={(e) => setNombre_y_apellido(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">DNI</label>
              <input
                value={dni}
                maxLength={8}
                minLength={7}
                onChange={(e) => setDni(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <br /> <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Elegir Idioma para la funcion
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={idioma}
                  label="Elegir Idioma para la funcion"
                  onChange={handleChangeIdioma}
                >
                  <MenuItem value={"Español"}>Español</MenuItem>
                  <MenuItem value={"Ingles"}>Ingles</MenuItem>
                  <MenuItem value={"Frances"}>Frances</MenuItem>
                  <MenuItem value={"Italiano"}>Italiano</MenuItem>
                  <MenuItem value={"Japones"}>Japones</MenuItem>
                  <MenuItem value={"Chino"}>Chino</MenuItem>
                  <MenuItem value={"Coreano"}>Coreano</MenuItem>
                  <MenuItem value={"Aleman"}>Aleman</MenuItem>
                  <MenuItem value={"Portugues"}>Portugues</MenuItem>
                  <MenuItem value={"Arabe"}>Arabe</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br /> <br />
            <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
            <br />
            <input type={'date'}
            className="form-control"
            onChange={(e) => setNacimiento(e.target.value)}
            value={nacimiento}
            >
            </input>
            </div>
            <br /> <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Elegir fechas disponibles
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fecha}
                  label="Elegir fechas disponibles"
                  onChange={handleChange}
                >
                  <MenuItem value={"12/11"}>12/11</MenuItem>
                  <MenuItem value={"09/12"}>09/12</MenuItem>
                  <MenuItem value={"18/10"}>18/10</MenuItem>
                  <MenuItem value={"30/10"}>30/10</MenuItem>
                  <MenuItem value={"20/11"}>20/11</MenuItem>
                  <MenuItem value={"21/11"}>21/11</MenuItem>
                  <MenuItem value={"22/11"}>22/11</MenuItem>
                  <MenuItem value={"23/11"}>23/11</MenuItem>
                  <MenuItem value={"24/11"}>24/11</MenuItem>
                  <MenuItem value={"25/11"}>25/11</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br /> <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Elegir horarios disponibles
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={horario}
                  label="Elegir horarios disponibles"
                  onChange={handleChangeHora}
                >
                  <MenuItem value={"9:00"}>9:00</MenuItem>
                  <MenuItem value={"10:00"}>10:00</MenuItem>
                  <MenuItem value={"11:00"}>11:00</MenuItem>
                  <MenuItem value={"12:00"}>12:00</MenuItem>
                  <MenuItem value={"13:00"}>13:00</MenuItem>
                  <MenuItem value={"14:00"}>14:00</MenuItem>
                  <MenuItem value={"15:00"}>15:00</MenuItem>
                  <MenuItem value={"16:00"}>16:00</MenuItem>
                  <MenuItem value={"17:00"}>17:00</MenuItem>
                  <MenuItem value={"18:00"}>18:00</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br /> <br />
            <button type="submit" className="btn btn-primary">
              CARGAR TURNO
            </button>
          </form>
          <Footer
            title="Museo Nacional de Bellas Artes"
            description="Argentina Presidencia"
          />
        </Container>
      </Box>
    </main>
  );
}
