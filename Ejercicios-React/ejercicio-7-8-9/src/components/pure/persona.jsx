import React from "react";
import PropTypes from "prop-types";
import { Persona } from "../../models/persona.class.js";

const PersonaComponent = ({ persona, index, online, remove }) => {
	function isConnected() {
		return (
			<span
				className="online-icon"
				style={
					persona.online
						? { background: "green" }
						: { background: "red" }
				}
			></span>
		);
	}

	function connectedButton() {
		return persona.online ? (
			<i
				onClick={() => online(persona)}
				className="bi bi-toggle-on text-success"
			></i>
		) : (
			<i
				onClick={() => online(persona)}
				className="bi bi-toggle-off text-muted "
			></i>
		);
	}

	return (
		<tr>
			<td>{index}</td>
			<th>{persona.name}</th>
			<td>{persona.lastname}</td>
			<td>{isConnected()}</td>
			<td>{connectedButton()}</td>
			<td>
				{
					<i
						onClick={() => remove(persona)}
						className="bi bi-trash"
					></i>
				}
			</td>
		</tr>
	);
};

PersonaComponent.propTypes = {
	persona: PropTypes.instanceOf(Persona).isRequired,
	online: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};

export default PersonaComponent;
