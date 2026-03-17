<script lang="ts">
import Tag from './Tag.vue';
export default {
    props: {
        ingrediente: { type: String, required: true }
    },
    components: { Tag },
    data(){
        return {
            selected: false
        }
    },
    methods: {
        toggleSelected(){
            this.selected = !this.selected;
            if(this.selected){
                this.$emit('addIngredient', this.ingrediente);
            } else {
                this.$emit('removeIngredient', this.ingrediente);
            }
        }
    },
    emits: ['addIngredient', 'removeIngredient']
}

</script>

<template>
    <button class="ingrediente" 
        v-on:click="toggleSelected"
        :aria-pressed="selected">
        <Tag :texto="ingrediente" :ativa="selected"/>
    </button>
</template>

<style scoped>
.ingrediente{
    cursor: pointer;
}
</style>