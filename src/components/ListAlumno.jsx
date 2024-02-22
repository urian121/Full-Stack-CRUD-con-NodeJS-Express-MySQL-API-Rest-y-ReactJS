import PropTypes from "prop-types";

const ListAlumno = ({ alumnos, eliminarAlumno, obtenerDatosAlumno }) => {
  return (
    <div className="col-md-7">
      <h1 className="text-center mb-5 font-weight-bold">
        Lista de Alumnos <span className="circulo">{alumnos.length}</span>{" "}
        <hr />
      </h1>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Alumno</th>
              <th scope="col">Curso</th>
              <th scope="col">Email</th>
              <th scope="col">Sexo</th>
              <th scope="col">Idioma</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.id}</td>
                <td>{alumno.nombre_alumno}</td>
                <td>{alumno.curso_alumno}</td>
                <td>{alumno.email_alumno}</td>
                <td>{alumno.sexo_alumno}</td>
                <td>{alumno.habla_ingles == "1" ? "Sí" : "No"}</td>
                <td>
                  <span className="flex_btns">
                    <button
                      title={`Borrar alumno ${alumno.nombre_alumno}`}
                      className="btn btn-danger"
                      style={{ marginRight: "5px" }}
                      type="button"
                      onClick={() => eliminarAlumno(alumno.id)}>
                      <i className="bi bi-trash3"></i>
                    </button>

                    <button
                      title={`Editar alumno ${alumno.nombre_alumno}`}
                      className="btn btn-success btn_add"
                      type="button"
                      onClick={() => obtenerDatosAlumno(alumno.id)}>
                      <i className="bi bi-arrow-clockwise"></i>
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ListAlumno.propTypes = {
  alumnos: PropTypes.array.isRequired,
  eliminarAlumno: PropTypes.func.isRequired,
  obtenerDatosAlumno: PropTypes.func.isRequired,
};

export default ListAlumno;
