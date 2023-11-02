import React, { useState } from 'react'
import CreateTodos from './create-todos/CreateTodos'
import TodoItem from './item/TodoItem'

const data = [
	{
		id: '1',
		title: 'Visit dentist',
		isDone: false,
	},
	{
		id: '2',
		title: 'Visit dentist',
		isDone: false,
	},
	{
		id: '3',
		title: 'Visit dentist',
		isDone: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)
	// использую хук useState, для мониторинга состояния тудушек в бд
	// todos - текущее значение состояния
	// setTodos - ф-ция, которая обновляет это состояние

	const changeTodo = id => {
		const copyTodos = [...todos] // разворачиваем тудушки
		const currentTodo = copyTodos.find(el => el.id === id) // находим к какому элементу обратился человек
		currentTodo.isDone = !currentTodo.isDone // меняем статус
		setTodos(copyTodos) // записываем уже изменные тудушки
	}

	const deleteTodo = id => setTodos([...todos].filter(el => el.id !== id)) // через filter оставим только те, у которых id не совпадает с переданным

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>ToDo</h1>
			{todos.map(el => (
				<TodoItem
					key={el.id}
					todo={el}
					changeTodo={changeTodo}
					deleteTodo={deleteTodo}
				/> // передаем пропсы чтобы далее с ними работать
			))}
			<CreateTodos setTodos={setTodos} />
		</div>
	)
}

export default Home
