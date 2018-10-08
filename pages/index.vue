<template>
  <main>
    <!-- <intercom-user-list :user-list="userList"/> -->
    <h1>Intact app</h1>
    <button @click.prevent="test()">Test</button>
  </main>
</template>

<script>
import intercomUserList from '~/components/intercom-user-list'

export default {
  components: {
    intercomUserList
  },
  // async asyncData({ app }) {
  //   const userList = await app.$axios.$get(
  //     'http://localhost:9000/intercom.users.get'
  //   )
  //   return { userList }
  // }
  methods: {
    async test() {
      const response = await this.$axios({
        method: 'post',
        url: '/.netlify/functions/users.store',
        data: 'test'
      })
    }
  }
}
</script>
