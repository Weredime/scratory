<template>
  <div class="p-10">
    <h1 class="text-4xl">Settings</h1>
    <div class="p-3">
      <h2>Styling</h2>
      <select v-model="scratchblocks" class="border-2 border-blue-400">
        <option value="scratch3">Scratch 3</option>
        <option value="scratch2">Scratch 2</option>
      </select>
      <button
        @click="saveStyling()"
        class="border-2 border-blue-400 outline-none"
      >
        Save
      </button>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: "Settings"
  },
  data() {
    return {
      scratchblocks: "scratch2"
    };
  },
  mounted() {
    this.scratchblocks = this.$settings.get("scratchblocks") || "scratch2";
  },
  methods: {
    saveStyling() {
      this.$settings.set("scratchblocks", this.scratchblocks);
    }
  }
};
</script>
