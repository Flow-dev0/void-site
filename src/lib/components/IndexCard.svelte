<script>
	export let href = '#';

	export let title = 'Untitled post';
	/** @type {string} */
	export let stringData = 'no date';
</script>

<a
	data-sveltekit-prefetch
	class="w-full text-zinc-900 transition-colors hover:text-cyan-600 hover:no-underline dark:text-cyan-400 dark:hover:text-cyan-100"
	{href}
	><div class="mb-12 mt-4 w-full">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="mb-2 w-full flex-auto text-lg font-medium md:text-xl">
				{title}
			</h4>
			<div class="inline-flex flex-1 items-center">
				<p class="mb-4 w-32 text-left text-zinc-500 md:mb-0 md:text-right">{stringData}</p>
			</div>
		</div>
		<p class="text-zinc-600 dark:text-zinc-400">
			<slot />
		</p>
	</div></a
>
