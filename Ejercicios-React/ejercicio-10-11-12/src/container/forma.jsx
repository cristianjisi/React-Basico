import React from "react";

const FormaComponent = () => {
	return (
		<div>
			<div style={{ margin: "40px" }}>
				<FormaChild />
			</div>
		</div>
	);
};

const FormaChild = () => {
	const inistyle = {
		width: "255px",
		height: "255px",
		backgroundColor: "black",
		margin: "auto",
	};
	// Genera un color random en rgb(x,x,x)
	function randomColor() {
		return Math.round(
			Math.random() * (255 - 0) + 0
		);
	}
	// Asigna el color random obtenido de randomColor()
	function changeColor(e) {
		let newColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
		e.style.backgroundColor = newColor;
	}

	// Devuelve el style a su estado inicial
	function stopColor(e) {
		e.style.backgroundColor =
			inistyle.backgroundColor;
	}
	return (
		<div
			style={inistyle}
			onMouseOver={(t) => changeColor(t.target)}
			onDoubleClick={(t) => stopColor(t.target)}
			onMouseLeave={(t) => stopColor(t.target)}
		></div>
	);
};

export default FormaComponent;
