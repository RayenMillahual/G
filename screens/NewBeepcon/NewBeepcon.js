import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../PrincipalScreen/Header";
import Footer from "../PrincipalScreen/footer";

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

export default function NewBeepcon(props) {
  const [nombre_beepcon, setnombre_beepcon] = useState("");
  const [creador, setCreador] = useState("");
  const beepconsCollection = collection(db, "beepcons");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await addDoc(beepconsCollection, {
      nombre_beepcon: nombre_beepcon,
      creador: creador,
      piso: piso,
      receptores: receptores,
      modelo: modelo,
    });
    navigate("/GestionarBeepcons");
  };

  const [piso, setPiso] = useState(0);
  const handleChangePiso = (event) => {
    setPiso(event.target.value);
    {
      (e) => setPiso(e.target.value);
    }
  };
  const [receptores, setReceptores] = useState(0);
  const handleChangeReceptores = (event) => {
    setReceptores(event.target.value);
    {
      (e) => setReceptores(e.target.value);
    }
  };
  const [modelo, setModelo] = useState("");
  const handleChangeModelo = (event) => {
    setModelo(event.target.value);
    {
      (e) => setModelo(e.target.value);
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
            Programar Beepcons y sus caracteristicas
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            En esta seccion se pueden asignar y crear datos para beepcons
          </Typography>
          <form onSubmit={store}>
            <div className="mb-3">
              <label className="form-label">Nombre asignado al beepcon</label>
              <input
                value={nombre_beepcon}
                onChange={(e) => setnombre_beepcon(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre creador beepcon</label>
              <input
                value={creador}
                onChange={(e) => setCreador(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Cantidad de Receptores
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={receptores}
                  label="Cantidad de Receptores"
                  onChange={handleChangeReceptores}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br />
            <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Piso donde trabajara el beepcon
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={piso}
                  label="Piso donde trabajara el beepcon"
                  onChange={handleChangePiso}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br />
            <br />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Seleccionar modelo
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={modelo}
                  label="Seleccionar modelo"
                  onChange={handleChangeModelo}
                >
                  <MenuItem value={"SIVO"}>SIVO</MenuItem>
                  <MenuItem value={"Super Cor"}>Super Cor</MenuItem>
                  <MenuItem value={"Blind Explorer"}>Blind Explorer</MenuItem>
                  <MenuItem value={"D.O.C.E"}>D.O.C.E</MenuItem>
                  <MenuItem value={"Amazon Alexa"}>Amazon Alexa</MenuItem>
                  <MenuItem value={"Ilumina"}>Ilumina</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <br /> <br />
            <button type="submit" className="btn btn-primary">
              CARGAR BEEPCON
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
