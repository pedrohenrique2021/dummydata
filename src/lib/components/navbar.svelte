<script>
    import { page } from "$app/state";

    const menubar = [
        { name: 'Start', route: '/'},
        { name: 'Products', route: '/products'},
   
    ];
</script>

<header class="bg-white">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

            <a href="/" class="text-2xl font-black tracking-tight">
                Fake<span class="text-blue-600">Store</span>
            </a>

            <nav class="hidden items-center gap-8 md:flex">
            
                {#each menubar as menu}
                    <a href={menu.route}
                    class="text-sm font-medium transition hover:text-gray-900"
                    class:text-blue-600={page.url.pathname === menu.route}
                    class:text-gray-500={page.url.pathname !== menu.route}>

                    {menu.name}
                </a>
                {/each}
            </nav>

            <div class="flex items-center gap-4">
                <button
                    class="rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
                    aria-label="Pesquisar"
                >
                    🔍
                </button>

                <button
                    class="relative rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
                    aria-label="Carrinho"
                >
                    🛒
                    <span
                        class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                    >
                        0
                    </span>
                </button>
            </div>
        </div>
    </header>