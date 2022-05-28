import React, { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
	const [todos, setTodos] = useState([
		"Finish homework",
		"Wash dishes",
		"Clean room",
		"Make waffles",
	]);

	return (
		<div className="min-w-screen min-h-screen bg-gray-800 text-center text-white p-8">
			<h1 className="text-5xl font-bold text-emerald-500">To Do List</h1>
			<div className="flex items-center justify-center px-5 py-5">
				<div className="w-full mx-auto rounded-lg border border-emerald-500 p-8 lg:py-12 lg:px-14 text-center">
					<ToDoList todos={todos} className="w-full" />
					<ToDoForm
						todos={todos}
						setTodos={setTodos}
						className="w-full flex justify-end"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
