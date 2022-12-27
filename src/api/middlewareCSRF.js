import axios from 'axios'

const getCookiesArray = () => document.cookie.split(';').reduce((cookieArray, cookie) => {
	let [key] = cookie.split('=')
	if (key) cookieArray.push(key.trim())
	return cookieArray
}, [])

/**
 * If http method is `post | put | delete` and XSRF-TOKEN cookie is
 * not present, call '/sanctum/csrf-cookie' to set CSRF token, then
 * proceed with the initial request 
 * @param {AxiosRequestConfig} axiosconfig 
 * @returns {Promise<AxiosRequestConfig>}
 */
const middlewareCSFR = async axiosconfig => {
	let cookies = getCookiesArray()
	let isTokenMissing = !cookies.includes('XSRF-TOKEN')

	let methodsNeedCSRF = ['post', 'put', 'delete'] //other methods you want to add here
	let doesMethodRequireCSRF = methodsNeedCSRF.includes( axiosconfig.method )

	if ( isTokenMissing && doesMethodRequireCSRF ) {
		// then first get the CSRF Token 
		let pathCSFR = '/sanctum/csrf-cookie'
		let urlToCall = `${import.meta.env.API_HOST || 'http://localhost:8000'}${pathCSFR}`
		await axios.get(urlToCall, {withCredentials:true})
		// then continue with the request 
		return axiosconfig
	}
	
	return axiosconfig
}

export { middlewareCSFR as default }