<template></template>
<script>
export default {
  head() {
    return { title: "Redirecting.." };
  },
  async fetch() {
    window.location.href = "/user/9gr";
  },
  fetchOnServer: false,
};
</script>
