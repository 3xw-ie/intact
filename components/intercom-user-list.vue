<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    userList: {
      type: Object,
      default: null
    }
  },
  computed: {
    users() {
      return this.userList.data.users
    }
  }
}
</script>
