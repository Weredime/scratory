<template>
  <div class="container">
    <i class="ocular-status" title="This is an ocular status. You can set yours at ocular.jeffalo.net/dashboard." v-if="ocular.status"> 
    {{ ocular.status }}
    </i>
    <span class="ocular-color" :style="`background-color:${ocular.color}`" v-if="ocular.color"></span>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      ocular: { status: "", color: "" }
    };
  },
  async fetch() {
    let res = await fetch(
      `https://my-ocular.jeffalo.net/api/user/${this.user}`
    );
    let ocular = await res.json();
    this.ocular = ocular;
  },
  fetchOnServer: false
};
</script>
<style>
.ocular-color {
  height: 10px;
  width: 10px;
  margin-left: 3px;
  background-color: rgb(32, 116, 57);
  border-radius: 50%;
  display: inline-block;
}
.container {
  display: block;
}
i {
  text-overflow: ellipsis;
  width: 10px;
}
</style>