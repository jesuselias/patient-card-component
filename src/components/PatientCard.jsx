import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.min.css';
import  foto  from '../assets/foto.png'

const PatientCard = ({ name, age, diagnosis, onDetailsClick }) => {
  return (
    <div className="card">
      {/* Imagen del paciente */}
      <div className="image-container">
        <figure className="image is-3by4">
          <img
            src={foto || "https://via.placeholder.com/400x300?text=Paciente"}
            alt="Foto del paciente"
          />
        </figure>
      </div>

      {/* Contenido del paciente */}
      <div className="patient-info">
        <h2 className="title is-4 has-text-primary">Tarjeta del Paciente</h2>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Edad:</strong> {age} años</p>
        <p><strong>Diagnóstico principal:</strong> {diagnosis}</p>

        <div className="button-container">
          <button
            className="button is-link"
            onClick={onDetailsClick}
            style={{ width: '100%' }}
          >
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};

PatientCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  diagnosis: PropTypes.string.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

export default PatientCard;