<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navbar.svelte';

	let { children } = $props();
</script>

<Navbar/>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

   <!-- Footer -->
    <footer class="border-t bg-white">
        <div class="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row">
            <p>
                © 2026 FakeStore.
            </p>

            <div class="flex gap-6">
                <a href="/" class="hover:text-gray-900">About</a>
                <a href="/" class="hover:text-gray-900">Contact</a>
                <a href="/products" class="hover:text-gray-900">Products</a>
            </div>
        </div>
    </footer>