<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from './Logo.svelte';
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	padding="px-20 py-6"
	background="bg-surface-500"
	class="text-white">
	<svelte:fragment slot="lead">
		<Logo />
	</svelte:fragment>

	<div class="font-['Bebas_Neue'] text-3xl">Panjabi Kosh</div>

	<svelte:fragment slot="trail">
		<nav>
			<ul class="flex items-center gap-x-4">
				<li>About us</li>
				<li>
					<button type="button" class="btn variant-filled-primary">Support</button>
				</li>
			</ul>
		</nav>
	</svelte:fragment>
</AppBar>
