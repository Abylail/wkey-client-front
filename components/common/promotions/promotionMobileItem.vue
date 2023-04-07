<template>
  <div class="promotion-mobile-item" :style="{backgroundImage: `url(${imageUrl})`}">
    <base-button class="promotion-mobile-item__button">Перейти к разделу</base-button>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";
export default {
  name: "promotionMobileItem",
  components: {BaseButton},
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    // Картинка акции
    imageUrl() {
      return process.env.CDN_URL + this.data.image_ru;
    }
  }
}
</script>

<style lang="scss" scoped>
.promotion-mobile-item {
  position: relative;
  height: 100vw;
  background-position: center;
  background-size: cover;

  &__button {
    position: absolute;
    bottom: 32px;
    right: 32px;
  }
}
</style>
