import { useState } from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
	const [input, setInput] = useState('')

	function handleChange(e) {
		setInput(e.target.value)
	}

	function handleSubmit(e) {
		e.preventDefault()
		props.onSubmit(input)
		setInput('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='border border-0 w-100'
				type='text'
				onKeyDown={(e) =>
					e === 'Enter' || e === 'NumpadEnter' ? handleSubmit : ''
				}
				onChange={handleChange}
				placeholder='Lista un nuevo quehacer'
				value={input}
			/>
			<button type='submit' className='visually-hidden'></button>
		</form>
	)
}

Input.propTypes = {
	props: PropTypes.func,
	onSubmit: PropTypes.func,
}

export default Input
