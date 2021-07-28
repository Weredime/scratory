<template>
    <div class="__scratory">
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