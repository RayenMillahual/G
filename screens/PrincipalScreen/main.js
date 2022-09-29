import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactPlayer from "react-player";

function Main(props) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <br />
      <div>
        <ReactPlayer
          url="https://youtu.be/ZcymbRu0qHg"
          className="react-player"
          playing
          width="640px"
          height="360px"
        />
      </div>
      <br />
      <Typography variant="h5" gutterBottom>
        Historia del MNBA del Neuquen
      </Typography>
      <Typography variant="h6" gutterBottom>
        El MNBA Neuquén o Museo Nacional de Bellas Arte Neuquén es la única sede
        en el interior de la Argentina en la cual se exhiben obras del
        patrimonio del Museo Nacional de Bellas Artes. Comenzó a funcionar en su
        sede provisoria el 15 de diciembre de 2000, con una exposición del
        artista Julio Le Parc. La sede actual fue inaugurada el 12 de septiembre
        de 2004 en la ciudad de Neuquén. El edificio fue proyectado por el
        arquitecto Mario Roberto Álvarez, siendo premiado en la Bienal Nacional
        de Arquitectura 2004. En sus salas se exhibe en forma permanente obras
        del Patrimonio Nacional, que abarca desde el Renacimiento al
        Impresionismo, incluyendo el Clasicismo Español, las Escuelas Holandesa
        e Inglesa, el Romanticismo y el Realismo; sumado a colecciones
        nacionales integradas por obras de los Precursores, la Generación del
        ´80, el Grupo de París y las Vanguardias. También se realizan muestras
        temporarias de artistas nacionales e internacionales del arte universal.
      </Typography>
      <Divider />
    </Grid>
  );
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Main;
