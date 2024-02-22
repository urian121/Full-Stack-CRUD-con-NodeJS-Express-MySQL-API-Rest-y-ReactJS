import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FormularioAlumno = ({ handleActualizarAlumno, alumno }) => {
  console.log("Llegue con el alumno: ", alumno);
  const [alumnoData, setAlumnoData] = useState({
    nombre_alumno: "",
    email_alumno: "",
    curso_alumno: "",
    sexo_alumno: "masculino",
    habla_ingles: false,
  });

  useEffect(() => {
    if (alumno) {
      setAlumnoData(alumno);
    }
  }, [alumno]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAlumnoData((prevAlumnoData) => ({
      ...prevAlumnoData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleChangeSexo = (e) => {
    alumnoData.sexo_alumno(e.target.value);
  };
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const updatedAlumno = {
      id: alumno ? alumno.id : null,
      ...alumnoData,
      habla_ingles: alumnoData.habla_ingles ? "1" : "0",
    };
    handleActualizarAlumno(updatedAlumno);
    // Limpia el formulario después de enviar
    setAlumnoData({
      nombre_alumno: "",
      email_alumno: "",
      curso_alumno: "",
      sexo_alumno: "masculino",
      habla_ingles: false,
    });
  };

  return (
    <form onSubmit={handleSubmitUpdate}>
      <div className="mb-3">
        <label className="form-label">Nombre del Alumno</label>
        <input
          type="text"
          name="nombre_alumno"
          className="form-control"
          value={alumnoData.nombre_alumno}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email del Alumno</label>
        <input
          type="text"
          name="email_alumno"
          className="form-control"
          value={alumnoData.email_alumno}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Seleccione el Curso</label>
        <select
          name="curso_alumno"
          className="form-select"
          value={alumnoData.curso_alumno}
          onChange={handleChange}
          required>
          <option value="">Seleccione el Curso</option>
          <option value="ReactJS">ReactJS</option>
          <option value="Python">Python</option>
          <option value="NodeJS">NodeJS</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Sexo del alumno</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sexo_alumno"
            id="masculino"
            value="masculino"
            checked={alumnoData.sexo_alumno === "masculino"}
            onChange={handleChangeSexo}
            required
          />
          <label className="form-check-label" htmlFor="masculino">
            Masculino
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sexo_alumno"
            id="femenino"
            value="femenino"
            checked={alumnoData.sexo_alumno === "femenino"}
            onChange={handleChangeSexo} // Aquí debe ser handleChangeSexo
          />
          <label className="form-check-label" htmlFor="femenino">
            Femenino
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">¿Hablas Inglés?</label>
        <div className="form-check form-switch">
          <input
            name="habla_ingles"
            className="form-check-input"
            type="checkbox"
            id="ingles"
            checked={alumnoData.habla_ingles}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="ingles">
            {alumnoData.habla_ingles ? "Sí" : "No"}
          </label>
        </div>
      </div>
      <div className="d-grid gap-2 mb-5">
        <button type="submit" className="btn btn-primary block btn_add">
          Actualizar datos del alumno
        </button>
      </div>
    </form>
  );
};

FormularioAlumno.propTypes = {
  handleActualizarAlumno: PropTypes.func.isRequired,
  alumno: PropTypes.object, // Datos del alumno para editar
};

export default FormularioAlumno;
