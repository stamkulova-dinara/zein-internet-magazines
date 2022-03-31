const sendHttpRequest = (url, data = null,) => {
	const params = {
		method: 'GET',
		body: null,
		headers: {
			'Content-Type': 'application/json'
		},
	}
}  

export const getCarouselImage=()=>{
    return sendHttpRequest('GET', 'https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/11')
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}

// export const getCarouselImage = () => {
//     const fetch()
// }