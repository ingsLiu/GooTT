import fetch from './fetch.js'

export function getUser() {
	let obj = {
		
	}
	return fetch("/api/xxx", obj).then(res => {
	    return Promise.resolve(res.data)
	})
}