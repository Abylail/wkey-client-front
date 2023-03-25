<template>
  <div class="main-layout">

    <!-- Основа -->
    <main>
      <Nuxt/>
    </main>

    <!-- Футеры -->
    <mobile-footer/>
  </div>
</template>

<script>
import MobileFooter from "@/components/common/layout/mobileFooter";
export default {
  name: "default",
  components: {MobileFooter}
}
</script>

<style scoped>

</style>
