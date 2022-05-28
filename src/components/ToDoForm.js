import React, { useState } from "react";

const ToDoForm = ({ todos, setTodos }) => {
	const [todoInput, setTodoInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoInput !== "") {
			setTodos([...todos, todoInput]);
		}
		setTodoInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add a todo"
				value={todoInput}
				onChange={(e) => setTodoInput(e.target.value)}
				className="bg-slate-700 text-white font-bold py-2 px-4 rounded-l mt-4"
			/>
			<button
				type="submit"
				className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-r"
			>
				Add Todo +
			</button>
		</form>
	);
};

export default ToDoForm;
