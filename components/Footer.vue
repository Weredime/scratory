<template>
  <footer class="margined">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    <br />
    <p>
      Credit to <a href="https://jeffalo.net">Jeffalo</a> for inspiration and
      data.<br />
      Credit to
      <a href="https://scratch.mit.edu/users/Pufferfish_Test"
        >Pufferfish_Test</a
      >
      and <a href="https://scratch.mit.edu/users/TheColaber">TheColaber</a> for
      the <code>View Source</code> Functionality.
    </p>
    <br />
    <button class="link" @click="switchTheme()" href="#">
      switch theme (current: {{ $colorMode.preference }})
    </button>
    <br />
    <br />
    <br />
  </footer>
</template>
<script>
export default {
  methods: {
    switchTheme() {
      let currentTheme = this.$colorMode.preference;
      let themes = ["system", "light", "dark"];
      let to = themes[themes.indexOf(currentTheme) + 1];
      this.$colorMode.preference = to || "system";
    },
  },
};
</script>
<style scoped>
button.link {
  border: 1px black;
  padding: 5px;
  background: none;
  cursor: pointer;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  color: var(--text);
}
</style>
