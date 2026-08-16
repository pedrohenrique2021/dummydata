<script>
    import Card from "$lib/components/card.svelte";

    const categories = [
        { name: 'Electronics', icon: '💻' },
        { name: 'Clothing', icon: '👕' },
        { name: 'Home', icon: '🏠' },
        { name: 'Accessories', icon: '🎧' }
    ];

    const featuredProducts = [
        {
            name: 'Wireless Headphones',
            price: '249.90',
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600'
        },
        {
            name: 'Urban Sneakers',
            price: '329.90',
            category: 'Shoes',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600'
        },
        {
            name: 'Minimalist Watch',
            price: '189.90',
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600'
        }
    ];
</script>

<svelte:head>
    <title>Fake Store — Your Online Store</title>
    <meta
        name="description"
        content="A test online store built with SvelteKit."
    />
</svelte:head>

<div class="min-h-screen bg-gray-50 text-gray-900">

    <!-- Hero -->
    <section class="bg-gray-900 text-white">
        <div
            class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28"
        >
            <div>
                <span
                    class="mb-5 inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400"
                >
                    NEW COLLECTION
                </span>

                <h1 class="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                    All you need.
                    <span class="text-blue-500">In one place.</span>
                </h1>

                <p class="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
                    Find amazing products, special prices, and everything that matches your style.
                </p>

                <div class="mt-8 flex flex-wrap gap-4">
                    <a
                        href="/products"
                        class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                    >
                        See products →
                    </a>

                    <a
                        href="/products"
                        class="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-200 transition hover:bg-gray-800"
                    >
                        Explore offers
                    </a>
                </div>
            </div>

            <div class="hidden md:block">
                <div
                    class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 p-12 shadow-2xl"
                >
                    <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10"></div>
                    <div class="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10"></div>

                    <div class="relative">
                        <p class="text-sm font-semibold uppercase tracking-widest text-blue-200">
                            Weekly offers
                        </p>

                        <h2 class="mt-4 text-4xl font-black">
                            Up to 40% OFF
                        </h2>

                        <p class="mt-4 text-blue-100">
                            Take advantage of our special limited-time offers.
                        </p>

                        <a
                            href="/products"
                            class="mt-8 inline-block rounded-lg bg-white px-5 py-3 font-bold text-gray-900 transition hover:bg-gray-100"
                        >
                            Shop now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories -->
    <section class="mx-auto max-w-7xl px-6 py-16">
        <div class="mb-8 flex items-end justify-between">
            <div>
                <p class="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Categories
                </p>

                <h2 class="mt-2 text-3xl font-bold">
                    Find what you're looking for
                </h2>
            </div>

            <a
                href="/products"
                class="hidden text-sm font-semibold text-blue-600 hover:underline sm:block"
            >
                See all →
            </a>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            {#each categories as category}
                <a
                    href="/products"
                    class="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                    <div
                        class="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl transition group-hover:bg-blue-50"
                    >
                        {category.icon}
                    </div>

                    <h3 class="mt-5 font-bold">
                        {category.name}
                    </h3>

                    <p class="mt-1 text-sm text-gray-500">
                        See products →
                    </p>
                </a>
            {/each}
        </div>
    </section>

    <!-- Products -->
    <section class="bg-white py-16">
        <div class="mx-auto max-w-7xl px-6">

            <div class="mb-8 flex items-end justify-between">
                <div>
                    <p class="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Featured
                    </p>

                    <h2 class="mt-2 text-3xl font-bold">
                        Popular products
                    </h2>
                </div>

                <a
                    href="/products"
                    class="text-sm font-semibold text-blue-600 hover:underline"
                >
                    See all →
                </a>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {#each featuredProducts as product}
                    <Card
                        title={product.name}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                    />
                {/each}
            </div>
        </div>
    </section>

    <!-- Banner -->
    <section class="mx-auto max-w-7xl px-6 py-16">
        <div
            class="flex flex-col items-center justify-between gap-6 rounded-3xl bg-blue-600 px-8 py-12 text-center text-white md:flex-row md:px-16 md:text-left"
        >
            <div>
                <h2 class="text-3xl font-black">
                    Ready to get started?
                </h2>

                <p class="mt-2 text-blue-100">
                    Check out all the products available in our store.
                </p>
            </div>

            <a
                href="/products"
                class="shrink-0 rounded-lg bg-white px-6 py-3 font-bold text-blue-600 transition hover:bg-gray-100"
            >
                See products
            </a>
        </div>
    </section>

</div>