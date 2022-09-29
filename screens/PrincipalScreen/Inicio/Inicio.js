import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Header";
import MainFeaturedPost from "../MainFeaturedPost";
import FeaturedPost from "../FeaturedPost";
import Main from "../main";
import Sidebar from "../Sidebar";
import Footer from "../footer";
import { Instagram, WhatsApp } from "@mui/icons-material";

const sections = [
  { title: "Inicio", url: "/" },
  { title: "Galeria", url: "/Galeria" },
  { title: "Generar Turno", url: "/Visitas" },
  { title: "Consultar Turnos", url: "/Modificar_Visitas" },
  { title: "Generar Beepcon", url: "/NewBeepcon" },
  { title: "Gestionar Beepcons", url: "/GestionarBeepcons" },
  { title: "Perfil", url: "/Perfil" },
];

const mainFeaturedPost = {
  title: "Carmelo Arden Quin, en la trama del arte constructivo",
  description:
    "La exposicion reune un centenar de obras del artista uruguayo y mas de 50 trabajos de otros creadores",
  image:
    "https://www.argentina.gob.ar/sites/default/files/52272570201_97efbc1f8f_c.jpg",
  imageText: "main image description",
  linkText: "Seguir Leyendo…",
};

const featuredPosts = [
  {
    title: "Informacion De Mostrario",
    date: "Mayo 12",
    description: "Galeria de Rob.Verf Vanitas",
    image:
      "https://www.argentina.gob.ar/sites/default/files/2022/08/whatsapp_image_2022-08-25_at_1.48.32_pm_10.jpeg",
    imageLabel: "Image Text",
    url: "/SegundaNoticia",
  },
  {
    title: "Informacion De Muestras",
    date: "Mayo 11",
    description: "Galeria de Dante x Alonso",
    image:
      "https://www.revistamagenta.com/wp-content/uploads/2021/12/Procesantes.jpg",
    imageLabel: "Image Text",
    url: "/TerceraNoticia",
  },
];

const sidebar = {
  title: "About",
  description:
    "La informacion Mostrada pertenece a la fecha del mes de mayo del año 2022, para informacion mas antigua recurrir a los links de abajo.",
  archives: [
    { title: "Marzo 2022", url: "#" },
    { title: "Febrero 2022", url: "#" },
    { title: "Enero 2022", url: "#" },
    { title: "Novembiembre 2021", url: "#" },
    { title: "Octubre 2021", url: "#" },
    { title: "Septiembre 2021", url: "#" },
    { title: "Agosto 2021", url: "#" },
    { title: "Julio 2021", url: "#" },
    { title: "Junio 2021", url: "#" },
    { title: "Mayo 2021", url: "#" },
    { title: "Abril 2021", url: "#" },
  ],
  social: [
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/ingles_nqn_r/",
    },
    { name: "Twitter", icon: TwitterIcon, link: "twitter.com" },
    { name: "Facebook", icon: FacebookIcon, link: "facebook.com" },
    {
      name: "WhatsApp",
      icon: WhatsApp,
      link: "https://web.whatsapp.com/?post_logout=1",
    },
  ],
};

const theme = createTheme();

export default function Inicio() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title=" MNBA GESTION" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Informacion para presentar a usuarios" />
            <Sidebar
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Museo Nacional de Bellas Artes"
        description="Argentina Presidencia"
      />
    </ThemeProvider>
  );
}
