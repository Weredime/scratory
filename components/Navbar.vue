<template>
    <div class="flex flex-wrap bg-blue-400 w-full h-10 navbar">
        <div class="col">
            <NuxtLink to="/" class="ease duration-700 hover:bg-blue-500 p-3 inline-block py-2 px-5">
                Home
            </NuxtLink>
        </div>
        <div class="col">
            <NuxtLink to="/user/9gr" class="ease duration-700 hover:bg-blue-500 p-3 inline-block py-2 px-5">
                Signature History
            </NuxtLink>
        </div>
        <div class="col ml-auto">
            <NuxtLink to="/settings" class="ease duration-700 hover:bg-blue-500 p-3 inline-block py-2 px-5">
                Settings
            </NuxtLink>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>