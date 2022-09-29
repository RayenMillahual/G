import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "./screens/PrincipalScreen/Inicio/Inicio";
import Galeria from "./screens/Galeria/Galeria";
import Visitas from "./screens/Visitas/visitas";
import GestionarBeepcons from "./screens/GestionarBeepcons/GestionarBeepcons";
import Perfil from "./screens/Perfil/Perfil";
import Modificar_Visitas from "./screens/Modificar_Visitas/Modificar_Visitas";
import Editar_Visitas from "./screens/Editar_Visitas/Editar_Visitas";
import { Auth0Provider } from "@auth0/auth0-react";
import PrincipalNoticia from "./screens/Noticias/PrincipalNoticia";
import SegundaNoticia from "./screens/Noticias/SegundaNoticia";
import TerceraNoticia from "./screens/Noticias/TerceraNoticia";
import NewBeepcon from "./screens/NewBeepcon/NewBeepcon";
import Editar_Beepcons from "./screens/Editar_Beepcons/Editar_Beepcons";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Auth0Provider
      domain="dev-ym7q9bzd.us.auth0.com"
      clientId="EHZwe8ZM3rLJBRzgXWMkzRH0y6pUaPxN"
      redirectUri={window.location.origin}
    >
      <Router>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
          </Routes>
         
          <Routes>
            <Route path="/Galeria" element={<Galeria />}></Route>
          </Routes>
          <Routes>
            <Route path="/Visitas" element={<Visitas />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/GestionarBeepcons"
              element={<GestionarBeepcons />}
            ></Route>
          </Routes>
          <Routes>
            <Route path="/Perfil" element={<Perfil />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/Modificar_Visitas"
              element={<Modificar_Visitas />}
            ></Route>
          </Routes>
          <Routes>
            <Route
              path="/Editar_Visitas/:id"
              element={<Editar_Visitas />}
            ></Route>
              </Routes>
            <Routes>
            <Route path="/Editar_Beepcons/:id" element={<Editar_Beepcons />}></Route>
          </Routes>
          <Routes>
            <Route
              path="/PrincipalNoticia"
              element={<PrincipalNoticia />}
            ></Route>
          </Routes>
          <Routes>
            <Route path="/SegundaNoticia" element={<SegundaNoticia />}></Route>
          </Routes>
          <Routes>
            <Route path="/TerceraNoticia" element={<TerceraNoticia />}></Route>
          </Routes>
          <Routes>
            <Route path="/NewBeepcon" element={<NewBeepcon />}></Route>
          </Routes>
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
