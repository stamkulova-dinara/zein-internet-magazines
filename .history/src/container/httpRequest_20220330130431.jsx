const sendHttpRequest = (method, url, data = null,) => {
	const token = store.getState().userRedusers.token
	const params = {
		method: method,
		body: null,
		headers: {
			'Content-Type': 'application/json'
		},
	}