<template>
  <div class="b-form__submit">
    <a
      href="#"
      class="btn btn-secondary btn-lg"
      data-toggle="modal"
      data-target="#submitConfirmModal"
      :disabled="isDisabled"
      >Отправить</a
    >
    <!--<small class="text-muted" v-if="isDisabled"
      >Вы не закончили заполнение обязательных полей.
      <a href="#" @click.prevent="clickContinue">Продолжить</a></small
    >-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isDisabled() {
      //blocks
      //required - flag is false if there is an empty required control
      const requiredFlag = !this.$store.state.blocks.find((block) => {
        return block.controls.find((control) => {
          return (
            control.type !== 'checkbox' &&
            control.required &&
            (control.multy
              ? control.value.every((value) => value.val === '')
              : control.value === '')
          );
        });
      });
      //checkbox - flag is false if there is an unchecked required checkbox
      const checkboxFlag = !this.$store.state.blocks.find((block) => {
        return block.controls.find((control) => {
          return (
            control.type === 'checkbox' && control.required && !control.checked
          );
        });
      });
      //pattern - flag is false if there is an error control with pattern
      const patternFlag = !this.$store.state.blocks.find((block) => {
        return block.controls.find((control) => {
          return (
            control.pattern &&
            (control.multy
              ? control.value.every(
                  (value) =>
                    !new RegExp(control.pattern, 'ig').test(value.val) &&
                    value.val !== ''
                )
              : !new RegExp(control.pattern, 'ig').test(control.value) &&
                control.value !== '')
          );
        });
      });

      return !(requiredFlag && checkboxFlag && patternFlag);
    },
  },
  methods: {
    /*clickContinue() {
      const control = Array.from(
        document.querySelector('.b-appeal-new-change-form form').elements
      ).find((elem) => {
        let isRequired = elem.classList.contains('mx-input')
          ? elem.closest('.mx-datepicker').getAttribute('data-required')
          : elem.getAttribute('data-required');

        if (
          elem.getAttribute('type') === 'file' &&
          !elem.closest('.b-form-control-vc').querySelector('input[type=radio]')
            .checked
        ) {
          isRequired = false;
        }

        const value =
          elem.getAttribute('type') === 'file'
            ? elem.getAttribute('data-value')
            : elem.value;

        const pattern = elem.getAttribute('data-pattern');

        if (pattern && value !== '') {
          return !new RegExp(pattern, 'ig').test(value);
        } else {
          return (
            isRequired &&
            elem.tagName.toLowerCase() !== 'button' &&
            elem.getAttribute('type') !== 'hidden' &&
            value === ''
          );
        }
      });

      if (!control) return;

      if (control.closest('.b-float-label')) {
        control.closest('.b-float-label').classList.add('invalid');
      } else if (control.closest('.b-float-label--file')) {
        control.closest('.b-float-label--file').classList.add('invalid');
      }

      window.scrollTo({
        top: control.getBoundingClientRect().top + window.scrollY - 120,
        behavior: 'smooth',
      });

      setTimeout(() => {
        control.focus();
      }, 1000);
    },*/
  },
};
</script>

<style>
.b-form__submit .btn {
  margin-right: 20px;
}
</style>
