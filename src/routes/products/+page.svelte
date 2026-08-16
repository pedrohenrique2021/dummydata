<script>
  import Card from "$lib/components/card.svelte";
  let { data } = $props();
  // console.log(data)
</script>

<main class="p-8">
  <h1 class="text-1xl mb-6">Imported from: https://dummyjson.com/products</h1>
  <div class="grid grid-cols-4 gap-4">
    {#each data.products as product}
      <Card title={product.title} image={product.images} price={product.price} category={product.category}/>
    {/each}
  </div>
</main>