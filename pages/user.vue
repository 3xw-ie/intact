<template>
  <main>
    <h1>Update</h1>
    <form>
      <label for="name">Name:</label>
      <input v-model="name" type="name" name="name">
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email">
      <label for="password">Password:</label>
      <input v-model="password" type="password" name="password">
      <button type="submit" class="bg-blue rounded p-2" @click.prevent="update()">Update</button>
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
      name: '',
      email: '',
      password: '',
      response: {}
    }
  },
  created() {
    const user = auth.currentUser() ? auth.currentUser() : {}
    this.email = user.email
    this.name = user.user_metadata.name
  },
  methods: {
    async update() {
      const data = {}

      this.email ? (data.email = this.email) : null
      this.password ? (data.password = this.password) : null
      this.name ? (data.user_metadata = { name: this.name }) : null

      return auth
        .currentUser()
        .update(data)
        .then(response => {
          console.log('Success! Updated')
          return (this.response = response)
        })
        .catch(error => {
          console.log('Something went wrong.', error)
          return (this.response = response)
        })
    }
  }
}
</script>
