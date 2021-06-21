<template>
  <div class="margined">
    <div class="main" v-if="!loading">
      <input
        type="range"
        class="input"
        v-model="at"
        :max="history.length - 1"
        @input="changed()"
        :style="`width:${this.width}%;`"
      />
      <User :user="user" :signature="currentSignature" :time="time" />
    </div>
    <spinner v-if="loading" />
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
      width: 0,
    };
  },
  methods: {
    changed: function () {
      this.currentSignature = this.history[this.at].previous_value;
      this.time = new Date(this.history[this.at].time_found).toLocaleString();
      /*window.history.replaceState(
        undefined,
        undefined,
        `${window.location.pathname}`
      ); // make it full so it actually works */
      this.$router.push({ path: `#${this.at}` });
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

    setTimeout(() => (this.width = 100), 100);
  },
  fetchOnServer: false,
};
</script>
<style>
.input {
  text-align: center;
  transition: width ease 1s;
}
</style>
