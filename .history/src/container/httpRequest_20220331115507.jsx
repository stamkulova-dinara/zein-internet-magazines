const sendHttpRequest = (url, data = null,) => {
	const params = {
		method: 'GET',
		body: null,
		headers: {
			'Content-Type': 'application/json'
		},
	}
    if (method === 'POST' || method === 'PUT') {
		params.body = JSON.stringify(data)
	}
    console.log(params)
	return fetch(url, params).then((response) => {
		if (response.status === 400) {
			return response.json().then((errResData) => {
				const error = new Error('Something went wrong!')
				error.data = errResData
				throw error
			})
		} else if (response.status === 401) {
			return response.json().then((errResData) => {
				errorToast('Not Authorized!!!')
				const error = new Error('Something went wrong!')
				error.data = errResData
				throw error
			})
		}
		return response.json()
	})
}  



// export const getCarouselImage=()=>{
//     return sendHttpRequest('https://623c10012e056d1037f94796.mockapi.io/api/v1/collection/11')
        // .then(responData=>{
        //     return responData
        // })
        // .catch(err=>{
        //     return null
        // })
// }

// export const getCarouselImage = () => {
//     const fetch()
// }

// export const getCollection = () => {
//     fetch(
//       "https://623c10012e056d1037f94796.mockapi.io/api/v1/collection"
//     )
//     .then(responData=>{
//         return responData
//     })
//     .catch(err=>{
//         return null
//     })
    
//   };