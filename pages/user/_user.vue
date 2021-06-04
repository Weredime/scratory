<template>
  <div class="container">
    <Header />
    <div class="margined">
      <br />
      <br />
      <div class="main" v-if="!loading">
        <input
          type="range"
          v-model="at"
          :max="history.length - 1"
          @input="changed()"
        />
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
      title: `${this.user}'s signature history`,
    };
  },
  data() {
    return {
      user: this.$route.params.user,
      history: [],
      loading: true,
      at: 0,
      time: "",
      currentSignature: "",
    };
  },
  methods: {
    changed: function () {
      this.currentSignature = this.history[this.at].previous_value;
      this.time = new Date(this.history[this.at].time_found).toLocaleString();
      window.history.replaceState(
        undefined,
        undefined,
        `${window.location.pathname}#${this.at}`
      ); // make it full so it actually works
    },
  },
  async fetch() {
    let res = await fetch(
      `https://scratchdb.lefty.one/v3/forum/user/history/${this.user}`
    );

    let json = await res.json();

    this.loading = false;

    this.history = json;

    let num = Number(window.location.hash.substring(1));

    this.at = num !== "NaN" && num ? num : 0;
    this.currentSignature = this.history[this.at].previous_value;
    this.time = new Date(this.history[this.at].time_found).toLocaleString();
    window.history.replaceState(
      undefined,
      undefined,
      `${window.location.pathname}#${this.at}`
    ); // make it full so it actually works
  },
  fetchOnServer: false,
};
</script>
<style>
input {
  width: 70%;
  text-align: center;
}
</style>
