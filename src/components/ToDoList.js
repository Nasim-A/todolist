import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos }) => {
	return (
		<ul className="m-4">
			{todos.map((todo) => (
				<ToDo
					title={todo.title}
					description={todo.description}
					priority={todo.priority}
					completed={todo.completed}
					id={todo.id}
					todo={todo}
					todos={todos}
					setTodos={setTodos}
					key={todo.id}
				/>
			))}
		</ul>
	);
};

export default ToDoList;
