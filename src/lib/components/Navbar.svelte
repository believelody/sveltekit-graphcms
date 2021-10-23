<script>
	export let pages;
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
	<div class="px-2 mx-2 navbar-start">
		<a href="/" class="text-lg font-bold"> SvelteKit GraphCMS </a>
	</div>
	<div class="hidden px-2 mx-2 navbar-center lg:flex">
		<ul class="flex items-stretch">
			{#each pages as {title, slug}}
                <li>
                    <a href="/{slug}" class="btn btn-ghost btn-sm rounded-btn"> {title} </a>
                </li>
            {/each}
		</ul>
	</div>
</div>
