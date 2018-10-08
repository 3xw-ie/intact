<template>
  <main>
    <form>
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email">
      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password">
      <button type="submit" class="bg-blue rounded p-2" @click.prevent="signup()">Signup</button>
    </form>
    <h1>Response</h1>
    <pre>{{ response }}</pre>
  </main>
</template>

<script>
import auth from '~/plugins/auth'

export default {
  data() {
    return {
      email: 'd@ve.ie',
      password: 'secret',
      response: {}
    }
  },
  methods: {
    async signup() {
      return auth
        .signup(this.email, this.password)
        .then(response => {
          console.log('Success!Check your inbox!', response)
          return (this.response = response)
        })
        .catch(error => {
          console.log("It's an error.", error)
          return (this.response = response)
        })
    }
  }
}
</script>
