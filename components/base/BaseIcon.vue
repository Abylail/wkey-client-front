<template>
  <svg class="base-icon" :height="iconHeight" :width="iconWidth">
    <use :xlink:href="src"></use>
  </svg>
</template>

<script>
const defaultSize = 24; // Если не указано

export default {
  name: "BaseIcon",
  props: {
    height: {
      type: [Number, String],
      default: null
    },
    width: {
      type: [Number, String],
      default: null
    },
  },
  computed: {

    // Высота картинки
    iconHeight() {
      return this.height || this.width || defaultSize;
    },

    // Высота картинки
    iconWidth() {
      return this.width || this.height || defaultSize;
    },

    // Иконка
    src() {
      return require("@/assets/images/sprite.svg") + `#${this.$slots.default[0].text}`
    }
  }
}
</script>

<style scoped>

</style>
