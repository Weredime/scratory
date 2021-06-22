<template>
  <div class="btn" @click="goToUser()" :type="`${this.type}-btn`">
    <div class="brand">
      <img src="/assets/ocular.svg" v-if="type == 'ocular'" />
      <img src="/assets/postpercent.svg" v-if="type == 'postpercent'" />
      <img
        src="https://scratchstats.com/images/icon.png"
        v-if="type == 'ScratchStats'"
        class="ScratchStats"
      />
      <img
        src="https://magnifier.potatophant.net/images/icon.png"
        v-if="type == 'magnifier'"
      />
      <Logo v-if="type == 'scratory'" />
    </div>
    <div class="text" style="color: white">View on {{ type }}</div>
  </div>
</template>
<script>
export default {
  props: ["type", "user"],
  methods: {
    goToUser() {
      let type = this.type;
      let baseURL =
        type == "ScratchStats"
          ? "https://scratchstats.com/"
          : type == "ocular"
          ? "https://ocular.jeffalo.net/user/"
          : type == "postpercent"
          ? "https://postpercent.rirurin.com/users/"
          : type == "scratch"
          ? "https://scratch.mit.edu/users/"
          : type == "scratory"
          ? "/user/"
          : type == "magnifier"
          ? "https://magnifier.potatophant.net/users/"
          : "";

      if (type == "scratory") {
        this.$router.push({ path: baseURL + this.user });
      } else window.location.href = baseURL + this.user;
    },
  },
};
</script>
<style scoped>
div[type="ScratchStats-btn"] {
  background-color: #25AFF4;
}

div[type="ocular-btn"] {
  background-color: #0FBD8C;
}

div[type="postpercent-btn"] {
  background-color: #F54260;
}

div[type="scratory-btn"] {
  background-color: var(--brand);
}

div[type="magnifier-btn"] {
  background-color: #323232;
}

div.btn:hover {
  background-color: var(--brand);
  transition: all linear 0.1s;
}

div.btn {
  color: #ffffff;
  cursor: pointer;
  display: flex;
  border-radius: 24px;
  width: 300px;
  height: 50px;
  text-transform: uppercase;
  font-weight: 100;
  padding: 2px;
  box-styling: border-box;
  margin: 10px;
}

.brand img {
  width: 30px;
  height: 30px;
}

.brand,
.text {
  height: calc(100% + 7px);
  padding: 7px;
  transform: translateY(-7%);
}

.brand img.ScratchStats {
  width: auto;
  height: auto;
  max-width: 70px;
  max-height: calc(100% + 7px);
}

.text {
  text-align: right;
}
</style>