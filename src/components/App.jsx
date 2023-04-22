import './App.css'
import PropTypes from 'prop-types'
import Tasks from './Tasks'
import { useEffect, useState } from 'react'
import Input from './Input'
import Counter from './Counter'
import { updateData, getData } from './Fetch'

const App = ({ url }) => {
    const [task, setTask] = useState([])
    const [taskLength, setTaskLength] = useState(task.length)

    const fetchGet = () => {
        getData(url)
            .then(data => {
                setTask(data)
                setTaskLength(data.length)
            })
            .catch(err => console.log(err))
    }

    useEffect(fetchGet, [])

    function getInput(inputData) {
        if (inputData.trim() !== '') {
            const newTask = [{ 'label': inputData, 'done': false }]
            const newTaskList = task.concat(newTask)
            setTask(newTaskList)
            updateData(url, newTaskList)
            setTaskLength(newTaskList.length)
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
                        {task.map((listedTask, index) => (
                            <Tasks
                                key={index}
                                listedTask={listedTask}
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

App.propTypes = {
    url: PropTypes.string,
}

export default App
