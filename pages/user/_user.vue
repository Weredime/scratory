<template>
  <div class="container">
    <Header />
    <div class="margined">
      <h1> {{ user }}'s signature history</h1>
      <hr />
      <br />
      <br />
      <div class="main" v-if="!loading">
        <input type="range" v-model="at" :max="history.length" />
        <User :user="user" :signature="currentSignature" :time="time" />
      </div>
      <spinner v-if="loading" />
    </div>
    <Footer />
  </div>
</template>
<script>
  export default {
    head() {
      return {
        title: `${this.user}'s signature history`
      }
    },
    data() {
      return {
        user: this.$route.params.user,
        history: [],
        loading: true,
        at: 0,
        time: ""
      }
    },
    computed: {
      currentSignature: function() {
        return this.history[this.at]
      }
    },
    async fetch() {
      let res = await fetch(`https://scratchdb.lefty.one/v3/forum/user/history/${this.user}`)

      let json = await res.json();

      this.loading = false
    },
    fetchOnServer: false
  }
</script>

