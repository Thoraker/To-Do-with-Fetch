import PropTypes from 'prop-types'
import Task from './Task';


const Tasks = ({ task, deleteTask }) => {
    return (
        <>
            {
                task.map((obj, index) => (
                    <Task key={index} obj={obj} index={index} deleteTask={deleteTask} />
                ))
            }
        </>
    )
}



Tasks.propTypes = {
    task: PropTypes.array,
    deleteTask: PropTypes.func
}

export default Tasks