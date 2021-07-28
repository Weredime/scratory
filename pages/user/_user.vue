<template>
    <div>
        <div class="p-3 margined">
            <Spinner v-if="!user" />
            <div class="main" v-if="user">
                <div class="mb-2 shadow-md rounded-md overflow-hidden">
                    <div class="header w-full bg-blue-400 p-2">
                        <p> 
                            {{ new Date(current.timeFound).toLocaleString() }} | <span v-if="$route.params.user.toLowerCase() == 'potatophant'">sus</span> <span v-if="$route.params.user.toLowerCase() == 'jeffalo'">hekcer</span> <span v-if="$route.params.user.toLowerCase() == 'gosoccerboy5'">code golfing</span><span v-if="$route.params.user.toLowerCase() == 'chiroyce'">the python guy</span> <span v-if="$route.params.user.toLowerCase() == 'kccuber'">da scratch cat &trade;</span> <span v-if="$route.params.user.toLowerCase() == '9gr'">hmmm</span>
                        </p>
                    </div>
                    <div class="grid grid-cols-5">
                        <nav class="left-nav p-4 col-span-1">
                            <a :href="`https://scratch.mit.edu/users/${user.username}`">
                                <img :src="`https://cdn2.scratch.mit.edu/get_image/user/${user.id}_90x90.png`" />
                                {{ user.username }}
                            </a>
                            <span class="block" v-if="forumUser">{{ forumUser.counts.total.count }} posts</span>
                            <Status v-if="user" :username="user.username" />
                        </nav>
                        <div class="col-span-4 p-4 border-l border-blue-400 w-full h-60">
                            <div class="content h-44 overflow-auto">
                                <Render :content="current.value" />
                            </div>
                            <footer class="h-14 text-right">
                                <a :href="`https://ocular.jeffalo.net/user/${user.username}?utm_campaign=scratory`">ocular</a> | <a :href="`https://magnifier.potatophant.net/users/${user.username}?utm_campaign=scratory`">magnifier</a> | <a :href="`https://postpercent.rirurin.com/users/${user.username}?utm_campaign=scratory`">postpercent</a>
                                <br />
                                <input type="range" v-model="time" :max="history.length - 1" class="w-full" @change="next()" />
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
            title: `${this.user?.username || this.$route.params.user}`
        }
    },
    data() {
        return {
            user: null,
            current: null,
            time: 0,
            history: null,
            forumUser: null,
            loaded: null
        }
    },
    async fetch() {
        let res = await fetch(`https://scratchdb.lefty.one/v3/forum/user/history/${this.$route.params.user}`)
        let json = (await res.json()).map(entry => {
            return {
                value: entry.previous_value,
                timeFound: entry.time_found
            }
        })

        this.history = json
        this.current = json[0]
        
        let resp = await fetch(`https://scratchdb.lefty.one/v3/user/info/${this.$route.params.user}`)
        let user = await resp.json()

        this.user = user

        let fRes = await fetch(`https://scratchdb.lefty.one/v3/forum/user/info/${this.$route.params.user}`)
        let fUser = await fRes.json()

        this.forumUser = fUser

        if (process.client) {
            let parsed = Number(window.location.hash?.substr(1))
            this.time = this.history.length - (typeof parsed == 'number' ? parsed : 0)
            this.next()
        }
    },
    async mounted() {
        if (this.forumUser) {
            let parsed = Number(window.location.hash?.substr(1))
            this.time = (typeof parsed == 'number' ? parsed : 0)
            this.next()
        }
    },
    methods: {
        next() {
            this.current = this.history[this.time]
            this.$router.replace(`#${this.time}`)
        }
    }
}
// |                      |
//   | <------ 20 ------>  // generated
// |----------------------|
//start                 finish
</script>

<style>
.margined {
    margin-left: 282.600px;
    margin-right: 282.600px;
}

@media only screen and (max-width: 1350px) {
  .margined {
    margin-left: 10px;
    margin-right: 10px;
  }
}

a:not(.navbar a, .nohigh) {
    @apply font-semibold text-blue-700
}
</style>