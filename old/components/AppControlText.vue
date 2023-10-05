<template>
  <div>
    <div class="row align-items-center">
      <div class="col-lg-6 col-12">
        <div class="b-float-label" :class="{ invalid: isInvalid }">
          <input
            :data-pattern="fc.pattern"
            :data-required="fc.required"
            :id="fc.word + '_' + fc.property + '_' + blockIndex"
            :name="fc.word + '[' + fc.property + '][' + blockIndex + ']'"
            ref="input"
            type="text"
            autocomplete="off"
            @focus="focusControl"
            @blur="blurControl"
            @input="inputControl"
            v-model="controlValue"
          />
          <label
            ref="label"
            :for="fc.word + '_' + fc.property + '_' + blockIndex"
            :class="{ active: isActive }"
            >{{ fc.label }}</label
          >
        </div>
      </div>
      <hr class="hr--xs d-block d-lg-none w-100" v-if="!fc.multy || !fcIndex" />
      <div class="col-lg-6 col-12 small" v-if="!fc.multy || !fcIndex">
        <span
          class="text-muted"
          v-if="this.fc.completeBlock && this.fc.completeBlock.title"
          >{{ this.fc.completeBlock.title }}</span
        >
        <span v-if="this.fc.completeBlock && this.fc.completeBlock.title">
          <a
            v-if="this.fc.completeBlock.value"
            class="b-complete-link"
            ref="link"
            href=""
            @click.prevent="clickLink"
          >
            {{ this.fc.completeBlock.value }}
            <span
              class="icon"
              style="background-image: url('/template/images/copy.svg')"
            ></span>
          </a>
          <span v-else class="text-muted">Пусто.</span>
        </span>
        <div
          v-if="this.fc.completeBlock && this.fc.completeBlock.comment"
          class="text-muted b-complete-comment"
        >
          {{ this.fc.completeBlock.comment }}
        </div>
      </div>
    </div>
    <hr class="hr--sl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      controlValue: this.fc.multy
        ? this.fc.value[this.fcIndex].val
        : this.fc.value,
      isActive: this.fc.multy
        ? this.fc.value[this.fcIndex].val === ''
          ? false
          : true
        : this.fc.value === ''
        ? false
        : true,
      isInvalid: false,
    };
  },
  props: ['fc', 'blockIndex', 'fcIndex'],
  emits: ['autosave', 'timeoutAutosave'],
  watch: {
    controlValue(val) {
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
  methods: {
    clickLink() {
      this.controlValue = this.fc.completeBlock.value;
      this.isActive = true;
      this.validate();
      //if tel
      //autosave
      this.$emit('autosave');
      //restartFormAutosaveTimeout();
    },
    inputControl() {
      //validate
      if (this.controlValue) {
        this.isInvalid = false;
      }
      //autosave
      this.$emit('timeoutAutosave');
      //restartFormAutosaveTimeout();
    },
    focusControl() {
      if (
        this.$refs.input.closest('.b-float-label').className.includes('invalid')
      ) {
        this.isInvalid = true;
      }
    },
    blurControl() {
      if (this.controlValue !== '') {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
      this.validate();
      //autosave
      this.$emit('autosave');
    },
    validate() {
      if (
        (this.fc.required && this.controlValue === '') ||
        (this.fc.pattern &&
          this.controlValue !== '' &&
          !new RegExp(this.fc.pattern, 'ig').test(this.controlValue))
      ) {
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
      }
    },
  },
};
</script>

<style scoped></style>
