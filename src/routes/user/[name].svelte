<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
import { onMount } from 'svelte';

	export const load: Load = async ({ page, fetch }) => {
		const data = await fetch(`/api/user/${page.params.name}`).then((res) => res.json());
		return {
			props: {
				name: page.params.name,
				data
			}
		};
	};
</script>

<script lang="ts">
	export let data: Record<string, any> = {};
	export let name: string;
	let current = data.signatureHistory[0];
	let id = 0;
	let funi = {
		potatophant: 'epic gamer',
		jeffalo: 'hekcer',
		gosoccerboy5: 'code golfing',
		chiroyce: 'python enthusiast',
		kccuber: 'da scratch cat &trade;',
		Verixion: 'hmmmm...',
		gobosunakku: 'amogus &trade;'
	};

	onMount(() => {
		if (typeof location.hash === "string") {
			let num: string = location.hash.substring(1)
			const foundSigs = data.signatureHistory.filter((sig) => sig.time_found === num)

			if (foundSigs[0]) {
				id = data.signatureHistory.indexOf(foundSigs[0])
				current = foundSigs[0]
			}
		}
		window.scratchblocks.renderMatching('pre.blocks', {
			style: 'scratch3'
		});
	})

	function next(e) {
		current = data.signatureHistory[id];
		window.location.hash = `#${current.time_found}`

		setTimeout(() => {
			if (typeof window !== 'undefined') {
				window.scratchblocks.renderMatching('pre.blocks', {
					style: 'scratch3'
				});
			}
		}, 0);
	}
</script>

<svelte:head>
	<title>Scratory | {data.userData.username}</title>
</svelte:head>
<main>
	<div>
		<div class="p-3 margined">
			<div class="main">
				<div class="mb-2 shadow-md rounded-md overflow-hidden">
					<div class="header w-full bg-blue-400 p-2">
						<p>
							{new Date(current.time_found).toLocaleString()}
							{#if funi[name.toLowerCase()]}
								<span>
									| <span class="funny">
										{@html funi[name.toLowerCase()]}
									</span>
								</span>
							{/if}
						</p>
					</div>
					<div class="grid grid-cols-5">
						<nav class="left-nav p-4 col-span-1">
							<a href="https://scratch.mit.edu/users/{data.userData.username}">
								<img
									src="https://cdn2.scratch.mit.edu/get_image/user/{data.userData.id}_90x90.png"
									alt={`${data.userData.username}'s profile picture`}
								/>
								{data.userData.username}
							</a>
							<p>
								{data?.forumData?.counts?.total?.count ?? 1} post{data?.forumData?.counts?.total
									?.count == null
									? ''
									: 's'}
							</p>
						</nav>
						<div class="col-span-4 p-4 border-l border-blue-400 w-full h-60">
							<div class="content h-44 overflow-auto">
								{@html current.previous_value}
							</div>
							<footer class="h-14 text-right">
								<a
									href="https://ocular.jeffalo.net/user/{data.userData
										.username}?utm_campaign=scratory">ocular</a
								>
								|
								<a
									href="https://magnifier.potatophant.net/users/{data.userData
										.username}?utm_campaign=scratory">magnifier</a
								>
								|
								<a
									href="https://postpercent.rirurin.com/users/{data.userData
										.username}?utm_campaign=scratory">postpercent</a
								>
								<br />
								<input
									type="range"
									bind:value={id}
									max={data.signatureHistory.length}
									class="w-full"
									on:change={next}
								/>
							</footer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.margined {
		margin: 282.6px;
		margin-top: 60px;
	}
	@media only screen and (max-width: 1350px) {
		.margined {
			margin: 10px;
		}
	}

	pre.blocks {
		background: rgba(0, 0, 0, 0);
	}
</style>
