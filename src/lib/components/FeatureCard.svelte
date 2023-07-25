<script>
	import { AUTHOR } from '$lib/siteConfig';
	export let title = 'Untitled post';
	export let href = '#';

	/** @type {string} */
	export let stringData;
</script>

<div
	class="rounded-md bg-sky-500 duration-150 ease-in hover:scale-110 dark:text-gray-50 md:w-1/3  "
>
	<a data-sveltekit-prefetch class="hover:no-underline " href="{href} ">
		<div class="mx-auto  rounded-md  pb-0 md:h-64">
			<div class="col-span-full bg-cover bg-no-repeat dark:bg-gray-700 lg:col-span-4" />
			<div class="col-span-full row-span-full flex flex-col p-6 lg:col-span-8 lg:p-10">
				<div class="flex justify-start">
					<span class="rounded-full bg-sky-400 px-2 py-1 text-xs font-bold text-sky-100">New</span>
				</div>
				<h1 class="text-3xl font-semibold text-sky-100">{title}</h1>
			</div>
		</div>
		<div class="flex items-center justify-between pb-4 pl-8 pr-8 pt-0 ">
			<div class="flex space-x-2">
				<span class="self-center text-sm text-sky-100">{AUTHOR}</span>
			</div>
			<span class="text-xs text-sky-100 ">{stringData}</span>
		</div>
	</a>
</div>
