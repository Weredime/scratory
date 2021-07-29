<template>
  <i class="inline-block"
    >{{ status }}
    <span class="dot" :style="`background-color: ${color};`"></span
  ></i>
</template>
<script>
export default {
  props: ["username"],
  data() {
    return {
      status: "",
      color: ""
    };
  },
  async fetch() {
    let res = await fetch(
      `https://my-ocular.jeffalo.net/api/user/${this.username}`
    );
    let { status, color } = await res.json();

    this.status = status;
    this.color = color;
  }
};
</script>
<style>
.dot {
  height: 10px;
  width: 10px;
  margin-left: 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
