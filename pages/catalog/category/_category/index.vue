<template>
  <div class="category">
    <base-header :title="categoryInfo.title_ru" back-path="/catalog"/>
    <search-bar :search-text.sync="searchText"/>
    <catalog-item
      title="Все товары"
      :to="`/catalog/category/${categoryCode}/subcategory/all`"
      :image="categoryInfo.image"
    />
    <catalog-item
      v-for="subcategory in subcategories" :key="subcategory.code"
      :to="`/catalog/category/${categoryCode}/subcategory/${subcategory.code}`"
      :title="subcategory.title_ru"
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
      _getCategory: "category/item/getCategory",
      _getSubcategories: "category/subcategory/list/getSubcategories",
    }),

    // Код категории
    categoryCode() {
      return this.$route.params.category;
    },

    // Информацию о категории
    categoryInfo() {
      return this._getCategory(this.categoryCode);
    },

    // Список подкатегорий
    subcategories() {
      return this._getSubcategories(this.categoryCode);
    }
  },
  methods: {
    ...mapActions({
      _fetchCategory: "category/item/fetchCategory",
      _fetchSubcategories: "category/subcategory/list/fetchSubcategories",
    }),

    // Заппросить категорию
    async fetchCategory() {
      this.isLoading = true;
      await this._fetchCategory(this.categoryCode);
      this._fetchSubcategories(this.categoryCode);
      this.isLoading = false;
    }
  },
  mounted() {
    this.fetchCategory();
  }
}
</script>

<style scoped>

</style>
