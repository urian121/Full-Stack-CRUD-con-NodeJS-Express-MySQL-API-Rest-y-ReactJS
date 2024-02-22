import PropTypes from "prop-types";

const Titulo = ({ estado, setShowRegistroForm }) => {
  const volver = () => {
    console.log("volver");
    setShowRegistroForm(true);
  };
  return (
    <h1 className="text-center mb-5 mt-3 font-weight-bold">
      <span style={{ float: "left" }}>
        {!estado ? (
          <button style={{ border: "none" }} onClick={volver}>
            <i className="bi bi-arrow-left"></i>
          </button>
        ) : null}
      </span>
      {estado ? "Registrar alumno" : "Editar alumno"}
      <hr />
    </h1>
  );
};

// PropTypes
Titulo.propTypes = {
  setShowRegistroForm: PropTypes.func.isRequired,
  estado: PropTypes.bool.isRequired,
};
export default Titulo;
