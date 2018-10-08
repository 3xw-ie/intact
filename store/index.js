import GoTrue from 'gotrue-js'

const auth = new GoTrue({
  APIUrl: 'https://intact.netlify.com/.netlify/identity',
  audience: '',
  setCookie: false
})

export const state = () => ({
  user: null
})

export const mutations = {
  currentUser(state, user) {
    state.user = user
  }
}
