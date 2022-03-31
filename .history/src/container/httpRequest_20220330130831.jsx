const sendHttpRequest = (method, url, data = null,) => {
	const params = {
		method: method,
		body: null,
		headers: {
			'Content-Type': 'application/json'
		},
	}

}  

export const getCollext=(subjectId)=>{
    return sendHttpRequest('GET', `http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/tutors/${subjectId}`)
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}