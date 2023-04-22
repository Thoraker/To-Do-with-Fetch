import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Tasks({ listedTask }) {
    const [completed, setCompleted] = useState(listedTask.done)

    return (
        <li className={completed ? 'd-flex list-group-item text-decoration-line-through' : 'd-flex list-group-item'} >
            <p className='flex-fill m-0' onClick={e => setCompleted(!completed)}>
                {listedTask.label}
            </p>
            <button
                type='button'
                className='btn-close float-end'
                aria-label='Close'
            ></button>
        </li>
    )
}

Tasks.propTypes = {
    listedTask: PropTypes.object,
}
