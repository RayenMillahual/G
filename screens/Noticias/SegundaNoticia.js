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
  { title: "Generar Turnos", url: "/Visitas" },
  { title: "Consultar Turnos", url: "/Modificar_Visitas" },
  { title: "Generar Beepcon", url: "/NewBeepcon" },
  { title: "Gestionar Beepcons", url: "/GestionarBeepcons" },
  { title: "Perfil", url: "/Perfil" },
  // { title: "Home", url: "/Home" },
];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const mainFeaturedPost = {
  title: "Rob Verf. Vanitas",
  description:
    "Con curaduría de Marta Penhos, el artista holandés exhibe una serie de obras en diálogo con pinturas del Museo, que indagan sobre la generación de basura, el consumo y el descarte.",
  image:
    "https://www.argentina.gob.ar/sites/default/files/2022/08/whatsapp_image_2022-08-25_at_1.48.32_pm_10.jpeg",
  imageText: "main image description",
  linkText: "",
};

export default function SegundaNoticia(props) {
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
              Rob Verf. Vanitas
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              El Museo Nacional de Bellas Artes inaugura, el martes 30 de
              agosto, a las 19, “Rob Verf. Vanitas”, una muestra con curaduría
              de Marta Penhos que reúne en el segundo piso una serie de obras
              del artista nacido en los Países Bajos, pero de larga trayectoria
              en la Argentina, vinculadas a la idea de la “vanitas”
              contemporánea, en diálogo con piezas históricas de la colección
              institucional. “Esta exposición ‒afirma el director del Bellas
              Artes, Andrés Duprat‒ revela las indagaciones conceptuales y
              pictóricas de Verf sobre un aspecto característico de la
              modernidad en las urbes, la generación de basura, a través de una
              mirada de rayos x que intenta desentrañar sus incógnitas”.
            </Typography>
            <br />
            <div>
              <ReactPlayer
                url="https://youtu.be/zSDUTT2rQRQ"
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
