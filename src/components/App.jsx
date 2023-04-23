import './App.css'
import Tasks from './Tasks'
import { useEffect, useState } from 'react'
import Input from './Input'
import Counter from './Counter'
import { updateData, getData } from './resources/Fetch'

const App = () => {
    const userName = 'Thoraker'

    const [task, setTask] = useState([])
    const [taskLength, setTaskLength] = useState(task.length)


    const fetchGet = () => {
        getData(userName)
            .then(newTaskList => {
                setTask(newTaskList)
                setTaskLength(newTaskList.length)
            })
    }

    function getInput(inputData) {
        if (inputData.trim() !== '') {
            const newTask = [{ 'label': inputData, 'done': false }]
            const newTaskList = task.concat(newTask)
            setTask(newTaskList)
            setTaskLength(newTaskList.length)
            updateData(newTaskList, userName)
        } else alert('Debes escribir una tarea')
    }

    const deleteTask = (deletedItem) => {
        const newTaskList = task.toSpliced(deletedItem, 1)
        setTask(newTaskList)
        setTaskLength(newTaskList.length)
        updateData(newTaskList, userName)
    }

    const deleteAllTask = () => {
        const newTaskList = task.toSpliced(0, task.length)
        setTask(newTaskList)
        setTaskLength(newTaskList.length)
        updateData(newTaskList, userName)
    }


    useEffect(fetchGet, [])

    return (
        <div className='container-fluid'>
            <div className='col m-5 card'>
                <h1 className='text-center card-header'>Lista de Quehaceres</h1>
                <Input onSubmit={getInput} />
                <ul className='list-group'>
                    <Tasks task={task} deleteTask={deleteTask} />
                </ul>
                <ul>
                    <Counter props={taskLength} />
                </ul>
                <button type='button' className='btn btn-primary' onClick={deleteAllTask}>Eliminar toda la lista de tareas</button>
            </div>
        </div>
    )
}


export default App
