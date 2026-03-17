<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import IngredientsSelection from './IngredientsSelection.vue';
import YourList from './YourList.vue';
import { fetchCategories } from '@/http';
import ShowRecipes from './ShowRecipes.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';

export default {
  data() {
    return {
      ingredientes: [] as string[],
      categorias: [] as ICategoria[],
      conteudo: 'SelecionarIngredientes' as Pagina
    }
  },
  async created() {
    this.categorias = await fetchCategories();
  },
  components: { IngredientsSelection, YourList, ShowRecipes },
  methods: {
    addIngredient(ingrediente: string) {
      this.ingredientes.push(ingrediente);
    },
    removeIngredient(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(i => i !== ingrediente);
    },
    navigateRecipes(pagina: Pagina) {
      this.conteudo = pagina;
    }
  }
}
</script>
<template>
  <main class="conteudo-principal">
    <YourList :ingredientes="ingredientes" />
    <KeepAlive include="IngredientsSelection">
      <IngredientsSelection v-if="conteudo === 'SelecionarIngredientes'" :categorias="categorias"
        @add-ingredient="addIngredient($event)" @remove-ingredient="removeIngredient($event)"
        @toggle-recipes="navigateRecipes($event)" />

      <ShowRecipes v-else-if="conteudo === 'MostrarReceitas'" :ingredientes="ingredientes"
        @toggle-recipes="navigateRecipes($event)" />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>