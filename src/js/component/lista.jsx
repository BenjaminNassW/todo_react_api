import React, { useState, useEffect } from "react";

const List = () => {
	const [lista, setLista] = useState([]);
	const [tarea, setTarea] = useState({ label: "", done: false });
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/benjanass")
			.then(
				(resp) => resp.json() // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			)
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				setLista(data);
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	}, []);

	return (
		<div>
			<input
				value={tarea?.label}
				placeholder="ingrese tarea"
				onChange={(e) => {
					setTarea({ label: e.target.value, done: false });
				}}
			/>
			<button
				onClick={() => {
					setLista([...lista, tarea]);
					const nuevaLista = [...lista, tarea];
					console.log(lista);
					fetch(
						"https://assets.breatheco.de/apis/fake/todos/user/benjanass",
						{
							method: "PUT",
							body: JSON.stringify(nuevaLista),
							headers: {
								"Content-Type": "application/json",
							},
						}
					)
						.then(
							(resp) => resp.json() // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						)
						.then((data) => {
							//here is were your code should start after the fetch finishes
							console.log(data); //this will print on the console the exact object received from the server
						})
						.catch((error) => {
							//error handling
							console.log(error);
						});
				}}>
				agregar tarea
			</button>
			<h2>
				{lista.map((tarea, i) => {
					return (
						<div id="borrar" key={i} className="d-flex mydivouter">
							<p key={i}>{tarea.label}</p>
							<button
								className="mybuttonoverlap"
								id="equis"
								onClick={() => {
									const result = lista.filter(checkTarea);

									function checkTarea(value, index) {
										return index !== i;
									}
									setLista(result);

									fetch(
										"https://assets.breatheco.de/apis/fake/todos/user/benjanass",
										{
											method: "PUT",
											body: JSON.stringify(result),
											headers: {
												"Content-Type":
													"application/json",
											},
										}
									)
										.then(
											(resp) => resp.json() // (returns promise) will try to parse the result as json as return a promise that you can .then for results
										)
										.then((data) => {
											//here is were your code should start after the fetch finishes
											console.log(data); //this will print on the console the exact object received from the server
										})
										.catch((error) => {
											//error handling
											console.log(error);
										});
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
