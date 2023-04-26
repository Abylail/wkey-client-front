<template>
  <header class="base-header">
    <div class="base-header__left">
      <button class="base-header__back" v-if="backPath" @click="goBackHandle()"><base-icon class="base-header__back-icon">arrow</base-icon></button>
      <h1 class="base-header__title">{{ title }}</h1>
    </div>
    <div class="base-header__right"></div>
  </header>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "BaseHeader",
  components: {BaseIcon},
  props: {
    title: {
      type: String,
      default: ""
    },
    backPath: {
      type: String,
      default: null
    }
  },
  methods: {
    goBackHandle() {
      this.$goBack(this.backPath);
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

  &__back {
    display: flex;
    align-items: center;
    color: $color--dark-primary;
  }

  &__back-icon {
    transform: rotate(180deg);
  }

  &__left {
    display: flex;
    align-items: center;
  }
}
</style>
