import React, { useState } from "react";

const MyControlledInput = () => {
	const [value, setValue] = useState("");

	return (
		<>
			<div>Input value: {value}</div>
			<input
				placeholder="Type a value"
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
		</>
	);
};
export default MyControlledInput;
