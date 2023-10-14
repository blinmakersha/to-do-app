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

	const changeTodo = id => {
		const copyTodos = [...todos]
		const currentTodo = copyTodos.find(el => el.id === id)
		currentTodo.isDone = !currentTodo.isDone
		setTodos(copyTodos)
	}

	const deleteTodo = id => setTodos([...todos].filter(el => el.id !== id))

	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>ToDo</h1>
			{todos.map(el => (
				<TodoItem
					key={el.id}
					todo={el}
					changeTodo={changeTodo}
					deleteTodo={deleteTodo}
				/>
			))}
			<CreateTodos setTodos={setTodos} />
		</div>
	)
}

export default Home
