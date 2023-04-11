<template>
  <div class="main">
    <promotion-main-list/>
    <category-mini-list/>
  </div>
</template>

<script>
import PromotionMainList from "@/components/common/promotions/mainList";
import CategoryMiniList from "@/components/common/category/categoryMiniList";

export default {
  name: "index",
  components: {CategoryMiniList, PromotionMainList}
}
</script>

<style scoped>

</style>
