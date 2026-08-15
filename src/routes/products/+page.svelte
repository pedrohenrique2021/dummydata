<script>
  import Card from "$lib/components/card.svelte";
  let { data } = $props();
</script>

<main class="p-8">
  <h1 class="text-2xl font-bold mb-6">Produtos</h1>
  <div class="grid grid-cols-3 gap-4">
    {#each data.products as product}
      <Card title={product.title} />
    {/each}
  </div>
</main>