export async function getUsers() {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
    }

    return await response.json();
}