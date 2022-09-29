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

const GestionarBeepcons = () => {
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

  const [beepcons, setBeepcons] = useState([]);

  const beepconsCollection = collection(db, "beepcons");

  const getBeepcons = async () => {
    const data = await getDocs(beepconsCollection);
    setBeepcons(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(beepcons);
  };

  const deleteBeepcons = async (id) => {
    const beepconsDoc = doc(db, "beepcons", id);
    await deleteDoc(beepconsDoc);
    getBeepcons();
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
        deleteBeepcons(id);
        Swal.fire(
          "Eliminado!",
          "El turno ha sido borrado con exito.",
          "success"
        );
      }
    });
  };
  useEffect(() => {
    getBeepcons();
  }, []);

  return (
    <>
      <Header title=" MNBA GESTION" sections={sections} />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/NewBeepcon" className="btn btn-secondary mt-2 mb-2">
                Ir a Generar un Beepcon
              </Link>
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Nombre asignado al beepcon</th>
                  <th>Nombre creador Beepcon</th>
                  <th>Cantidad de Receptores</th>
                  <th>Piso donde trabajara el beepcon</th>
                  <th>Modelo del Beepcon</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {beepcons.map((beepcon) => (
                  <tr key={beepcon.id}>
                    <td>{beepcon.nombre_beepcon}</td>
                    <td>{beepcon.creador}</td>
                    <td>{beepcon.piso}</td>
                    <td>{beepcon.receptores}</td>
                    <td>{beepcon.modelo}</td>
                    <td>
                      <Link
                        to={`/Editar_Beepcons/${beepcon.id}`}
                        className="btn btn-light"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => {
                          confirmDelete(beepcon.id);
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

export default GestionarBeepcons;

//consultar y dar de baja visitas
