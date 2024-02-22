import connection from "./configBD/ConfigBD.js";

export const listaAlumnos = async () => {
  try {
    const [rows] = await connection.execute("SELECT * FROM tbl_alumnos");
    return rows;
  } catch (error) {
    throw { status: 500, message: "Error al obtener estudiantes" };
  }
};

// Función para obtener un alumno por su ID
export const obtenerAlumnoPorId = async (id) => {
  try {
    // Consulta el alumno en la base de datos por su ID
    const [rows] = await connection.execute(
      "SELECT * FROM tbl_alumnos WHERE id = ?",
      [id]
    );
    return rows;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la consulta
    throw { status: 500, message: "Error al obtener alumno por ID" };
  }
};

// Función para crear un nuevo alumno
export const crearAlumno = async (datosAlumno) => {
  const {
    nombre_alumno,
    email_alumno,
    curso_alumno,
    sexo_alumno,
    habla_ingles,
  } = datosAlumno;
  try {
    // Realiza la inserción del nuevo alumno en la base de datos
    await connection.execute(
      "INSERT INTO tbl_alumnos (nombre_alumno, email_alumno, curso_alumno, sexo_alumno, habla_ingles) VALUES (?, ?, ?, ?, ?)",
      [nombre_alumno, email_alumno, curso_alumno, sexo_alumno, habla_ingles]
    );
  } catch (error) {
    // Maneja cualquier error que ocurra durante la inserción
    throw { status: 500, message: "Error al crear el alumno" };
  }
};

// Función para actualizar un alumno
export const actualizarAlumno = async (id, datosAlumno) => {
  const {
    nombre_alumno,
    email_alumno,
    curso_alumno,
    sexo_alumno,
    habla_ingles,
  } = datosAlumno;
  try {
    // Realiza la actualización del alumno en la base de datos
    await connection.execute(
      "UPDATE tbl_alumnos SET nombre_alumno = ?, email_alumno = ?, curso_alumno = ?, sexo_alumno = ?, habla_ingles = ? WHERE id = ?",
      [nombre_alumno, email_alumno, curso_alumno, sexo_alumno, habla_ingles, id]
    );
  } catch (error) {
    // Maneja cualquier error que ocurra durante la actualización
    throw { status: 500, message: "Error al actualizar el alumno" };
  }
};

// Función para eliminar un alumno por su ID
export const eliminarAlumno = async (id) => {
  try {
    // Realiza la eliminación del alumno en la base de datos
    await connection.execute("DELETE FROM tbl_alumnos WHERE id = ?", [id]);
  } catch (error) {
    // Maneja cualquier error que ocurra durante la eliminación
    throw { status: 500, message: "Error al eliminar el alumno" };
  }
};
