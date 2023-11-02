import React, { useState } from 'react'

const CreateTodos = ({ setTodos }) => {
	const [title, setTitle] = useState('')
	// использую хук useState, для названия тудушек
	// title - текущее название тудушки
	// setTitle - ф-ция, которая обновляет состояние title

	// ф-ция обновляет состояние todos в родительском компоненте, добавляя новый todo
	const createTodo = title => {
		setTodos(prev => [
			{
				id: new Date(),
				title,
				isDone: false,
			},
			...prev,
		])
		setTitle('')
	} //
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)} // обработчик события, вызывается когда пользователь изменяет значение в поле ввода.
				// он берет новое значение из e.target.value и обновляет состояние title с помощью функции setTitle
				onKeyPress={e => e.key === 'Enter' && createTodo(title)} // обработчик события, который реагирует на нажатие клавиш
				className='bg-transparent w-full border-none outline-none'
				placeholder='write new todo'
			/>
		</div>
	)
}

export default CreateTodos
