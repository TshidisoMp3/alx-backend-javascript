export default function getResponseFromAPI(promise) {
  return promise
    .then(() =>({ status: 200, body:'success' }))
    .catch(() => Error('The fake API is not working currently'));
    .finally(() => {console.log('Got a response from the API')});
}
