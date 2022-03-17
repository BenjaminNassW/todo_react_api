import React, { useState, useEffect } from "react";

const List = () => {
	const [lista, setLista] = useState([]);
	const [tarea, setTarea] = useState("");
	useEffect(() => {
		console.log(lista);

	}, [lista]);
	return (
		<div>
			<input
				placeholder="ingrese tarea"
				onChange={(e) => {
					setTarea(e.target.value);
				}}></input>
			<button
				onClick={() => {
					setLista([...lista, tarea]);
				}}>
				agregar tarea
			</button>
			<h2>
				{lista.map((tarea, i) => {
					return (
						<div key={i} className="d-flex">
							<p key={i}>{tarea}</p>
							<button
								onClick={() => {
									lista.splice(i, 1);
									setLista(lista);
								}}></button>
						</div>
					);
				})}
			</h2>
			<p>{lista.length} tareas en total</p>
		</div>
	);
};
export default List;
