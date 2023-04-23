import PropTypes from 'prop-types'

const Task = ({ obj, deleteTask, index }) => {
    return (
        <li className={obj.done ?
            'list-group-item d-flex justify-content-between align-items-center text-decoration-line-through py-2 px-0'
            : 'list-group-item d-flex justify-content-between align-items-center py-0 px-2'}>
            {obj.label}
            <button type="button"
                onClick={() => deleteTask(index)}
                className="btn float-end"><i className="bi bi-trash"></i></button>
        </li>
    )
}

Task.propTypes = {
    obj: PropTypes.object,
    deleteTask: PropTypes.func,
    index: PropTypes.number
}

export default Task