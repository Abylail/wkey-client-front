<template>
  <div class="catalog">
    <base-header title="Каталог"/>
    <search-bar :search-text.sync="searchText"/>
    <catalog-item
      v-for="category in categories" :key="category.code"
      :to="`/catalog/category/${category.code}`"
      :title="category.title_ru"
      :image="category.image"
      @beforeGo="bridgeInfo(category)"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BaseHeader from "@/components/base/BaseHeader";
import SearchBar from "@/components/common/category/searchBar";
import CatalogItem from "@/components/common/catalog/catalogItem";

export default {
  name: "index",
  components: {CatalogItem, SearchBar, BaseHeader},
  data: () => ({
    isLoading: false,

    // Поисковый текст
    searchText: null,
  }),
  computed: {
    ...mapGetters({
      categories: "category/list/getList",
    })
  },
  methods: {
    ...mapActions({
      _fetchCategories: "category/list/fetchList",
      _bridgeInfo: "category/item/bridgeInfo",
    }),

    // Запросить список категорий
    async fetchCategories() {
      this.isLoading = true;
      await this._fetchCategories();
      this.isLoading = false;
    },

    // Мост информации
    bridgeInfo(category) {
      this._bridgeInfo(category);
    }
  },
  mounted() {
    this.fetchCategories();
  }
}
</script>

<style scoped>

</style>
