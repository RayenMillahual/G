import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from "../PrincipalScreen/Header";
import Footer from "../PrincipalScreen/footer";
import ValidationTextFields from "./Validation";
import './perfil.css';
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
export default function Perfil() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <ThemeProvider theme={theme}>
        <Header title=" MNBA GESTION" sections={sections} />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography  color={"cornflowerblue"}component="h1" variant="h4" sm={{ mt: 4, mb: 1 }}>
              DATOS PERSONALES
            </Typography>
            <Box component="form" noValidate sx={{ mt: 5, mb: 2 }}>
            <Grid container spacing={2}>
                  <img  className="foto" src={user.picture} />
                </Grid>
                <br />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                <TextField
                    id="filled-basic"
                    label="Nombre"
                    variant="filled"
                    value={user.given_name}
                    type="text"
                    className="form-control"
                  >
                   {user.given_name}
                  </TextField>
                </Grid>
          
                <Grid item xs={12} sm={12}>
                <TextField
                    id="filled-basic"
                    label="Apellido"
                    variant="filled"
                    value={user.family_name}
                    type="text"
                    className="form-control"
                  >
                    {user.family_name}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={12}>
                <TextField
                    id="filled-basic"
                    label="Correo Electronico"
                    variant="filled"
                    value={user.email}
                    type="text"
                    className="form-control"
                  >
                    {user.email}
                  </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                <TextField
                    id="filled-basic"
                    label="Contraseña Actual"
                    variant="filled"
                    type="password"
                    className="form-control"
                  >
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                    id="filled-basic"
                    label="Contraseña Nueva"
                    variant="filled"
                    type="password"
                    className="form-control"
                  >
                  </TextField>
                </Grid>
                  <Grid item xs={12} sm={12}>
              <Button className="boton" variant="outlined" startIcon={<DeleteIcon />}>
                               Eliminar
              </Button>
              <Button variant="contained" endIcon={<CheckCircleIcon/>}>
                  Guardar
              </Button>
              </Grid>
              </Grid>
            </Box>
          </Box>
          <Footer
            title="Museo Nacional de Bellas Artes"
            description="Argentina Presidencia"
          />
        </Container>
      </ThemeProvider>
    )
  );
}
