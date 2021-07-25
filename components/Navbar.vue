<template>
    <div class="flex flex-wrap bg-green-400 w-full h-10 navbar">
        <div class="col">
            <NuxtLink to="/" class="ease duration-700 hover:bg-green-500 p-3 inline-block py-2 px-5">
                Home
            </NuxtLink>
        </div>
        <div class="col">
            <NuxtLink to="/user/9gr" class="ease duration-700 hover:bg-green-500 p-3 inline-block py-2 px-5">
                Signature History
            </NuxtLink>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>