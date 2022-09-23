import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Persona } from "../../../models/persona.class";

const FormPersona = ({ add }) => {
	const nameRef = useRef("");
	const lastNameRef = useRef("");
	const onlineRef = useRef("");

	function addPersona(e) {
		e.preventDefault();
		const newPersona = new Persona(
			nameRef.current.value,
			lastNameRef.current.value,
			onlineRef.current.checked
		);
		// console.log(onlineRef);

		 add(newPersona);
	}

	return (
		<div>
			<h3>Crear una persona</h3>
			<form onSubmit={addPersona}>
				<div>
					<input
						placeholder="Escribe aquí tu nombre"
						type="text"
						ref={nameRef}
						required
					/>
					<input
						placeholder="Escribe aquí tus apellidos"
						type="text"
						ref={lastNameRef}
						required
					/>
					<span>
						{"Online? : "}
						<input type="checkbox" ref={onlineRef} />
					</span>
				</div>
				<button type="submit" className="btn btn-success btn-lg">
					Añadir
				</button>
			</form>
		</div>
	);
};

FormPersona.propTypes = {};

export default FormPersona;
