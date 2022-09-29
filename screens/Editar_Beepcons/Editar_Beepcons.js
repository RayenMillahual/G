import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../src/firebaseconfig/firebase";
import Box from "@mui/material/Box";
import Footer from "../PrincipalScreen/footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { async } from "@firebase/util";
import Swal from "sweetalert2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import withReactContent from "sweetalert2-react-content";

const Editar_Beepcons = (props) => {
  const MySwal = withReactContent(Swal);
  const [nombre_beepcon, setnombre_beepcon] = useState("");
  const [creador, setCreador] = useState("");

 
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

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const beepcon = doc(db, "beepcons", id);
    const data = {
        nombre_beepcon: nombre_beepcon,
        creador: creador,
        piso: piso,
        receptores: receptores,
        modelo: modelo,
    };
    await updateDoc(beepcon, data);
    navigate("/GestionarBeepcons");
  };

  const getProductById = async (id) => {
    const beepcon = await getDoc(doc(db, "beepcons", id));
    if (beepcon.exists()) {
      setnombre_beepcon(beepcon.data().nombre_beepcon);
      setCreador(beepcon.data().creador);
      setPiso(beepcon.data().piso);
      setReceptores(beepcon.data().receptores);
      setModelo(beepcon.data().modelo);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error de grilla",
        text: "Ha ocurrido un error al seleccionar las grillas!",
        footer:
          '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Solucionar el error!</a>',
      });
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);

  return (
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
      <form onSubmit={update}>
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
  );
};

export default Editar_Beepcons;
