import React, { useState } from "react";

const List = () => {
	const [arreglo, setArreglo] = useState([]);
	return (
		<div id="primerDiv">
			<h1>todos</h1>
			<div id="segDiv">
				<input
					type="text"
					placeholder="Ingrese tarea"
					onChange={() => {}}
				/>
				<button
					type="submit"
					onClick={() => {
						return (
							<div>
								<p>{arreglo[0]}</p>
								<button>X</button>
							</div>
						);
					}}>
					Submit
				</button>
			</div>
		</div>
	);
};
export default List;
