<script lang="ts">
import { fetchRecipes } from '@/http';
import type IRecipe from '@/interfaces/IRecipe';
import RecipeCard from './RecipeCard.vue';
import MainButton from './MainButton.vue';

export default {
    props: {
        ingredientes: { type: Array as () => string[], required: true }
    },
    components: { RecipeCard, MainButton },
    data() {
        return {
            recipes: [] as IRecipe[],
            recipesFiltered: [] as IRecipe[],
            recipeAmount: 0
        }
    },
    async created() {
        this.recipes = await fetchRecipes();
        this.recipesFiltered = this.recipes.filter(recipe => {
            return recipe.ingredientes.every(ingrediente => this.ingredientes.includes(ingrediente));
        });
        this.recipeAmount = this.recipesFiltered.length;
    }
}
</script>
<template>
    <section class="listar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>
        <p class="paragrafo-lg quantidade-resultados">
            Resultados encontrados: {{ recipeAmount }}
        </p>
        <section class="listar-receitas" v-if="recipesFiltered.length">
            <p class="paragrafo-lg instrucoes">
                Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
            </p>
            <ul class="receitas">
                <li v-for="receita in recipesFiltered" :key="receita.nome">
                    <RecipeCard :receita="receita" />
                </li>
            </ul>
        </section>
        <p v-else class="paragrafo lista-vazia">
            <span class="sem-receitas">Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?</span>
            <img src="../assets/images/sem-receitas.png" alt="Ícone de pesquisa">
        </p>
    </section>
    <MainButton texto="Editar lista!" @click="$emit('ToggleRecipes', 'SelecionarIngredientes')" />
</template>

<style scoped>
.listar-receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-receitas {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.quantidade-resultados {
    margin-bottom: 0.5rem;
    color: var(--verde-medio, #3D6D4A);
}

.instrucoes {
    margin-bottom: 2rem;
}

.receitas {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}

.sem-receitas {
    display: block;
    color: var(--cinza-escuro, #444);
    font-weight: 400;
    font-size: 1.125rem;
}
</style>