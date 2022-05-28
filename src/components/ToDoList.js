import React from "react";

const ToDoList = ({ todos }) => {
	return (
		<ul className="m-4">
			{todos.map((todo) => (
				<li key={todo}>{todo}</li>
			))}
		</ul>
	);
};

export default ToDoList;
