<template>
  <fieldset>
    <legend v-if="block.title">{{ block.title }}</legend>
    <div v-for="(fc, fcIndex) in block.controls" :key="fc.property">
      <component
        :is="`app-control-${fc.type}`"
        :fc="fc"
        :fcIndex="fcIndex"
        :blockIndex="blockIndex"
      ></component>
    </div>
  </fieldset>
</template>

<script>
import AppControlText from './AppControlText.vue';
import AppControlCheckbox from './AppControlCheckbox.vue';

export default {
  data() {
    return {};
  },
  props: {
    block: Object,
    blockIndex: Number,
  },
  methods: {},
  components: {
    AppControlText,
    AppControlCheckbox,
  },
};
</script>

<style scoped>
fieldset {
  border: 0;
  padding: 0;
  margin: 0;
}
legend {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  padding: 25px 0;
}
</style>
