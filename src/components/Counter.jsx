import PropTypes from 'prop-types'

const Counter = ({ props }) => {
    return (
        <li id='counter'>
            {props === 0
                ? 'Sin quehaceres pendientes, ¡¡Bien ahí!!'
                : props + ' quehaceres pendientes'}
        </li>
    )
}

Counter.propTypes = {
    props: PropTypes.number,
}

export default Counter
