<script>
    let {title, image, price, category} = $props();
</script>


<article
    class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
>
    <div class="aspect-square overflow-hidden bg-gray-100">
        <img
            src={image}
            alt={title}
            class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
    </div>

    <div class="p-5">
        <p class="text-sm text-gray-500">
            {category}
        </p>

        <h3 class="mt-1 text-lg font-bold">
            {title}
        </h3>

        <div class="mt-4 flex items-center justify-between">
            <span class="text-xl font-black">
                ${price}
            </span>

            <a href="/products" class="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                Comprar
            </a>
        </div>
    </div>
</article>