const updateData = (url, data) => {
	const formattedData = JSON.stringify(data)
	fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: formattedData,
	}).catch((error) => console.log(error))
}

const getData = (url) => {
	return fetch(url, {
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return data
		})
}

export { updateData, getData }
