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
    return sendHttpRequest('GET', 'https://623c10012e056d1037f94796.mockapi.io/api/v1/collections')
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}