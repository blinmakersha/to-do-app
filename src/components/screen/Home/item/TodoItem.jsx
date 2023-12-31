import cn from 'classnames'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import Check from './Check'

const TodoItem = ({ todo, changeTodo, deleteTodo }) => {
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<button className='flex items-center' onClick={() => changeTodo(todo.id)}>
				<Check isDone={todo.isDone} />
				<span
					className={cn({
						'line-through': todo.isDone,
					})}
				>
					{todo.title}
				</span>
			</button>
			<button onClick={() => deleteTodo(todo.id)}>
				<BsTrash
					size={21}
					className='text-zinc-500 hover:text-pink-500 transition-colors ease-in-out duration-300'
				/>
			</button>
		</div>
	)
}

export default TodoItem
