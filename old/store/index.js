import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...window.reportFormStore,
  },
  mutations: {
    setBlockOpen(state, payload) {
      state.blocks[0].open = payload;
    },
    setControlValue(state, payload) {
      const control = state.blocks[payload.blockIndex].controls.find(
        (control) => control.property === payload.property
      );
      //multy
      if (control.multy && payload.index !== undefined) {
        Vue.set(control.value[payload.index], 'val', payload.value);
      }
      //checkbox
      else if (control.type === 'checkbox') {
        Vue.set(control, 'checked', payload.value);
      }
      //simple
      else if (!control.multy) {
        Vue.set(control, 'value', payload.value);
      }
    },
  },
  actions: {},
  modules: {},
});
