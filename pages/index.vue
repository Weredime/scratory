<template>
  <div class="margined">
    <center>
      <Logo width="100px" height="100px" v-if="!id" />
      <a :href="`https://scratch.mit.edu/users/${this.username}/`">
        <img
          v-if="id"
          :src="
            this.id
              ? `https://cdn2.scratch.mit.edu/get_image/user/${id}_100x100.png`
              : `https://my-ocular.jeffalo.net/api/user/${this.username}/picture`
          "
        />
      </a>
      <br />
      <input type="text" v-model="username" :changed="changed()" />
      <p>
        {{ username ? properUser : username }}
      </p>

      <div class="buttons">
        <!-- Add creators of ___ as the default for ___ -->
        <HomeButton type="scratory" :user="this.username || '9gr'" />
        <HomeButton type="magnifier" :user="this.username || 'potatophant'" />
        <HomeButton type="ocular" :user="this.username || 'Jeffalo'" />
        <HomeButton type="postpercent" :user="this.username || 'CatsUnited'" />
        <HomeButton
          type="ScratchStats"
          :user="this.username || 'World_Languages'"
        />
      </div>
    </center>
  </div>
</template>
<script>
export default {
  head() {
    return { title: "Home" };
  },
  data() {
    return {
      cached: "initial",
      username: "",
      id: 0,
      properUser: "",
      isFetching: false,
      cache: {
        jeffalo: {
          username: "Jeffalo",
          id: 34018398,
        },
        potatophant: {
          username: "potatophant",
          id: 16005114,
        },
      },
    };
  },
  methods: {
    async changed() {
      window.history.replaceState(null, document.title, `#${this.username}`);
      if (!this.username) return;
      if (this.username.length < 3) {
        this.id = null;
      } else {
        this.cached = false;
        let res = await fetch(
          `https://scratchdb.lefty.one/v3/user/info/${this.username}`
        ).catch((err) => ({
          scratoryError: true,
        }));

        if (res.scratoryError) {
          this.id = 0;
          this.properUser = "";
          this.cache[this.username.toLowerCase()] = {
            id: 0,
            username: "",
          };
          return undefined;
        }

        let json = await res.json();

        if (json.error) {
          this.id = 0;
          this.properUser = "";
          this.cache[this.username.toLowerCase()] = {
            id: 0,
            username: "",
          };
          console.log(json.error + "<= is what we get from SDB");
        } else {
          if (json.id && json.username) {
            this.id = json.id;
            this.properUser = json.username;
            this.cache[json.username.toLowerCase()] = {
              id: json.id,
              username: json.username,
            };
          }
        }
      }
    },
  },
};
</script>
<style scoped>
input {
  border-radius: 12px;
  border: 2px solid var(--brand);
  width: 50%;
  height: 40px;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background: transparent;
  color: var(--text);
  background-color: var(--background);
}

img {
  width: 100px;
  height: 100px;
}

.buttons {
  padding: 5px;
  margin: 0 auto;
  margin-top: 75px;
}
</style>
