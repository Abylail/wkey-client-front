<template>
  <footer class="mobile-footer">
    <nuxt-link
      class="mobile-footer__module"
      :class="{active: activeModule === module.code}"
      v-for="module in modules" :key="module.code"
      :to="`/${module.code}`"
    >
      <base-icon class="mobile-footer__icon">{{ module.icon }}</base-icon>
      <slide-horizontal>
        <span class="mobile-footer__title" v-if="activeModule === module.code">{{ module.name }}</span>
      </slide-horizontal>
    </nuxt-link>
  </footer>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
import SlideHorizontal from "@/components/transitions/slideHorizontal";
export default {
  name: "mobileFooter",
  components: {SlideHorizontal, BaseIcon},
  data: () => ({
    modules: [
      { name: "Главная", icon: "main", code: "main" },
      { name: "Каталог", icon: "catalog", code: "catalog" },
      { name: "Избранное", icon: "favorite", code: "favorite" },
      { name: "Корзина", icon: "cart", code: "cart" },
      { name: "Профиль", icon: "account", code: "account" },
    ]
  }),
  computed: {

    // Активный модуль (код)
    activeModule() {
      return this.$route.name.split("-")[0];
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  height: 56px;
  padding: 0 $size--side-space;

  &__module {
    display: flex;
    align-items: center;
    * {color: black;}
    &.active {
      * {color: $color--light-primary !important;}
    }
  }

  &__title {
    font-size: $fs--mini;
    font-weight: 600;
    overflow: hidden;
  }

  &__icon {
    margin: 0 8px;
  }
}
</style>
