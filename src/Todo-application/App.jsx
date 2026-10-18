import { useState } from "react";
import TodoForm from "./TodoForm";
import "./TodoApplication.css";

function TodoDisplay({ todos, onComplete, onMoveToBacklog, onMoveToTodo }) {
	const activeTodos = todos.filter(
		(todo) => !todo.backlog && !todo.isCompleted,
	);
	const backlogTodos = todos.filter((todo) => todo.backlog);
	const completedTodos = todos.filter((todo) => todo.isCompleted);

	return (
		<div className="todo-board" aria-label="Task lists">
			<section className="todo-column todo-column--active">
				<header className="todo-column__header">
					<div className="todo-column__title">
						<span className="todo-column__dot" aria-hidden="true" />
						<h2>To do</h2>
					</div>
					<span className="todo-column__count">
						{String(activeTodos.length).padStart(2, "0")}
					</span>
				</header>
				{activeTodos.length ? <ul className="todo-list">
				{activeTodos.map((todo) => (
					<li className="todo-item" key={todo.id}>
						<span className="todo-item__task">{todo.task}</span>
						<div className="todo-item__actions">
						<button className="todo-action todo-action--complete" type="button" onClick={() => onComplete(todo.id)}>
							Complete
						</button>
						<button className="todo-action" type="button" onClick={() => onMoveToBacklog(todo.id)}>
							Backlog
						</button>
						</div>
					</li>
				))}
				</ul> : <p className="todo-empty">Nothing here yet</p>}
			</section>

			<section className="todo-column todo-column--backlog">
				<header className="todo-column__header">
					<div className="todo-column__title">
						<span className="todo-column__dot" aria-hidden="true" />
						<h2>Backlog</h2>
					</div>
					<span className="todo-column__count">
						{String(backlogTodos.length).padStart(2, "0")}
					</span>
				</header>
				{backlogTodos.length ? <ul className="todo-list">
				{backlogTodos.map((todo) => (
					<li className="todo-item" key={todo.id}>
						<span className="todo-item__task">{todo.task}</span>
						<div className="todo-item__actions">
							<button className="todo-action todo-action--complete" type="button" onClick={() => onComplete(todo.id)}>
								Complete
							</button>
							<button className="todo-action" type="button" onClick={() => onMoveToTodo(todo.id)}>
								To do
							</button>
						</div>
					</li>
				))}
				</ul> : <p className="todo-empty">Nothing here yet</p>}
			</section>

			<section className="todo-column todo-column--completed">
				<header className="todo-column__header">
					<div className="todo-column__title">
						<span className="todo-column__dot" aria-hidden="true" />
						<h2>Completed</h2>
					</div>
					<span className="todo-column__count">
						{String(completedTodos.length).padStart(2, "0")}
					</span>
				</header>
				{completedTodos.length ? <ul className="todo-list">
				{completedTodos.map((todo) => (
					<li className="todo-item todo-item--completed" key={todo.id}>
						<span className="todo-item__task">{todo.task}</span>
						<div className="todo-item__actions">
							<button className="todo-action" type="button" onClick={() => onMoveToBacklog(todo.id)}>
								Backlog
							</button>
							<button className="todo-action" type="button" onClick={() => onMoveToTodo(todo.id)}>
								To do
							</button>
						</div>
					</li>
				))}
				</ul> : <p className="todo-empty">Nothing here yet</p>}
			</section>
		</div>
	);
}

export default function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(task) {
		const todo = {
			id: crypto.randomUUID(),
			task,
			isCompleted: false,
			backlog: false,
		};

		setTodos((currentTodos) => [...currentTodos, todo]);
	}

	function completeTodo(todoId) {
		setTodos((currentTodos) =>
			currentTodos.map((todo) =>
				todo.id === todoId
					? { ...todo, isCompleted: true, backlog: false }
					: todo,
			),
		);
	}

	function moveTodoToBacklog(todoId) {
		setTodos((currentTodos) =>
			currentTodos.map((todo) =>
				todo.id === todoId
					? { ...todo, isCompleted: false, backlog: true }
					: todo,
			),
		);
	}

	function moveTodoToTodo(todoId) {
		setTodos((currentTodos) =>
			currentTodos.map((todo) =>
				todo.id === todoId
					? { ...todo, isCompleted: false, backlog: false }
					: todo,
			),
		);
	}

	return (
		<main className="todo-app">
			<header className="todo-header">
				<div>
					<p className="todo-eyebrow">PERSONAL WORKSPACE</p>
					<h1>Task board</h1>
				</div>
				<div className="todo-summary" aria-label={`${todos.length} total tasks`}>
					<span className="todo-summary__number">{String(todos.length).padStart(2, "0")}</span>
					<span className="todo-summary__label">tasks<br />on your board</span>
				</div>
			</header>
			<TodoForm onAddTodo={addTodo} />
			<TodoDisplay
				todos={todos}
				onComplete={completeTodo}
				onMoveToBacklog={moveTodoToBacklog}
				onMoveToTodo={moveTodoToTodo}
			/>
		</main>
	);
}
