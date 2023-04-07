<template>
  <button
    class="base-button"
    :class="[`base-button--type-${type}`]"
  ><slot/></button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: val => ["default"].includes(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {

  &--type-default {
    background-color: $color--light-primary;
    color: white;
    padding: 8px 12px;
  }

}
</style>
