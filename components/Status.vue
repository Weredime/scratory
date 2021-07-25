<template>
    <i class="inline-block">{{ status }} <span class="rounded-full w-2 h-2" :style="`background-color: ${color};`"></span></i>
</template>
<script>
export default {
    props: ["username"],
    data() {
        return {
            status: "",
            color: ""
        }
    },
    async fetch() {
        let res = await fetch(`https://my-ocular.jeffalo.net/api/user/${this.username}`)
        let { status, color } = await res.json()
        
        this.status = status;
        this.color = color;
    }
}
</script>