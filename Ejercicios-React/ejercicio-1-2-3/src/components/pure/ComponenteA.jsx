import React from "react";
import { Contacto } from "../../models/contacto.class";
import ComponenteB from "./ComponenteB";

const ContactoComponent = () => {
  const persona = new Contacto(
    "Victor",
    "Lopez Vega",
    "victor@lopez.vega",
    false
  );

  return (
    <div>
      <ComponenteB contacto={persona}></ComponenteB>
    </div>
  );
};




export default ContactoComponent;
