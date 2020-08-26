/**
 * Checks for errors in a HTTP request (fetch)
 * @param  {Object} response The response
 * @return {Object}          The validated response
 */
export default function handleHttpErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}