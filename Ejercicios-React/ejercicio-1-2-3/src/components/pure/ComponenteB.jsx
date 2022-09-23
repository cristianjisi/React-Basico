import React, { Component } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

class ComponenteB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.contacto.connected,
    };
  }

  render() {
    return (
      <div>
        {/* {console.log()} */}
        <h1>Nombre: {this.props.contacto.name}</h1>
        <h2>Apellido: {this.props.contacto.lastName}</h2>
        <h2>Email: {this.props.contacto.email}</h2>
        <h2>
          Online? :
          {this.state.online ? " Contacto En Linea" : " Contacto No Disponible"}
        </h2>
        <div>
          <button onClick={this.cambiarOnline}>Cambiar online</button>
        </div>
      </div>
    );
  }

  cambiarOnline = () => {
    this.setState((prevState) => ({
      online: !prevState.online,
    }));
  };
}
ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};
export default ComponenteB;
