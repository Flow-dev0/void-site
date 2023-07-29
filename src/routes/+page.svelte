<script context="module">
</script>

<script>
	import COVER from '$lib/img/featured/1024.svg';
	import {
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL,
		DEFAULT_DRAFT_STATUS,
	} from '$lib/siteConfig';
	import FeatureCard from '$lib/components/FeatureCard.svelte';
	import BaseLayout from '$lib/BaseLayout.svelte';
  	import OdyseePlayer from '$lib/components/Odysee-player.svelte';

	export let data;
	let { items } = data;
	items.draft = {DEFAULT_DRAFT_STATUS}
</script>

<svelte:head>
	<title>welcome! - {SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/feed.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<BaseLayout>
	<div>
		<!-- section start -->
		<section>
			<!-- component -->
			<if div class="md flex h-[calc(100vh-92px)] flex-wrap items-center">
				<div class=" h-[calc(100vh-92px)] w-full lg:w-1/2">
					<div class="mx-4 md:mx-8">
						<h1
							class="mb-8 text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl md:text-5xl"
						>
							This is
							<br />
							<span
								class="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-sky-500"
							>
								<span class="relative skew-y-3 text-white dark:text-cyan-100">{SITE_TITLE}</span>
							</span>
							!
						</h1>

						<h1 class="pt-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
							Covering all things open source
						</h1>
						<div class="mt-16 flex font-light text-gray-800">
							<div class="pr-4">
								<span class="uppercase dark:text-gray-100">Linux</span>
							</div>
							<div class="pr-4">
								<span class="uppercase dark:text-gray-100">Android</span>
							</div>
							<div class="pr-4">
								<span class="uppercase dark:text-gray-100">Privacy</span>
							</div>
							<div class="visible pr-4 ">
								<span class="uppercase dark:text-gray-100">Security</span>
							</div>
						</div>

						<!-- description -->
						<div
							class="description mt-16 w-full text-lg text-gray-800 dark:text-gray-300 lg:w-2/3 lg:text-base"
						>
							<p>
								Hey there tech enthusiasts! Welcome to my playground, where we explore the latest
								and greatest in technology in a way that's simple and easy to understand. Whether
								you're a die-hard geek or just curious about what all the fuss is about, I aim to
								leave you with a newfound appreciation for the wonders of tech. So what are you
								waiting for? Let's dive right in and see what gems there are to discover!
							</p>
						</div>
						<div />
					</div>
				</div>

				<div
					class=" invisible flex h-screen w-full items-center object-scale-down md:w-1/2 md:pb-0 lg:visible "
				>
					<img src={COVER} class=" invisible w-full lg:visible" alt="banner with a panda on circuit board" />
				</div>
			</if>
		</section>
		<!-- section end -->
	</div>
	<div
		class=" sm:mx-0 md:mx-auto flex max-w-6xl flex-col items-start justify-center border-zinc-200 px-4 pb-2 dark:border-zinc-700 sm:px-8"
	>
		<div class="mb-8 flex flex-col-reverse items-start sm:flex-row" />

		<section id="skip" class="mb-16 w-full lg:mt-10">
			<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
				Featured Posts
			</h3>
			<div class="flex flex-col gap-6 md:flex-row">
				{#each items as item, i}
					{#if i < 3}
					{#if item.draft == "false"}
					<FeatureCard title={item.title} href={`/blog/${item.slug}`} stringData={item.date} />
					{/if}
					{/if}
				{/each}
			</div>
			<a
				class="mt-8 flex h-6 rounded-lg leading-7 text-zinc-600 transition-all dark:text-zinc-400 dark:hover:text-zinc-200"
				href="/blog"
				>See latest posts
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="ml-1 h-6 w-6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
					/>
				</svg>
			</a>
		</section>
	
	<OdyseePlayer></OdyseePlayer>

	</div>
</BaseLayout>
