<script>
		import { MY_ODYSEE_EMBED } from '$lib/siteConfig.js';
</script>

<section class="w-full mx-auto  px-2 sm:px-4 py-8 my-8 items-center">
	<div class=" px-2 sm:px-4 items-center">
		<div class="relative" style="padding-top: 56.25%">
		<iframe class="absolute inset-0 h-full rounded-sm border-none"
			src={MY_ODYSEE_EMBED} title="Odysee video player" frameborder="0"
			allow="accelerometer; gyroscope; picture-in-picture"
			allowfullscreen></iframe>
		</div>
	</div>
</section>