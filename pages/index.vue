<template>
  <div>
    <div class="p-3">
      <center>
        <Logo v-if="!user" class="w-24" />
        <img
          :src="`https://my-ocular.jeffalo.net/api/user/${user}/picture`"
          class="w-24 h-24"
          v-if="user"
        />
        <input
          type="text"
          max="20"
          v-model="user"
          class="w-90 border-green-400 border-2 w-1/2 h-10 rounded-md"
        />
        <div class="grid grid-cols-3 w-72 gap-2 mt-3">
          <NuxtLink
            class="bg-blue-400 hover:bg-blue-500 border-0 p-6 text-white rounded-md shadow-md nohigh inline-block"
            :to="`/user/${user}`"
          >
            <Logo class="w-10 h-10" />
          </NuxtLink>
          <a
            class="bg-green-500 hover:bg-green-600 border-0 p-6 text-white rounded-md shadow-md nohigh inline-block"
            :href="
              `https://ocular.jeffalo.net/user/${user}?utm_campaign=scratory2&utm_source=scratory`
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-10 h-10"
            >
              <path
                fill="#ffffff"
                d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"
              ></path>
            </svg>
          </a>
          <a
            class="bg-gray-700 hover:bg-gray-800 border-0 p-6 text-white rounded-md shadow-md nohigh inline-block"
            :href="
              `https://magnifier.potatophant.net/users/${user}?utm_campaign=scratory2&utm_source=scratory`
            "
          >
            <img
              src="http://magnifier.potatophant.net/images/icon.png"
              class="w-10 h-10"
            />
          </a>
          <a
            class="bg-red-600 hover:bg-red-700 border-0 p-6 text-white rounded-md shadow-md nohigh inline-block"
            :href="`https://postpercent.rirurin.com/users/${user}`"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="postpercent Layer 1"
              data-name="Layer 1"
              viewBox="0 0 256 196"
              class="w-10 h-10"
            >
              <polygon
                fill="#ffffff"
                class="cls-1"
                points="131.46 63 28 63 28 93 114.14 93 131.46 63"
              />
              <polygon
                fill="#ffffff"
                class="cls-1"
                points="28 113 28 143 48.79 143 48.79 163 88.79 143 228 143 228 113 28 113"
              />
              <polygon
                fill="#ffffff"
                class="cls-1"
                points="124.54 193 228 193 228 163 141.86 163 124.54 193"
              />
            </svg>
          </a>
          <a
            class="bg-blue-400 hover:bg-blue-500 border-0 p-6 text-white rounded-md shadow-md nohigh inline-block"
            :href="`https://scratchstats.com/${user}`"
          >
            <img
              src="http://scratchstats.com/images/icon.png"
              class="w-10 h-10"
            />
          </a>
          <a
            class="bg-blue-400 hover:bg-blue-500 border-0 p-6 text-white rounded-md shadow-md nohigh inline-block"
            :href="`https://scratch.mit.edu/users/${user}`"
          >
            <img src="/scratch-logo.png" class="w-10 h-10" />
          </a>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  },
  data() {
    return {
      user: ""
    };
  }
};
</script>
<style scoped>
input {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background: transparent;
  color: var(--text);
  background-color: var(--background);
}
</style>
