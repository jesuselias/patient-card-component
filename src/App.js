import React from 'react';
import PatientCard from './components/PatientCard';
import './App.css';

function App() {
  const handleDetailsClick = () => {
    alert('Mostrando más detalles del paciente.');
  };

  return (
    <div className="container">
      <PatientCard
        name="Juan Pérez"
        age={45}
        diagnosis="Hipertensión"
        onDetailsClick={handleDetailsClick}
      />
    </div>
  );
}

export default App;

