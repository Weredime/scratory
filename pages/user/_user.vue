<template>
  <div>
    <div class="p-3 margined">
      <Spinner v-if="!user" />
      <div class="main" v-if="user">
        <div class="mb-2 shadow-md rounded-md overflow-hidden">
          <div class="header w-full bg-blue-400 p-2">
            <p v-if="current">
              {{ new Date(current.timeFound).toLocaleString() }}
              <span v-if="funi[$route.params.user.toLowerCase()]">
                | <span class="funny"> {{ funi[$route.params.user.toLowerCase()] }} </span>
              </span>
            </p>
          </div>
          <div class="grid grid-cols-5">
            <nav class="left-nav p-4 col-span-1">
              <a :href="`https://scratch.mit.edu/users/${user.username}`">
                <img :src="`https://cdn2.scratch.mit.edu/get_image/user/${user.id}_90x90.png`" />
                {{ user.username }}
              </a>
              <p>{{ forumUser ? forumUser.counts.total.count : "1" }} posts</p>
              <Status v-if="user" :username="user.username" />
            </nav>
            <div class="col-span-4 p-4 border-l border-blue-400 w-full h-60">
              <div v-if="current" class="content h-44 overflow-auto">
                <Render :content="current.value" />
              </div>
              <footer class="h-14 text-right">
                <a :href="`https://ocular.jeffalo.net/user/${user.username}?utm_campaign=scratory`">ocular</a>
                |
                <a :href="`https://magnifier.potatophant.net/users/${user.username}?utm_campaign=scratory`">magnifier</a>
                |
                <a :href="`https://postpercent.rirurin.com/users/${user.username}?utm_campaign=scratory`">postpercent</a>
                <br />
                <input
                  type="range"
                  v-model="time"
                  :max="history.length - 1"
                  class="w-full"
                  @change="next()"
                />
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.user ? this.user.username : this.$route.params.user
    };
  },
  data() {
    return {
      user: null,
      current: null,
      time: 0,
      history: null,
      forumUser: null,
      funi: {
        potatophant: "epic gamer",
        jeffalo: "hekcer",
        gosoccerboy5: "code golfing",
        chiroyce: "python enthusiast",
        kccuber: "da scratch cat &trade;",
        "9gr": "hmmmm..."
      }
    };
  },
  async fetch() {
    let res = await fetch(
      `https://scratchdb.lefty.one/v3/forum/user/history/${this.$route.params.user}`
    );
    let json = (await res.json()).map(entry => ({
      value: entry.previous_value,
      timeFound: entry.time_found
    }));

    this.history = json;
    this.current = json[0];

    let resp = await fetch(
      `https://scratchdb.lefty.one/v3/user/info/${this.$route.params.user}`
    );
    let user = await resp.json();

    this.user = user;

    let forumRes = await fetch(`https://scratchdb.lefty.one/v3/forum/user/info/${this.$route.params.user}/`)
    let forumUser = await forumRes.json()

    this.forumUser = forumUser
  },
  methods: {
    next() {
      this.current = this.history[this.time];
      this.$router.replace({ path: "#" + this.time })
    }
  },
  fetchOnServer: false
};
</script>

<style>
.margined {
  margin-left: 282.6px;
  margin-right: 282.6px;
}

@media only screen and (max-width: 1350px) {
  .margined {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
