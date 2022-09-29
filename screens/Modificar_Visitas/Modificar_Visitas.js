import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../../src/firebaseconfig/firebase";
import Header from "../PrincipalScreen/Header";
import Footer from "../PrincipalScreen/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";
import { Button } from "@mui/material";
const MySwal = withReactContent(Swal);

const Modificar_Visitas = () => {
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

  const [visitas, setVisitas] = useState([]);

  const visitasCollection = collection(db, "visitas");

  const getVisitas = async () => {
    const data = await getDocs(visitasCollection);
    setVisitas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(visitas);
  };

  const deleteVisitas = async (id) => {
    const visitasDoc = doc(db, "visitas", id);
    await deleteDoc(visitasDoc);
    getVisitas();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el turno?",
      text: "El cambio es IRREVERSIBLE ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, quiero eliminarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteVisitas(id);
        Swal.fire(
          "Eliminado!",
          "El turno ha sido borrado con exito.",
          "success"
        );
      }
    });
  };
  useEffect(() => {
    getVisitas();
  }, []);

  return (
    <>
      <Header title=" MNBA GESTION" sections={sections} />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/Visitas" className="btn btn-secondary mt-2 mb-2">
                Ir a Sacar un Turno
              </Link>
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Nombre y Apellido</th>
                  <th>Dni</th>
                  <th>Idioma</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Elegir Horario Disponible</th>
                  <th>Elegir Fecha Disponible</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {visitas.map((visita) => (
                  <tr key={visita.id}>
                    <td>{visita.nombre_y_apellido}</td>
                    <td>{visita.dni}</td>
                    <td>{visita.idioma}</td>
                    <td>{visita.nacimiento}</td>
                    <td>{visita.horario}</td>
                    <td>{visita.fecha}</td>
                    <td>
                      <Link
                        to={`/Editar_Visitas/${visita.id}`}
                        className="btn btn-light"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => {
                          confirmDelete(visita.id);
                        }}
                        className="btn btn-danger"
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default Modificar_Visitas;

//consultar y dar de baja visitas
