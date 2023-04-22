import { useState } from 'react'
import App from './App'

const Login = () => {
    const [user, setUser] = useState('Thoraker')
    const url = `http://assets.breatheco.de/apis/fake/todos/user/${user}`
    return (
        <>
            <nav className='navbar bg-body-tertiary'>
                <div className='container-fluid'>
                    <span className='navbar-brand mb-0 h1'>{user}</span>
                </div>
            </nav>
            {user === undefined ? (
                <form onSubmit={e => setUser(e.target.value)}>
                    <div className='mb-3'>
                        <label htmlFor='userName' className='form-label'>
                            Nombre de usuario
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='userName'
                            placeholder='Nombre de usuario'
                        />
                    </div>
                    <button type='submit' className='w-25 btn btn-primary me-3'>
                        Submit
                    </button>
                    <button type='button' className='w-25 btn btn-secondary ms-3'>
                        Create User
                    </button>
                </form>
            ) : (
                <App url={url} />
            )}
        </>
    )
}

export default Login
