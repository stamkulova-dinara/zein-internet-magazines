const sendHttpRequest = (method, url, data = null,) => {
	const params = {
		method: method,
		body: null,
		headers: {
			'Content-Type': 'application/json'
		},
	}