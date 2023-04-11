<template>
  <div class="category-list">

    <nuxt-link class="category-list__item" to="/">
      <div class="category-list__item-image" :style="{backgroundImage: `url(${require('~/assets/images/all-categories.png')})`}"/>
      <div class="category-list__item-title">Все</div>
    </nuxt-link>

    <nuxt-link class="category-list__item" v-for="category in categories" :key="category.code" to="/">
      <div class="category-list__item-image" v-if="category.image" :style="{backgroundImage: `url(${getImgSrc(category)})`}" />
      <div class="category-list__item-title">{{ category.title }}</div>
    </nuxt-link>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "categoryMiniList",
  data: () => ({
    isLoading: false,
  }),
  computed: {
    ...mapGetters({
      categories: "category/list/getList",
    }),
  },
  methods: {
    ...mapActions({
      _fetchCategory: "category/list/fetchList",
    }),

    // Запросить категории
    async fetchCategory() {
      this.isLoading = true;
      await this._fetchCategory();
      this.isLoading = false;
    },

    // Получить путь картинки
    getImgSrc({ image }) {
      return process.env.CDN_URL + image;
    },
  },
  mounted() {
    this.fetchCategory();
  }
}
</script>

<style lang="scss" scoped>
$image-size-mobile: 24px;
.category-list {
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  padding: 32px $size--side-space;

  &__item {
    display: inline-grid;
    grid-template-rows: $image-size-mobile 14px;
    grid-template-areas: "image" "title";
    grid-row-gap: 4px;
    margin-right: 8px;
    width: 75px;
    min-width: 75px;
  }

  &__item-title {
    font-size: $fs--mini;
    line-height: 14px;
    grid-area: title;
    color: $color--dark-primary;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  &__item-image {
    height: $image-size-mobile;
    width: $image-size-mobile;
    grid-area: image;
    margin: 0 auto;
    background-size: contain;
  }

}
</style>
