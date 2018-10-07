import request from 'request'
import querystring from 'querystring'

export default function getIntercomUsers() {
  const postData = querystring.stringify({
    client_id: 'd513b693-7d4b-4051-9837-eb750cd96a7e',
    client_secret: '40b7cb28-37db-4322-a6f3-bb994a4c627d',
    app_id: 'gkwedi39'
  })

  const requestOptions = {
    url: `https://app.intercom.io/users?${postData}`,
    json: true,
    auth: {
      user: 'dG9rOmI4YzI1OTkwXzE4YTJfNDI5M19hZTY4Xzk1MGIxNGRiM2U5YjoxOjA=',
      pass: ''
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  return requestWrapper(requestOptions)
}

/* promisify request call */
function requestWrapper(requestOptions) {
  return new Promise((resolve, reject) => {
    request(requestOptions, (err, response, body) => {
      if (err) {
        return reject(err)
      }
      // return data
      return resolve({
        data: body
      })
    })
  })
}