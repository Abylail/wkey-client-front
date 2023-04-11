<template>
  <div class="search-bar">
    <base-input
      title="Поиск" icon="search"
      :value="searchText"
      clearable
      @input="$emit('update:searchText', $event)"
    />
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
export default {
  name: "searchBar",
  components: {BaseInput},
  props: {
    searchText: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 0 $size--side-space;
}
</style>
