import './App.css'
import { v4 as UUIDV4 } from 'uuid'
import data from '../data/Data'
import Tasks from './Tasks'
import { useState } from 'react'
import Input from './Input'
import Counter from './Counter'

const App = () => {
	const [task, setTask] = useState(data)

	const [taskLength, setTaskLength] = useState(3)

	function getInput(inputData) {
		if (inputData.trim() !== '') {
			const newTask = { id: UUIDV4(), task: inputData, completed: false }
			setTask(task.concat(newTask))
			setTaskLength(task.concat(newTask).length)
		} else alert('No debes ingresar tareas vacías')
	}

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-1'></div>
				<div className='col'>
					<h1 className='text-center'>Lista de Quehaceres</h1>
					<Input onSubmit={getInput} />
					<ul className='list-group'>
						{task.map((listedTask) => (
							<Tasks
								key={listedTask.id}
								task={listedTask.task}
								completed={listedTask.completed}
							/>
						))}
					</ul>
					<div className='d-inline'>
						<Counter props={taskLength} />
					</div>
				</div>
				<div className='col-1'></div>
			</div>
		</div>
	)
}

export default App
