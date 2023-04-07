<template>
  <div class="promotions-main">

    <carousel class="promotions-main__carousel" :arrows="false" autoplay :autoplay-speed="5000" v-if="promotions.length">
      <promotion-mobile-item
        class="promotions-main__slide"
        v-for="promotion in promotions" :key="promotion.code"
        :data="promotion"
      />
    </carousel>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PromotionMobileItem from "@/components/common/promotions/promotionMobileItem";

export default {
  name: "mainList",
  components: {
    PromotionMobileItem,
    Carousel: () => import('vue-slick-carousel'),
    // Swiper: () => import('swiper/vue/swiper'),
    // SwiperSlide: () => import('swiper/vue/swiper-slide'),
  },
  data: () => ({
    isLoading: true,
  }),
  computed: {
    ...mapGetters({
      promotions: "promotions/mainList/getList",
    })
  },
  methods: {
    ...mapActions({
      _fetchPromotion: "promotions/mainList/fetchList",
    }),

    // Запросить промакции
    async fetchPromotion() {
      this.isLoading = true;
      await this._fetchPromotion();
      this.isLoading = false;
    },
  },
  mounted() {
    this.fetchPromotion();
  }
}
</script>

<style lang="scss" scoped>
.promotions-main {
  height: 100vw;

  &__carousel {
    height: 100%;
  }

}
</style>
