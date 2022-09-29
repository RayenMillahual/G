import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../PrincipalScreen/Header";
import Footer from "../PrincipalScreen/footer";
import Appdos from "../../src/Appdos";
import RadioButtons from "./RadioButtons";

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
const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Galeria(props) {
  return (
    <ThemeProvider theme={theme}>
      <Header title=" MNBA GESTION" sections={sections} />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Seccion de planos y folletos
            </Typography>
            <Typography
              color={"lightsteelblue"}
              variant="h5"
              align="center"
              paragraph
            >
              ¡Bienvenido/a puedes subir planos como tambien los folletos!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      color={"black"}
                      component="h2"
                    >
                      Selecciona un archivo
                    </Typography>
                    <br />
                    <Appdos
                      component="img"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                    ></Appdos>
                    <br />
                  </CardContent>
                  <br />
                  <RadioButtons></RadioButtons>
                  <Typography mt={1} variant="h7">
                    Fecha de actualizacion:
                  </Typography>

                  <input type={"datetime-local"}></input>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Footer
            title="Museo Nacional de Bellas Artes"
            description="Argentina Presidencia"
          />
        </Container>
      </main>
    </ThemeProvider>
  );
}
