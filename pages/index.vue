<template>
  <div>
    <Navbar />
    <div class="p-3">
      <center>
        <Logo v-if="!user" class="w-24" />
        <img :src="`https://my-ocular.jeffalo.net/api/user/${user}/picture`" class="w-24 h-24" v-if="user" />
        <input type="text" max="20" v-model="user" class="w-90 border-green-400 border-2 w-1/2 h-10 rounded-md"  />
      </center>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  },
  data() {
    return {
      user: ""
    }
  }
}
</script>
<style scoped>
input {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background: transparent;
  color: var(--text);
  background-color: var(--background);
}
</style>