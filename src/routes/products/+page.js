export async function load({fetch}) {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json()

    return {
        products: data.products
    }
}