<script lang="ts">
	import '../app.scss';
	import Navbar from '$lib/Navbar.svelte';
	import { navigating } from '$app/stores'
</script>

<main>
	<div class="app">
		<Navbar />
		{#if $navigating}
			<div class="box">
				<div class="container">
					<span class="circle"></span>
					<span class="circle"></span>
					<span class="circle"></span>
					<span class="circle"></span>
				</div>
			</div>
		{:else}
			<div class="pt-10">
				<slot />
			</div>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
	}
</style>

{#if $navigating}
	<!-- Credit to https://codepen.io/sudeepgumaste/pen/abdrorB -->
	<style lang="scss">
		*, *::before, *::after {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.app {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100vw;
			height: 100vh;
			background: #c5cae9;
		}

		.box {
			width: 300px;
			height: 300px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.container {
			height: 15px;
			width: 105px;
			display: flex;
			position: relative;
			.circle {
				width: 15px;
				height: 15px;
				border-radius: 50%;
				@apply bg-blue-400;
				animation: move 500ms linear 0ms infinite;
				margin-right: 30px;
				
				&:first-child {
					position: absolute;
					top:0;
					left:0;
					animation: grow 500ms linear 0ms infinite;
				}
				
				&:last-child {
					position: absolute;
					top: 0;
					right: 0;
					margin-right: 0;
					animation: grow 500ms linear 0s infinite reverse;
				}
			}
		}

		@keyframes grow {
			from {transform: scale(0,0); opacity: 0;}
			to {transform: scale(1,1); opacity: 1;}
		}

		@keyframes move {
			from {transform: translateX(0px)}
			to {transform: translateX(45px)}
		}
	</style>
{/if}