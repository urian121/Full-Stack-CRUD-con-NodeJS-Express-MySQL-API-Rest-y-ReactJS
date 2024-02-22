import { useState, useEffect } from "react";
import axios from "axios";
import Titulo from "./Titulo";
import ListAlumno from "./ListAlumno";
import FormularioAlumno from "./FormularioAlumno";
import FormularioEditarAlumno from "./FormularioEditarAlumno";

/** Alertas con React Toastify */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const [alumnos, setAlumnos] = useState([]); // Para almacenar la lista de alumnos

  const [alumnoEditar, setAlumnoEditar] = useState(null); // Para almacenar la data del alumno que se va a editar
  const [showRegistroForm, setShowRegistroForm] = useState(true); //Para mostrar el formulario de acuerdo a la variable (true o false) formulario para registrar o editar

  const URL_API = "http://127.0.0.1:3000/alumnos";

  useEffect(() => {
    // Obtener lista de alumnos al cargar la página
    obtenerAlumnos();
  }, []);

  const obtenerAlumnos = async () => {
    try {
      const response = await axios.get(URL_API);
      setAlumnos(response.data);
    } catch (error) {
      console.error("Error al obtener alumnos:", error);
    }
  };

  const eliminarAlumno = async (id) => {
    try {
      const response = await axios.delete(`${URL_API}/${id}`);
      console.log("Alumno eliminado:", response.data);
      toast.error("Alumno eliminado correctamente.");
      // Actualizar la lista de alumnos
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al eliminar alumno:", error);
    }
  };

  const obtenerDatosAlumno = async (id) => {
    try {
      const response = await axios.get(`${URL_API}/${id}`);
      console.log("datos del alumno:", response.data);
      setShowRegistroForm(false);
      setAlumnoEditar(response.data); // Almacenar los datos del alumno
    } catch (error) {
      console.error("Error al actualizar el alumno:", error);
    }
  };

  const agregarAlumno = async (nuevoAlumno) => {
    console.log(nuevoAlumno);
    try {
      const response = await axios.post(URL_API, nuevoAlumno);
      toast.success("Alumno registrado correctamente.");
      console.log("Alumno agregado:", response.data);
      // Actualizar la lista de alumnos
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al agregar alumno:", error);
    }
  };

  const handleActualizarAlumno = async (datosAlumno) => {
    try {
      console.log("Información del Alumno a actualizar:", datosAlumno);
      // Realizar la solicitud PUT al backend
      const response = await axios.put(
        `${URL_API}${datosAlumno.id}`,
        datosAlumno
      );
      console.log("Respuesta de la API:", response.data);
      toast.success("Alumno actualizado correctamente.");
      // Actualizar la lista de alumno
      obtenerAlumnos();
    } catch (error) {
      console.error("Error al actualizar los datos del alumno:", error);
      // Manejar el error si es necesario
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="row justify-content-md-center">
        <div className="col-md-5">
          <Titulo
            estado={showRegistroForm}
            setShowRegistroForm={setShowRegistroForm}
          />
          {/* Formulario para registrar o editar */}
          {showRegistroForm ? (
            <FormularioAlumno agregarAlumno={agregarAlumno} />
          ) : (
            <FormularioEditarAlumno
              alumno={alumnoEditar}
              handleActualizarAlumno={handleActualizarAlumno}
            />
          )}
        </div>

        {/* Lista de Alumnos */}
        <ListAlumno
          alumnos={alumnos}
          eliminarAlumno={eliminarAlumno}
          obtenerDatosAlumno={obtenerDatosAlumno}
        />
      </div>
    </>
  );
};

export default HomePage;
