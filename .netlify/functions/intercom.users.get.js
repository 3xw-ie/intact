import getIntercomUsers from './intercom/users'

exports.handler = function (event, context, callback) {
  getIntercomUsers().then(result => {
      console.log('Users:', result.data)
      // return results to browser
      return callback(null, { statusCode: 200, body: JSON.stringify(result) })
    })
    .catch(error => {
      console.log(error)
      return callback(null, {
        statusCode: error.statusCode || 500,
        body: JSON.stringify({
          error: error.message,
        })
      })
    })
}