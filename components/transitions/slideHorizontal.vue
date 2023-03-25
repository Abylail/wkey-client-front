<template>
  <transition
    name="slide"
    mode="out-in"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: "slideHorizontal",
  inheritAttrs: false,
  methods: {
    enter(element) {
      element.style = null;
      const width = getComputedStyle(element).width;
      element.style.width = 0;
      requestAnimationFrame(() => {
        element.style.width = width;
      });
    },
    afterEnter(element) {
      element.style.width = 'auto';
    },
    leave(element) {
      const width = getComputedStyle(element).width;
      element.style.width = width;
      requestAnimationFrame(() => {
        element.style.width = 0;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
$transition: 0.3s;
* {
  will-change: height;
}
.slide-enter-active,
.slide-leave-active {
  transition: all $transition ease-in-out;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to
{
  transition: all $transition ease-in-out;
}
</style>
