import cn from 'classnames'
import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Check = ({ isDone }) => {
	return (
		<div
			className={cn(
				'border-2 rounded-lg border-pink-400 w-6 h-6 mr-3 flex items-center justify-center',
				{
					'bg-pink-400': isDone,
				}
			)}
		>
			{isDone && <BsCheck size={24} className='text-gray-900' />}
		</div>
	)
}

export default Check
