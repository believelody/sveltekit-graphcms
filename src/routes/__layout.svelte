<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("/pages.json")
        if (res.ok) {
            const { pages } = await res.json()

            return { props: { pages } }
        }
    }
</script>

<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	export let pages
</script>

<Navbar {pages} />

<main class="container max-w-xl mx-auto px-4">
	<slot />
</main>
