<template>
  <div class="subcategory">
    <base-header :title="subcategoryInfo.title_ru" :back-path="`/catalog/category/${categoryCode}`"/>
    <search-bar :search-text.sync="searchText"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import BaseHeader from "@/components/base/BaseHeader";
import SearchBar from "@/components/common/category/searchBar";

export default {
  name: "index",
  components: {SearchBar, BaseHeader},
  data: () => ({
    isLoading: false,

    // Поисковый текст
    searchText: null,
  }),
  computed: {
    ...mapGetters({
      _getSubcategoryInfo: "category/subcategory/item/getInfo"
    }),

    // Код подкатегории
    subcategoryCode() {
      return this.$route.params.subcategory;
    },

    // Информация подкатегории
    subcategoryInfo() {
      return this._getSubcategoryInfo(this.subcategoryCode);
    },

    // Код категории
    categoryCode() {
      return this.$route.params.category;
    }
  },
  methods: {
    ...mapActions({
      _fetchSubcategory: "category/subcategory/item/fetchSubcategory",
    }),

    async fetchInfo() {
      this.isLoading = true;
      console.log(this.categoryCode, this.subcategoryCode)
      await this._fetchSubcategory({category: this.categoryCode, subcategory: this.subcategoryCode});
      this.isLoading = false;
    }
  },
  mounted() {
    this.fetchInfo();
  }
}
</script>

<style scoped>

</style>
