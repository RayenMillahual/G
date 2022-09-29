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
import withReactContent from "sweetalert2-react-content";

const Editar_Visitas = (props) => {
  const MySwal = withReactContent(Swal);
  console.log("Se entro a Editar_visitas flecha");
  const [nombre_y_apellido, setNombre_y_apellido] = useState("");
  const [dni, setDni] = useState(0);
  const [nacimiento, setNacimiento] = useState(0);

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

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    console.log("Se entro a update");
    e.preventDefault();
    const visita = doc(db, "visitas", id);
    const data = {
      nombre_y_apellido: nombre_y_apellido,
      dni: dni,
      idioma: idioma,
      nacimiento: nacimiento,
      horario: horario,
      fecha: fecha,
    };
    await updateDoc(visita, data);
    navigate("/Modificar_Visitas");
  };

  const getProductById = async (id) => {
    console.log("Se entro a getproductById flecha");
    const visita = await getDoc(doc(db, "visitas", id));
    if (visita.exists()) {
      //console.log(product.data())
      console.log("visitaexiste");
      setNombre_y_apellido(visita.data().nombre_y_apellido);
      setDni(visita.data().dni);
      setFecha(visita.data().fecha);
      setHorario(visita.data().horario);
      setIdioma(visita.data().idioma);
      setNacimiento(visita.data().nacimiento);
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
    console.log("Se entro a useeffect flecha");
    getProductById(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Editar Turno</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={update}>
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
                  onChange={(e) => setDni(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>
              <br />
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
              <br />
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
              <br />
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
                MODIFICAR TURNO
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer
        title="Museo Nacional de Bellas Artes"
        description="Argentina Presidencia"
      />
    </>
  );
};

export default Editar_Visitas;
