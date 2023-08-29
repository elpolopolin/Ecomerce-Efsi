import React, { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

const UsuarioProvider = (props) => {
  const [usuario, setUsuario] = useState({
    Nombre: "polo",
    Contrasena: "penelopez",
  });

  useEffect(() => {

  }, []); 

  return (
    <UsuarioContext.Provider value={usuario}>
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;