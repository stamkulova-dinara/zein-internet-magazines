const sendHttpRequest = (method, url, data = null,) => {
	const params = {
		method: method,
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
				const error = new Error('Something went wrong!')
				error.data = errResData
				throw error
			})
		}
		return response.json()
	})
}  



export const getCollection=()=>{
    return sendHttpRequest('GET', 'https://623c10012e056d1037f94796.mockapi.io/api/v1/collection')
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}

export const getLimitCollection=(limit)=>{
    return sendHttpRequest('GET', `https://623c10012e056d1037f94796.mockapi.io/api/v1/collection?page=1&limit=${limit}`)
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}

export const getProduct=()=>{
    return sendHttpRequest('GET', 'https://623c10012e056d1037f94796.mockapi.io/api/v1/products')
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}

export const getProductById=(productId)=>{
    return sendHttpRequest('GET', `https://623c10012e056d1037f94796.mockapi.io/api/v1/products/${productId}`)
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}

export const pOCallBack=(productId)=>{
    return sendHttpRequest('POST', `https://623c10012e056d1037f94796.mockapi.io/api/v1/products/${productId}`)
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}