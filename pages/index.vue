<template>
  <main>
    <intercom-user-list :user-list="userList"/>
  </main>
</template>

<script>
import intercomUserList from '~/components/intercom-user-list'

export default {
  components: {
    intercomUserList
  },
  async asyncData({ app }) {
    const userList = await app.$axios.$get(
      'http://localhost:9000/intercom.users.get'
    )
    return { userList }
  }
}
</script>
