<template>
  <div>
    <div class="b-checkbox" :class="{ invalid: fc.invalid }">
      <label>
        <input
          class="filled-in"
          type="checkbox"
          required=""
          :name="fc.name"
          :value="fc.value"
          :checked="fc.checked"
          v-model="checked"
        /><span v-html="fc.label"></span>
      </label>
    </div>
    <hr class="hr--sl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: this.fc.checked,
    };
  },
  props: ['fc', 'blockIndex', 'fcIndex'],
  emits: ['autosave', 'timeoutAutosave'],
  watch: {
    checked(val) {
      let payload = {
        blockIndex: this.blockIndex,
        property: this.fc.property,
        value: val,
      };
      if (this.fc.multy) {
        payload.index = this.fcIndex;
      }
      this.$store.commit('setControlValue', payload);
    },
  },
  methods: {},
};
</script>

<style scoped></style>
