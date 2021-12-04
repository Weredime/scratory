<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit"

    export const load: Load = async ({ fetch, page: { params } }) => {
        const res = await fetch(`/api/cloud/${params.id}?limit=40`)
        const infoRes = await fetch(`/api/project/${params.id}`)

        const json = await res.json()
        const infoJson = await infoRes.json()

        return {
            props: {
                logs: json,
                id: Number(params.id),
                project: infoJson
            }
        }
    }
</script>
<script lang="ts">
    import { goto } from "$app/navigation"
    export let logs: Array<CloudObject>
    export let projectId: number
    export let project;
    let inputProjectId: number = projectId
    let offset: number = 0
    let lastLogChunk: Array<CloudObject> = logs

    async function fetchData() {
        offset += 40
        const res = await fetch(`/api/cloud/${projectId}?offset=${offset}&limit=40`)
        const json: Array<CloudObject> = await res.json()
        lastLogChunk = json;

        return json
    }
    function refreshProject() {
        goto(`/cloud/${inputProjectId}`)
    }

</script>
<svelte:head>
    <title>Scratory | {project.title}</title>
</svelte:head>
<div class="m-3 main">
    <div class="flex justify-center flex-wrap">
        <input type="number" class="p-4 border-gray-900 border-2 rounded-xl shadow-md" placeholder="Project id" bind:value={inputProjectId} />
        <button class="p-4 bg-green-500 ml-2" on:click={refreshProject}>Go</button>
    </div>
    <div class="grid-container">
        {#if logs.length === 0}
            <span class="text-center">No logs available.</span>
        {/if}
        {#each logs as log}
            <div class="grid grid-cols-5 gap-5 m-3 shadow-md log w-full border-gray-500 border-2 mr-3">
                <div class="col">
                    <a href="https://scratch.mit.edu/users/{log.user}" class="text-blue-400 hover:text-blue-900">
                        {log.user}
                    </a>
                </div>
                <div class="col">
                    {log.name}
                </div>
                <div class="col">
                    {log.verb.split("_")[0]}
                </div>
                <div class="col">
                    {log.value}
                </div>
                <div class="col">
                    {new Date(log.timestamp).toLocaleString()}
                </div>
            </div>
        {/each}
    </div>
</div>
<style>
    div.m-3.main {
        max-width: 100vw;
    }
</style>