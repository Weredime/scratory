<template></template>
<script>
export default {
  head: {
    title: "YouTube"
  },
  data() {
    return {};
  },
  mounted() {
    window.location.replace(
      window.location.pathname.replace(
        /\/discuss\/youtube\/(.*)/g,
        "https://youtube.com/watch?v=$2"
      )
    );
  }
};
</script>
