import React, { useState, useEffect } from "react";

const List = () => {
	const [lista, setLista] = useState([]);
	const [tarea, setTarea] = useState("");

	return (
		<div>
			<input
				value={tarea}
				placeholder="ingrese tarea"
				onChange={(e) => {
					setTarea(e.target.value);
				}}></input>
			<button
				onClick={() => {
					setLista([...lista, tarea]);
					setTarea("");
				}}>
				agregar tarea
			</button>
			<h2>
				{lista.map((tarea, i) => {
					return (
						<div id="borrar" key={i} className="d-flex mydivouter">
							<p key={i}>{tarea}</p>
							<button
								className="mybuttonoverlap"
								id="equis"
								onClick={() => {
									const result = lista.filter(checkTarea);

									function checkTarea(value, index) {
										return index !== i;
									}
									setLista(result);
								}}>
								X
							</button>
						</div>
					);
				})}
			</h2>

			{lista.length == 0 ? (
				""
			) : (
				<p>{lista.length + " tareas en total"}</p>
			)}
		</div>
	);
};
export default List;
