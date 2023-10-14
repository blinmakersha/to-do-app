import React, { useState } from 'react'

const CreateTodos = ({ setTodos }) => {
	const [title, setTitle] = useState('')

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
	}
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'>
			<input
				type='text'
				value={title}
				onChange={e => setTitle(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && createTodo(title)}
				className='bg-transparent w-full border-none outline-none'
				placeholder='write new todo'
			/>
		</div>
	)
}

export default CreateTodos
