<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<main>
	<div class="app">
		<Navbar />
		<slot />
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>
