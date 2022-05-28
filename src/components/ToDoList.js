import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos }) => {
	return (
		<ul className="m-4">
			{todos.map((todo) => (
				<ToDo todo={todo} todos={todos} setTodos={setTodos} />
			))}
		</ul>
	);
};

export default ToDoList;
