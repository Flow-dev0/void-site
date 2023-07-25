<script>
	import { MY_TWITTER_HANDLE } from '$lib/siteConfig.js';
	import dayjs from 'dayjs';
	import { DEFAULT_OG_IMAGE } from '$lib/siteConfig';
	import { page } from '$app/stores';
	import profile from '$lib/img/featured/about.png';

	/** @type {import('$lib/types.d.ts').ContentItem} */
	export let data;
	let { metadata, content } = data; // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates
</script>

<svelte:head>
	<title>{metadata.title} - Voidlink</title>

	<link rel="canonical" href={$page.url} />
	<meta property="og:url" content={$page.url} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={metadata.title} />
	<meta name="Description" content={metadata.description} />
	<meta property="og:description" content={metadata.description} />
	<meta name="twitter:card" content={metadata.image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
	{#if metadata.image}
		<meta property="og:image" content={metadata.image} />
		<meta name="twitter:image" content={metadata.image} />
	{:else}
		<meta property="og:image" content={DEFAULT_OG_IMAGE} />
		<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
	{/if}
</svelte:head>

<article id="skip">
	<div class="p-5 mx-auto sm:p-10 md:p-16 ">
		<div class="flex flex-col max-w-4xl mx-auto overflow-hidden ">
			<img src="{metadata.feature}" alt="" class="w-full h-60 sm:h-96">
			<div class="p-4 m-4 mx-auto -mt-16 space-y-6  sm:px-10 sm:mx-12  bg-sky-500">
				<div class="flex">
					<div class="image w-1/3 m-auto scale-75">
						<img alt="logo" class="object-contain" src="{profile}">
					</div>
					<div class="flex">
						<div class="space-y-2 w-full pl-5 m-auto">
							<h1 class="inline-block text-2xl font-semibold sm:text-3xl text-white">{metadata.title}</h1>
							<div>
								<div>
									<p class="text-xs text-zinc-100">By Voidlink
									</p>
								</div>
								<div>
									<p class="min-w-32 flex items-center text-sm  text-zinc-100 md:mt-0">
										{dayjs(metadata.date).toISOString().slice(0, 10)}
									</p>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				
				
			</div>
			<div class="prose mt-6 w-full max-w-none dark:prose-invert p-2 md:p-4 lg:p-6">
				{@html content}
			</div>
		</div>
	</div>
</article>
