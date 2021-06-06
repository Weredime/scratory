<template></template>
<script>
export default {
  head() {
    return { title: "Redirecting.." };
  },
  async fetch() {
    this.$router.push({ path: "/user/9gr" })
  },
  fetchOnServer: false,
};
</script>
