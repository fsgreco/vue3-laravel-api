/**
 * Rudimentary hook to handle errors from axios using alert. Do not use alert in production.
 * This hook is meant to be used along with some toast modal
 * It distinguish between error answers (http 400~599); network errors (if in the request) o other kind of errors.
 * @param {object} err The error object 
 */
export function useHandleAxiosError(err) {
	if (err.response) {
		alert(`${err.message} -- ${err.response.data?.message} `)
	} else if (err.request) {
		alert(`${err.message} - Status ${err.request.status}`)
	} else {
		alert(`Unexpected Error -- ${err.message}`)
	}
}
