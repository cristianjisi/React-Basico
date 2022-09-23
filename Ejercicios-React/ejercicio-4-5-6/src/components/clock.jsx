// Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida,
// convertidlo en un componente funcional que realice exactamente lo mismo:

import React, { useEffect, useState } from "react";
import "../styles/clock.scss";

export const Clock = () => {
  const [datos, setDatos] = useState({
    fecha: new Date().toLocaleDateString(),
    edad: 0,
    nombre: "Martin",
    apellidos: "San José",
  });

  useEffect(() => {
    const nuevaEdad = setInterval(() => {
      setDatos({ ...datos, edad: datos.edad + 1 });
    }, 1000);

    return () => {
      clearInterval(nuevaEdad);
    };
  });

  return (
    <div className="persona">
      <div className="box">
        <h1>Datos</h1>
        <h2>
          Hora Actual:
          {datos.fecha}
        </h2>
        <h3>
          Nombre: {datos.apellidos}, {datos.nombre}
        </h3>
        <h3>
          Edad: <div className="edad">{datos.edad}</div>
        </h3>
      </div>
    </div>
  );
};
