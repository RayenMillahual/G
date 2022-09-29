import React, { Component } from "react";
import ReactPlayer from "react-player";
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
import MainFeaturedPost from "../PrincipalScreen/MainFeaturedPost";

const sections = [
  { title: "Inicio", url: "/" },
  { title: "Galeria", url: "/Galeria" },
  { title: "Generar Turno", url: "/Visitas" },
  { title: "Consultar Turnos", url: "/Modificar_Visitas" },
  { title: "Generar Beepcon", url: "/NewBeepcon" },
  { title: "Gestionar Beepcons", url: "/GestionarBeepcons" },
  { title: "Perfil", url: "/Perfil" },
  // { title: "Home", url: "/Home" },
];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const mainFeaturedPost = {
  title: "Carmelo Arden Quin, en la trama del arte constructivo",
  description:
    "La exposicion reune un centenar de obras del artista uruguayo y mas de 50 trabajos de otros creadores",
  image:
    "https://www.argentina.gob.ar/sites/default/files/52272570201_97efbc1f8f_c.jpg",
  imageText: "main image description",
  linkText: "",
};

export default function PrincipalNoticia(props) {
  return (
    <ThemeProvider theme={theme}>
      <Header title=" MNBA GESTION" sections={sections} />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Carmelo Arden Quin, en la trama del arte constructivo
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              La exposición “Carmelo Arden Quin, en la trama del arte
              constructivo” presenta en el Museo Nacional de Bellas Artes las
              transformaciones en la obra plástica de Carmelo Arden Quin
              (Riviera, Uruguay, 1913- Savigny sur-Orge, Francia, 2010) a lo
              largo de siete décadas de trabajo y despliega las vinculaciones
              que fue tejiendo con los artistas constructivos durante su
              trayectoria.
            </Typography>
            <br />
            <div>
              <ReactPlayer
                url="https://youtu.be/Wx6N7ILJetU"
                className="react-player"
                playing
                width="640px"
                height="360px"
              />
            </div>
          </Container>
        </Box>
        <Footer
          title="Museo Nacional de Bellas Artes"
          description="Argentina Presidencia"
        />
      </main>
    </ThemeProvider>
  );
}
