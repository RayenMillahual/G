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
  title: "Galeria de Dante x Alonso",
  description:
    "La exposición “Dante x Alonso” continúa su itinerancia por el país",
  image:
    "https://www.revistamagenta.com/wp-content/uploads/2021/12/Procesantes.jpg",
  imageText: "main image description",
  linkText: "",
};

export default function TerceraNoticia(props) {
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
              La exposición “Dante x Alonso” continúa su itinerancia por el país
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Tras exhibirse en el Museo Nacional de Bellas Artes, donde la
              visitaron más de 45.000 personas, en 2022, la muestra “Dante x
              Alonso” llega a espacios de Buenos Aires, Neuquén, Río Negro,
              Mendoza y Córdoba. La exposición, con curaduría del director del
              Bellas Artes, Andrés Duprat, es organizada junto con el Instituto
              Italiano de Cultura de Buenos Aires para conmemorar los 700 años
              del fallecimiento de Dante Alighieri (1265-1321).
            </Typography>
            <br />
            <div>
              <ReactPlayer
                url="https://youtu.be/EdYOh6H0eOQ"
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
