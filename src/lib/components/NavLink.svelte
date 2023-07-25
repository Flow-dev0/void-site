<script>
	import { page } from '$app/stores';

	$: active_classes =
		$page.url.pathname === $$props.href ? 'active bg-sky-500 dark:bg-sky-500' : '';
	export let href;
</script>

<a
	class="{active_classes} mr-1 hidden rounded-lg p-1 text-zinc-800 transition-all hover:bg-sky-400   hover:no-underline dark:text-zinc-200 dark:hover:bg-sky-300 dark:hover:text-zinc-800 sm:px-3 sm:py-2 md:inline-block"
	{href}
	><span class="capsize"><slot /> </span>
</a>

<style>
</style>
