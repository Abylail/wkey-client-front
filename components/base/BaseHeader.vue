<template>
  <header class="base-header">
    <div class="base-header__left">
      <h1 class="base-header__title">{{ title }}</h1>
    </div>
    <div class="base-header__right"></div>
  </header>
</template>

<script>
export default {
  name: "BaseHeader",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.base-header {
  padding: 12px $size--side-space;

  &__title {
    font-size: $fs--large;
    color: $color--dark-primary;
  }
}
</style>
