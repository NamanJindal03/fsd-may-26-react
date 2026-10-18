import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
	const [todoText, setTodoText] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const newTodo = todoText.trim();

		if (!newTodo) return;

		onAddTodo(newTodo);
		setTodoText("");
	}

	return (
		<section className="todo-composer" aria-labelledby="todo-composer-title">
			<div className="todo-composer__heading">
				<span className="todo-composer__mark" aria-hidden="true">+</span>
				<h2 id="todo-composer-title">Add a task</h2>
			</div>
			<form className="todo-form" onSubmit={handleSubmit}>
				<label className="visually-hidden" htmlFor="new-todo">Task</label>
				<input
					id="new-todo"
					className="todo-input"
					type="text"
					value={todoText}
					onChange={(event) => setTodoText(event.target.value)}
					placeholder="What needs doing?"
				/>
				<button className="todo-submit" type="submit">
					<span aria-hidden="true">+</span>
					Add task
				</button>
			</form>
		</section>
	);
}