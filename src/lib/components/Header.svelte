<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<i class="fa-solid fa-khanda" />
	</svelte:fragment>
	Panjabi Kosh
	<svelte:fragment slot="trail">
		<button type="button" class="btn variant-filled">Button</button>
	</svelte:fragment>
</AppBar>
