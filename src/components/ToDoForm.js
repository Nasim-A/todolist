import React, { useState } from "react";

const ToDoForm = ({ todos, setTodos }) => {
	const [todoInput, setTodoInput] = useState("");

	const [todo, setTodo] = useState({
		title: "",
		description: "",
		priority: "Low",
		completed: false,
	});

	const handleChange = (e) => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				title: todo.title,
				description: todo.description,
				priority: todo.priority,
				id: Math.floor(Math.random() * 1000),
			},
		]);
		setTodoInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="title"
				required
				placeholder="Add a todo"
				onChange={handleChange}
				className="bg-slate-700 text-white font-bold py-2 px-4 rounded-l mt-4"
			/>
			<input
				type="text"
				name="description"
				placeholder="Description"
				onChange={handleChange}
				className="bg-slate-700 text-white font-bold py-2 px-4 mt-4"
			/>
			<select
				name="priority"
				placeholder="Priority"
				onChange={handleChange}
				className="bg-slate-700 text-white font-bold py-2 px-4 mt-4 h-10"
			>
				<option value="Low">Low</option>
				<option value="Medium">Medium</option>
				<option value="High">High</option>
			</select>

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
