import type ICategoria from "@/interfaces/ICategoria";

export async function fetchCategories() {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
    const categorias: ICategoria[] = await response.json();
    return categorias;
}
export async function fetchRecipes() {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
    const recipes = await response.json();
    return recipes;
}