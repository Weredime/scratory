<script context="module">
    export const prerender = false;
</script>
<script lang="ts">
    export let html: string;

    $: {
        
    }
</script>

<div class="render">{@html html}</div>