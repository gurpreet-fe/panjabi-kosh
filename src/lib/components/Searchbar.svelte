<script>
	const words = [
		'act',
		'action',
		'active',
		'activity',
		'actor',
		'actress',
		'actual',
		'actually',
		'ad',
		'adapt',
		'add',
		'addition',
		'additional',
		'address',
		'administration',
		'admire',
		'admit',
		'adopt',
		'adult',
		'advance',
		'advanced',
		'advantage',
		'adventure',
		'advertise',
		'advertisement',
		'advertising',
		'advice',
		'advise',
		'affair',
		'affect',
		'afraid',
		'after',
		'afternoon',
		'afterwards',
		'again',
		'against',
		'age',
		'aged',
		'agency',
		'agenda',
		'agent',
		'aggressive',
		'ago',
		'agree',
		'agreement',
		'ah',
		'ahead',
		'aid',
	];

	let value = '';

	$: filteredWords = value ? words.filter((w) => w.includes(value)) : [];
</script>

<div class="relative">
	<form action="" class="flex">
		<input class="w-full px-2.5 text-2xl" type="text" name="" id="" placeholder="Kojo" bind:value />
		<button class="variant-filled-primary h-12 w-12 text-2xl">
			<i class="fa-solid fa-magnifying-glass" />
		</button>
	</form>

	<ul class="absolute w-full">
		{#each filteredWords as word}
			<li
				class="flex h-10 w-full items-center bg-surface-400 px-2.5 py-1 text-2xl text-white hover:cursor-pointer hover:bg-surface-500">
				{word}
			</li>
		{/each}
	</ul>
</div>
