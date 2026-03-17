<script lang="ts">
import type IRecipe from '@/interfaces/IRecipe';
import type { PropType } from 'vue';
import SelectableIngredient from './SelectableIngredient.vue';

export default {
    props: {
        receita: { type: Object as PropType<IRecipe>, required: true }
    },
    components: { SelectableIngredient },
    emits: ['addIngredient', 'removeIngredient']
}
</script>
<template>
    <article class="receita">
        <header class="receita__cabecalho">
            <img :src="`/imagens/receitas/${receita.imagem}`" alt="" class="receita__imagem">
            <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
        </header>
    </article>
</template>

<style scoped>
.receita {
    width: 19.5rem;
    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.receita__cabecalho {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}
.receita__imagem {
    width: 100%;
    height: 10.5rem;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
}
/*a fonte é paragraph bold 18/150*/
.receita__nome {
    text-align: center;
    color: var(--cinza-escuro, #444);
    font-weight: 400;
    font-size: 1.125rem;
    padding-block: 2.3rem;
    
}
</style>