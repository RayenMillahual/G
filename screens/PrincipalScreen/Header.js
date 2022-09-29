
import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useAuth0 } from "@auth0/auth0-react";
import './logo.css';
function Header(props) {
  const { sections, title, url } = props;
  const { loginWithRedirect,logout} = useAuth0();
  return (
    
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Button variant="outlined" size="small" onClick={() => logout({ returnTo: window.location.origin })}  >
          Cerrar Sesion
        </Button>
       
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
                   <img className='logo' src="https://museos.cultura.gob.ar/media/uploads/site-31/museos_e_institutos/08-bellasartes-800x800px.png" alt="logo" width="40px" heigth="40px" />
          {title}
        </Typography>
        <Button variant="outlined" size="small" onClick={() => loginWithRedirect()} >
          Registrarse/Iniciar Sesion
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
              
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;