import React from "react";

const ToDo = ({
	title,
	description,
	priority,
	completed,
	id,
	todo,
	todos,
	setTodos,
}) => {
	const deleteTodo = () => {
		setTodos(todos.filter((item) => item !== todo));
	};

	const completeTodo = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	return (
		<div>
			<li>
				<div
					onClick={completeTodo}
					className="flex flex-row m-4 cursor-pointer"
				>
					<div
						className={`flex flex-auto mr-4 border-b-2 border-emerald-500 ${
							todo.completed ? "line-through" : null
						}`}
					>
						<div className="flex-1 text-left">{todo.title}</div>
						<div className="flex-1 text-left">{todo.description}</div>
						<div className="flex-1 text-left">{todo.priority}</div>
					</div>
					<button
						onClick={deleteTodo}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex-none"
					>
						Delete
					</button>
				</div>
			</li>
		</div>
	);
};

export default ToDo;
