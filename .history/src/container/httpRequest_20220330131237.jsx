const sendHttpRequest = (method, url, data = null,) => {
	const params = {
		method: method,
		body: null,
		headers: {
			'Content-Type': 'application/json'
		},
	}

}  

export const getCollection=(subjectId)=>{
    return sendHttpRequest('GET', )
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}