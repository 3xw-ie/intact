<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/user">User</nuxt-link>
    <button @click="openSignupModal()">Signup</button>
    <button @click="openLoginModal()">Login</button>
  </nav>
</template>

<script>
import netlifyIdentity from 'netlify-identity-widget'

if (typeof document != 'undefined') {
  console.log('Document exists.')
  netlifyIdentity.init()
}

export default {
  methods: {
    openSignupModal() {
      netlifyIdentity.open('signup')
    },
    openLoginModal() {
      netlifyIdentity.open('login')
    }
  }
}
</script>
