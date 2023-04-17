import './App.css';

function App() {
	return (
		<div className='container-fluid'>
			<h1>Lista de Quehaceres</h1>
			<input type='text' />
			<ul>
				<li>
					Tarea 1 <button>x</button>
				</li>
				<li>
					Tarea 2 <button>x</button>
				</li>
				<li>
					Tarea 3 <button>x</button>
				</li>
			</ul>
			<p>x quehaceres pendientes </p>
			<p>x quehaceres completados </p>
		</div>
	);
}

export default App;
