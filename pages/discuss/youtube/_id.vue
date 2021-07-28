<template>
</template>
<script>
export default {
    data() {
        return {}
    },
    mounted() {
        window.location.replace(window.location.href.replace(/(.*)\/discuss\/youtube\/(.*)/g, 'https://youtube.com/watch?v=$2'))
    }
}
</script>