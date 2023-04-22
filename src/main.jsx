import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './components/Login'

const Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(
	<React.StrictMode>
		<Login />
	</React.StrictMode>
)
