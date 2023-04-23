const url = 'http://assets.breatheco.de/apis/fake/todos/user/'
const templateData = [{ label: 'sample task', done: false }]

const updateData = (data, userName) => {
	console.log(url + userName)
	const dataToBackup = data.concat(templateData)
	const formattedData = JSON.stringify(dataToBackup)
	const options = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: formattedData,
	}
	return fetch(url + userName, options).catch((error) => console.log(error))
}

const getData = (userName) => {
	const options = {
		headers: { 'Content-Type': 'application/json' },
	}
	return fetch(url + userName, options)
		.then((response) => response.json())
		.then((resp) => resp.filter((tasks) => tasks.label !== 'sample task'))
		.then((data) => {
			return data
		})
		.catch((err) => console.log(err))
}

const createUser = (userName) => {
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify([]),
	}
	return fetch(url + userName, options)
		.then((response) => {
			return response
		})
		.catch((error) => {
			return error
		})
}

export { updateData, getData, createUser }
