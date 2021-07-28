<template>
    <div class="__scratory">
        <div ref="banner" class="banner bg-green-500 w-full p-5 text-white font-bold" v-if="isClient && !$settings.get('accepted')">
            <div class="grid grid-cols-4">
                <div class="col col-span-3">
                    <span>We use localStorage.<br />to customize your experience (power the settings)</span>
                    <br />
                    <span>If you don't like us using localStorage on your computer, just leave this site plz</span>
                </div>
                <div class="col">
                    <button class="p-3 border-2 rounded-md shadow-md cursor-pointer border-green-300" @click="acceptCookies()">Ok</button>
                </div>
            </div>
        </div>
        <Navbar />
        <div class="page overflow-auto">
            <Nuxt />
        </div>
        <div class="footer p-10 flex justify-center">
            <div class="grid grid-cols-2 sm:grid-cols-3 w-full">
                <div class="col">
                    <h4 class="text-xl">Credits</h4>
                    <p><a href="https://scratch.mit.edu/users/9gr">@9gr</a> for making scratory</p>
                    <p><a href="https://scratch.mit.edu/users/DatOneLefty">@DatOneLefty</a> for <a href="https://scratchdb.lefty.one">ScratchDB</a></p>
                    <p><a href="https://scratch.mit.edu/users/Jeffalo">@Jeffalo</a> for ocular statuses</p>
                    <p><a href="https://scratch.mit.edu/users/potatophant">@potatophant</a> for inspiration</p>
                </div>
                <div class="col hidden sm:block">
                    <h4 class="text-xl">Discuss</h4>
                    <a href="https://github.com/FunctionalMetatable/scratory">Source code (GitHub)</a>
                    <br />
                    <a href="https://scratch.mit.edu/discuss/topic/518860">Forum Topic</a>
                </div>
                <div class="col">
                    <h4 class="text-xl">Other scratch tools</h4>
                    <p><a href="https://ocular.jeffalo.net">ocular</a></p>
                    <p><a href="https://magnifier.potatophant.net">magnifier</a></p>
                    <p><a href="https://postpercent.rirurin.com">postpercent</a></p>
                    <p><a href="https://scratchstats.com">ScratchStats</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() { return { isClient: process.client }},
    methods: {
        acceptCookies() {
            this.$settings.set('accepted', true)
            this.$refs.banner.style.display = 'none'
        }
    }
}
</script>
<style>
.page {
    width: 100%;
    height: calc(72vh - 50px);
}
.footer {
    height: 28vh;
    width: 100%;
    @apply bg-blue-100
}
</style>