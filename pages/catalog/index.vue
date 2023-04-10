<template>
  <div class="catalog">

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "index",
  data: () => ({
    isLoading: false,
  }),
  computed: {
    ...mapGetters({
      categories: "category/list/getList",
    })
  },
  methods: {
    ...mapActions({
      _fetchCategories: "category/list/fetchList",
    }),

    // Запросить список категорий
    async fetchCategories() {
      this.isLoading = true;
      await this._fetchCategories();
      this.isLoading = false;
    }
  },
  mounted() {
    this.fetchCategories();
  }
}
</script>

<style scoped>

</style>
