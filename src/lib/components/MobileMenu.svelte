
<script>
	import { MY_ODYSEE } from '$lib/siteConfig.js';

	let isOpen = false;
	let isMenuRendered;
	$: {
		if (isOpen) {
			setTimeout(() => {
				isMenuRendered = true;
			}, 20);
		} else {
			setTimeout(() => {
				isMenuRendered = false;
			}, 300);
		}
	}
</script>

<div class="ml-[-0.60rem] md:hidden">
	<button
		class="burger visible"
		aria-label="Toggle menu"
		type="button"
		on:click={() => (isOpen = !isOpen)}
	>
		{#if !isOpen}
			<svg
				class="absolute h-5 w-5 text-zinc-900 dark:text-zinc-100"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					d="M2.5 7.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M2.5 12.5H17.5"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{:else}
			<svg
				class="absolute h-5 w-5 text-zinc-900 dark:text-zinc-100"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				fill="none"
				shape-rendering="geometricPrecision"
				data-hide="true"
			>
				<path d="M18 6L6 18" />
				<path d="M6 6l12 12" />
			</svg>
		{/if}
	</button>
	{#if isOpen}
		<ul
			class="menu absolute flex flex-col  rounded-md  text-2xl bg-gradient-to-br from-sky-500 to-sky-500 "
			class:menuRendered={isMenuRendered}
		>
		<div class="pb-4"></div>
			<li
				class=" border-zinc-300 p-5 font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100 hover:bg-zinc-900 hover:rounded "
				style="transition-delay: 150ms;"
			>
				<a
					class="flex w-auto justify-center"
					data-sveltekit-prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/"><p class="text-white">Home</p></a
				>
			</li>
			<li
				class=" border-zinc-300 p-5 font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100 hover:bg-zinc-900 hover:rounded"
				style="transition-delay: 250ms;"
			>
				<a
					class="flex w-auto justify-center"
					data-sveltekit-prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/blog"><p class="text-white">Blog</p></a
				>
			</li>
			<li
				class=" border-zinc-300 p-5 font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100 hover:bg-zinc-900 hover:rounded"
				style="transition-delay: 350ms;"
			>
				<a
					class="flex w-auto justify-center"
					data-sveltekit-prefetch
					on:click={() => setTimeout(() => (isOpen = false), 300)}
					href="/about"><p class="text-white">About</p></a
				>
			</li>
			<div class="border-solid border-b-2 w-2/3 m-auto pt-4" ></div>
			<div class="flex flex-col items-center justify-between gap-2 rounded-md  p-6 py-6 md:flex-row">
			<div class="mb-3 text-center md:mb-0 md:text-left ">
				<span class="font-bold  text-white text-md">"Hey listen"</span>
				<p class="text-white text-sm pt-1">
					Follow me on <span class="font-bold ">odysee</span> for an even less useful tech
					stuff... <span class="font-bold "></span>
				</p>
			</div>
			<a
				href={MY_ODYSEE}
				class="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-gray-700 outline-none transition  duration-100 hover:no-underline hover:shadow focus-visible:ring  active:shadow  md:text-base"
			>
				<p class="text-black ">Subscribe</p>
			</a>
		</div>
		</ul>
		
	{/if}
	
</div>

<style lang="postcss">
	.burger {
		transition: opacity 300ms ease;
		border: 0;
		background: transparent;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.burger svg {
		transform: translate(-50%, -50%) scale(1);
		top: 50%;
		left: 50%;
		opacity: 1;
		transition: opacity 300ms ease, transform 300ms ease;
	}

	.menu {
		padding: 0 0px 0 0px;
		margin-top: 25px;
		padding-top: 0px;
		width: 100%;
		height: auto;
		z-index: 1000;
		opacity: 0;
		left: 0;
		transition: opacity 300ms ease, transform 300ms ease;
	}

	.menu li {
		transform: translateX(-16px);
		opacity: 0;
		transition: opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;
		width: 0px;
		white-space: nowrap;
	}

	.menuRendered {
		opacity: 1;
	}

	.menuRendered li {
		@apply w-full border-zinc-200 dark:border-zinc-600;
		transform: translateX(0);
		opacity: 1;
		text-align: center;
	}


	@keyframes grow {
		0% {
			height: 0px;
		}
		100% {
			height: 24px;
		}
	}
</style>
