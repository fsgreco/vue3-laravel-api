import axios from 'axios'
import middleware401 from './middleware401'


/**
 * Call setCSRFToken laravel sanctum
 * @returns 
 */
const setCSRFToken = () => {
	return useApi('web').get('/sanctum/csrf-cookie')
}

/**
 * Initialize Axios instance to call the API
 * @param {string} endpoint either 'web' or 'api' (default)
 * @returns {AxiosInstance}
 */
export const useApi = (endpoint = 'api') => {
	const { API_HOST, API_PATH } = import.meta.env

	let baseURL

	if (endpoint === 'api') {
		baseURL = API_HOST + API_PATH || 'http://localhost:8000/api'
	} else if (endpoint === 'web') {
		baseURL = API_HOST || 'http://localhost:8000'
	}

	const axiosInstance = axios.create({
		baseURL,
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
		withCredentials: true,
	})

	axiosInstance.interceptors.request.use(
		function (config) {
			// If http method is `post | put | delete` and XSRF-TOKEN cookie is
			// not present, call '/sanctum/csrf-cookie' to set CSRF token, then
			// proceed with the initial response

			let cookie = {}
			document.cookie.split(';').forEach(function (el) {
				let [key, value] = el.split('=')
				cookie[key.trim()] = value
			})

			if (
				(config.method == 'post' ||
					config.method == 'put' ||
					config.method == 'delete') &&
				/* other methods you want to add here */
				!cookie['XSRF-TOKEN']
			) {
				return setCSRFToken().then(() => config)
			}

			// Do something before request is sent
			return config
		},
		function (error) {
			// Do something with request error
			return Promise.reject(error)
		}
	)


	axiosInstance.interceptors.response.use(resp => resp, middleware401)

	return axiosInstance
}
