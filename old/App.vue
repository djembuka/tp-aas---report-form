<template>
  <div class="container">
    <component
      :is="getAppName(block.type)"
      v-for="(block, blockIndex) in $store.state.blocks"
      :block="block"
      :blockIndex="blockIndex"
      :key="block.id"
    ></component>
    <app-button-submit></app-button-submit>
  </div>
</template>

<script>
import AppBlock from './components/AppBlock.vue';
import AppBlockCollapse from './components/AppBlockCollapse.vue';
import AppButtonSubmit from './components/AppButtonSubmit.vue';

export default {
  name: 'App',
  methods: {
    getAppName(type) {
      return `app-block${type === 'collapse' ? '-collapse' : ''}`;
    },
  },
  components: {
    AppBlock,
    AppBlockCollapse,
    AppButtonSubmit,
  },
};
</script>

<style></style>
