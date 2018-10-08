import GoTrue from 'gotrue-js'

const auth = new GoTrue({
  APIUrl: 'https://intact.netlify.com/.netlify/identity',
  audience: '',
  setCookie: true
})

export default auth
