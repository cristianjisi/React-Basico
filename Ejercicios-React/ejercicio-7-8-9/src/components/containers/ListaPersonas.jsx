// Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida,
// convertidlo en un componente funcional que realice exactamente lo mismo:

import React, { useEffect, useState } from "react";
import { Persona } from "../../models/persona.class";
import "../../styles/persona.scss";
import FormPersona from "../pure/forms/formPersona";
import PersonaComponent from "../pure/persona";

export const ListaPersonas = () => {
	const persona1 = new Persona("Iciar", "Fernandez", false);
	const persona2 = new Persona("Jorge", "De Lucia", true);
	const persona3 = new Persona("Iciar", "Garcia", true);

	const [personas, setPersonas] = useState([persona1, persona2, persona3]);

	function changeOnline(persona) {
		const i = personas.indexOf(persona);
		const tempPersona = [...personas];
		tempPersona[i].online = !tempPersona[i].online;
		setPersonas(tempPersona);
	}

	function removePersona(persona) {
		const i = personas.indexOf(persona);
		const tempPersona = [...personas];
		tempPersona.splice(i, 1);
		setPersonas(tempPersona);
	}
	function addPersona(persona){
		const tempPersona = [...personas]
		tempPersona.push(persona)
		setPersonas(tempPersona)
	}

	return (
		<div className="listaPersonas">
			<table className="table table-striped">
				<caption
					style={{
						captionSide: "top",
						textAlign: "center",
						color: "black",
						fontSize: "18pt",
					}}
				>
					Lista de personas
				</caption>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellidos</th>
						<th scope="col">Online</th>
						<th colSpan="2" scope="col">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					{/* Lista de personas */}
					{personas.map((persona, index) => {
						return (
							<PersonaComponent
								key={index}
								persona={persona}
								index={index}
								online={changeOnline}
								remove={removePersona}
							/>
						);
					})}
				</tbody>
			</table>
			<FormPersona add={addPersona}/>
		</div>
	);
};
