import React from "react";

const ToDo = ({ todo, todos, setTodos }) => {
	const deleteTodo = () => {
		setTodos(todos.filter((item) => item !== todo));
	};

	return (
		<div>
			<li key={todo}>
				{todo}
				<button
					onClick={deleteTodo}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-4 rounded"
				>
					Delete
				</button>
			</li>
		</div>
	);
};

export default ToDo;
