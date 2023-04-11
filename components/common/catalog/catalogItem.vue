<template>
  <nuxt-link class="catalog-item" :to="to">
    <img class="catalog-item__image" v-if="image" :src="imageSrc" alt="catalog"/>
    <div class="catalog-item__title">{{ title }}</div>
    <base-icon>arrow</base-icon>
  </nuxt-link>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "catalogItem",
  components: {BaseIcon},
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    to: {
      type: String
    }
  },
  computed: {
    // Путь к картинке
    imageSrc() {
      return process.env.CDN_URL + this.image;
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-item {
  display: flex;
  align-items: center;
  padding: 0 $size--side-space;
  margin: 32px 0;
  color: $color--dark-primary;

  &__title {
    flex: 1;
    font-weight: bold;
    height: min-content;
  }

  &__image {
    width: 40px;
    margin-right: $size--side-space;
  }
}
</style>
