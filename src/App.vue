<script lang="ts">
import Banner from './components/Banner.vue';
import FooterContent from './components/FooterContent.vue';
import MainContent from './components/MainContent.vue';

export default {
  components: { Banner, MainContent, FooterContent }
}
</script>

<template>
  <Banner/>
  <MainContent/>
  <FooterContent />
</template>

<style scoped>

</style>
