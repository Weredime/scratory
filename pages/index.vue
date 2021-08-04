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
            <!-- High-res magnifier logo yay -->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 662 662" class="w-10 h-10" width="24px" height="24px"><defs><clipPath id="_clipPath_mcYqqQydamTlre1LeGYasVFK2pUVmvjJ"><rect width="662" height="662"/></clipPath></defs><g clip-path="url(#_clipPath_mcYqqQydamTlre1LeGYasVFK2pUVmvjJ)"><g id="Icon"><path d=" M 0 331 C 0 148.316 148.316 0 331 0 C 513.684 0 662 148.316 662 331 C 662 513.684 513.684 662 331 662 C 148.316 662 0 513.684 0 331 Z " fill="rgb(236,240,241)"/><path d=" M 75 331 C 75 189.71 189.71 75 331 75 C 472.29 75 587 189.71 587 331 C 587 472.29 472.29 587 331 587 C 189.71 587 75 472.29 75 331 Z " fill="none" vector-effect="non-scaling-stroke" stroke-width="100" stroke="rgb(44,62,80)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><defs><filter id="YNqiJoONlhYOcotjtpOvhlchTvtG05M9" x="-200%" y="-200%" width="400%" height="400%"><feOffset xmlns="http://www.w3.org/2000/svg" in="SourceAlpha" result="offOut" dx="0" dy="0"/><feGaussianBlur xmlns="http://www.w3.org/2000/svg" in="offOut" result="blurOut" stdDeviation="2.5"/><feComponentTransfer xmlns="http://www.w3.org/2000/svg" in="blurOut" result="opacOut"><feFuncA xmlns="http://www.w3.org/2000/svg" type="table" tableValues="0 0.5"/></feComponentTransfer><feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="opacOut" mode="normal"/></filter></defs><g filter="url(#YNqiJoONlhYOcotjtpOvhlchTvtG05M9)"><path d="M 282.917 212.206 L 449.794 379.083 C 453.697 382.986 453.697 389.323 449.794 393.225 L 393.225 449.794 C 389.323 453.697 382.986 453.697 379.083 449.794 L 212.206 282.917 C 208.303 279.014 208.303 272.677 212.206 268.775 L 268.775 212.206 C 272.677 208.303 279.014 208.303 282.917 212.206 Z" style="stroke:none;fill:#1ABC9C;stroke-miterlimit:10;"/></g></g></g></svg>

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
