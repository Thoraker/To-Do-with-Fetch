import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Tasks({ task, completed }) {
	const [taskDone, setTaskDone] = useState(completed)

	return (
		<li
			className={
				taskDone
					? 'text-decoration-line-through list-group-item'
					: 'list-group-item'
			}
			onClick={() => setTaskDone(!taskDone)}
		>
			{task}
			<button
				type='button'
				className='btn-close float-end'
				aria-label='Close'
			></button>
		</li>
	)
}

Tasks.propTypes = {
	task: PropTypes.string,
	completed: PropTypes.bool,
}
