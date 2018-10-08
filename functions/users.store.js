import fetch from 'node-fetch'
import GoTrue from 'gotrue-js'

const auth = new GoTrue({
  APIUrl: 'https://intact.netlify.com/.netlify/identity',
  audience: '',
  setCookie: false
})

exports.handler = (event, context, callback) => {
  console.log('Fetch:', fetch)
  console.log('Function `users.store` invoked', event.body)
  const data = JSON.parse(event.body)

  return auth
    .signup(data.email, data.password)
    .then(response => {
      console.log('Success!Check your inbox!', response)
      return callback(null, { statusCode: 200, body: JSON.stringify(event) })
    })
    .catch(error => {
      console.log("It's an error.", error)
      return callback(null, { statusCode: 400, body: JSON.stringify(event) })
    })
}
