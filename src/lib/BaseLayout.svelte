<script context="module">
	import {
		MY_TWITTER_HANDLE,
		REPO_URL,
		SITE_TITLE,
		CURRENT_YEAR,
		SITE_DESCRIPTION,
		MY_ODYSEE
	} from '$lib/siteConfig.js';
</script>

<script>
	import Nav from '$lib/components/Nav.svelte';
	import { navigationIsDelayed } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import { Circle3 } from 'svelte-loading-spinners';
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={'RSS Feed for ' + SITE_TITLE}
		href="/feed.xml"
	/>
</svelte:head>

{#if $navigationIsDelayed}
	<div class="fixed z-10 h-full w-full" in:fade={{ duration: 150 }}>
		<div class="absolute z-10 h-full w-full bg-white opacity-50 dark:bg-sky-900" />
		<div class="absolute z-20 flex h-full w-full items-center justify-center">
			<Circle3 />
		</div>
	</div>
{/if}

<div class="flex flex-col justify-center px-4 sm:px-8">
	<Nav />
</div>
<main class="flex flex-col justify-center px-4 sm:px-8">
	<slot />
</main>

<footer class=" pt-4 sm:pt-6 lg:pt-8">
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<div
			class="flex flex-col items-center justify-between gap-2 rounded-md bg-sky-500 p-6 py-6 md:flex-row"
		>
			<div class="mb-3 text-center md:mb-0 md:text-left">
				<span class="font-bold uppercase tracking-widest text-white">"Hey listen" - Navi</span>
				<p class="text-white">
					Follow me on <span class="font-bold uppercase">odysee</span> for an even less useful tech
					stuff... <span class="font-bold uppercase">(ㆆ _ ㆆ)</span>
				</p>
			</div>
			<a
				href={MY_ODYSEE}
				class="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-gray-700 outline-none transition  duration-100 hover:no-underline hover:shadow focus-visible:ring  active:shadow  md:text-base"
			>
				<p class="text-black ">Subscribe</p>
			</a>
		</div>
	</div>

	<div class="pt-12">
		<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
			<div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
				<div class="col-span-full lg:col-span-2">
					<!-- logo - start -->
					<div class="mb-4 lg:-mt-2">
						<a
							href="/"
							class="text-black-800 inline-flex items-center gap-2 text-xl font-bold md:text-2xl"
							aria-label="logo"
						>
							<svg
								width="131.569"
								height="26.057"
								viewBox="0 0 34.811 6.894"
								xml:space="preserve"
								xmlns="http://www.w3.org/2000/svg"
								><g transform="translate(-.412 -5.334) scale(2.88673)"
									><path
										style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										d="M.143 1.853h.622l.848 2.379-.633-.006z"
									/><path
										style="display:inline;fill:#00bdff;fill-opacity:.496914;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										d="M2.45 1.848h-.622L.98 4.226l.633-.005z"
									/><path
										style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										d="M2.965 2.649a.793.793 0 0 0-.794.793.793.793 0 0 0 .794.794.793.793 0 0 0 .793-.794.793.793 0 0 0-.793-.793zm.08.474h.066l-.238.666h-.065zm-.327.116v.073l-.256.13.256.132v.073l-.338-.176v-.056zm.518 0 .34.176v.056l-.34.176v-.073l.257-.131-.257-.131zM4.059 2.637l-.012 1.596h.58l.008-1.588zM5.636 2.651a.792.792 0 0 0-.792.793.792.792 0 0 0 .792.792.792.792 0 0 0 .792-.792.792.792 0 0 0-.792-.793zm0 .475a.317.317 0 0 1 .317.318.317.317 0 0 1-.317.317.317.317 0 0 1-.318-.317.317.317 0 0 1 .318-.318z"
									/><path
										style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										d="M6.056 1.852h.606v2.381h-.606z"
									/><circle
										style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										cx="4.341"
										cy="2.192"
										r=".337"
									/><path
										style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										d="M6.877 1.854h.606v2.381h-.606zM8.537 4.235V3.187c.003-.045.253-.724.818-.697.564.028.833.518.849.639.015.12.008 1.106.008 1.106l-.53-.002v-.878s.02-.253-.28-.296c-.3-.043-.34.292-.34.292l-.002.882zM10.451 1.85h.606v2.381h-.606z"
									/><path
										style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										d="m10.539 3.386.914-.854.745-.001-1.01.855 1.014.848-.727-.001z"
									/><path
										style="display:inline;fill:#00bdff;fill-opacity:.8;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										d="M7.713 2.639 7.7 4.234h.58l.008-1.588z"
									/><circle
										style="display:inline;fill:#00bdff;fill-opacity:.5;stroke-width:0;stroke-dasharray:none;stroke-opacity:0;paint-order:fill markers stroke"
										cx="7.995"
										cy="2.194"
										r=".337"
									/></g
								></svg
							>
						</a>
					</div>
					<!-- logo - end -->

					<p class="mb-6 text-gray-600  dark:text-gray-400 sm:pr-8">{SITE_DESCRIPTION}</p>

					<!-- social - start -->
					<!-- github -->
					<div class="flex gap-4">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={REPO_URL}
							class="rounded-full bg-sky-500 p-2 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 dark:bg-sky-500"
						>
							<svg
								class="invert dark:invert-0"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="24"
								height="24"
								viewBox="0 0 50 50"
							>
								<path
									d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
								/>
							</svg>
						</a>
						<!-- mostodon -->
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={'https://fosstodon.org/' + MY_TWITTER_HANDLE}
							class="rounded-full bg-sky-500 p-2 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 dark:bg-sky-500"
						>
							<svg
								class="invert dark:invert-0"
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="28"
								height="28"
								viewBox="0 0 32 32"
							>
								<path
									d="M 15.9375 4.03125 C 12.917 4.0435 9.9179219 4.4269844 8.3574219 5.1464844 C 8.3574219 5.1464844 5 6.6748594 5 11.880859 C 5 18.077859 4.9955 25.860234 10.5625 27.365234 C 12.6945 27.938234 14.527953 28.061562 16.001953 27.976562 C 18.676953 27.825562 20 27.005859 20 27.005859 L 19.910156 25.029297 C 19.910156 25.029297 18.176297 25.640313 16.029297 25.570312 C 13.902297 25.495313 11.6615 25.335688 11.3125 22.679688 C 11.2805 22.432688 11.264625 22.182594 11.265625 21.933594 C 15.772625 23.052594 19.615828 22.420969 20.673828 22.292969 C 23.627828 21.933969 26.199344 20.081672 26.527344 18.388672 C 27.041344 15.720672 26.998047 11.880859 26.998047 11.880859 C 26.998047 6.6748594 23.646484 5.1464844 23.646484 5.1464844 C 22.000984 4.3779844 18.958 4.019 15.9375 4.03125 z M 12.705078 8.0019531 C 13.739953 8.0297031 14.762578 8.4927031 15.392578 9.4707031 L 16.001953 10.505859 L 16.609375 9.4707031 C 17.874375 7.5037031 20.709594 7.6264375 22.058594 9.1484375 C 23.302594 10.596438 23.025391 11.531 23.025391 18 L 23.025391 18.001953 L 20.578125 18.001953 L 20.578125 12.373047 C 20.578125 9.7380469 17.21875 9.6362812 17.21875 12.738281 L 17.21875 16 L 14.787109 16 L 14.787109 12.738281 C 14.787109 9.6362812 11.429688 9.7360938 11.429688 12.371094 L 11.429688 18 L 8.9765625 18 C 8.9765625 11.526 8.7043594 10.585438 9.9433594 9.1484375 C 10.622859 8.3824375 11.670203 7.9742031 12.705078 8.0019531 z"
								/>
							</svg>
						</a>
					</div>
					<!-- social - end -->
				</div>

				<!-- nav - start -->
				<div>
					<div
						class="text-black0 mb-4 font-bold uppercase tracking-widest underline dark:text-zinc-300"
					>
						Site
					</div>
					<nav class="flex flex-col gap-4">
						<a class="text-zinc-600 transition hover:text-zinc-800" href="/">Home</a>
						<a class="w- text-zinc-600 transition hover:text-zinc-800" href="/about">About me</a>
						<a class="text-zinc-600 transition hover:text-zinc-800" href="/feed.xml" rel="external">
							RSS
						</a>
					</nav>
				</div>
				<div>
					<div
						class="mb-4 font-bold uppercase tracking-widest text-black underline dark:text-zinc-300 "
					>
						Socials
					</div>
					<nav class="flex flex-col gap-4">
						<a
							class="text-zinc-600 transition hover:text-zinc-800"
							target="_blank"
							rel="noopener noreferrer"
							href={'https://fosstodon.org/' + MY_TWITTER_HANDLE}
						>
							Mastodon
						</a>
						<a
							class="text-zinc-600 transition hover:text-zinc-800"
							target="_blank"
							rel="noopener noreferrer"
							href={MY_ODYSEE}
						>
							Odysee
						</a>
						<a
							class="text-zinc-600 transition hover:text-zinc-800"
							target="_blank"
							rel="noopener noreferrer"
							href={REPO_URL}
						>
							GitHub
						</a>
					</nav>
				</div>
				<!-- nav - end -->
			</div>
		</div>
		<div class="mx-auto mt-8 flex w-full max-w-3xl flex-col items-center justify-center">
			<div
				class="border-t border-sky-500 py-8 text-center text-sm text-gray-600 dark:text-gray-400"
			>
				© {SITE_TITLE}
				{CURRENT_YEAR} - All rights reserved.
			</div>
		</div>
	</div>
</footer>
