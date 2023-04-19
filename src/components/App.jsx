import './App.css'
import { v4 as UUIDV4 } from 'uuid'
import data from '../data/Data'
import Tasks from './Tasks'
import { useState } from 'react'
import Input from './Input'

export default function App() {
	const [task, setTask] = useState(data)

	function getInput(inputData) {
		if (inputData.trim() !== '') {
			const newTask = { id: UUIDV4(), task: inputData, completed: false }
			setTask(task.concat(newTask))
		} else alert('No debes ingresar tareas vacías')
	}
	console.log(task)

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
						<p>2 quehaceres pendientes </p>
						<p>1 quehaceres completados </p>
					</div>
				</div>
				<div className='col-1'></div>
			</div>
		</div>
	)
}
