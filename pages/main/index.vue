<template>
  <div class="main">
    <promotion-main-list/>
    <category-list/>
  </div>
</template>

<script>
import PromotionMainList from "@/components/common/promotions/mainList";
import CategoryList from "@/components/common/category/categoryList";

export default {
  name: "index",
  components: {CategoryList, PromotionMainList}
}
</script>

<style scoped>

</style>
