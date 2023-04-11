<template>
  <div class="base-input">

    <div class="base-input__icon" v-if="icon"><base-icon>{{ icon }}</base-icon></div>

    <div class="base-input__input-container">
      <!-- Тайтл -->
      <div v-if="title" class="base-input__title" :class="{active: titleTop}" @click="$focus()">{{ title }}</div>
      <!-- Инпут текста -->
      <input
        class="base-input__input"
        :value="value"
        :type="type"
        ref="input"
        @input="inputHandle($event.target.value)"
        @focus="active = true"
        @blur="active = false"
      />
    </div>

    <!-- Кнопка очистить -->
    <button class="base-input__clear-button" v-if="clearable && value" @click.stop="inputHandle(null)">
      <base-icon>cross</base-icon>
    </button>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "BaseInput",
  components: {BaseIcon},
  props: {
    value: {
      type: [String, Number]
    },
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "text"
    },
    icon: { // Иконка до ввода
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    active: false,
  }),
  computed: {
    titleTop() {
      return this.value || this.active;
    }
  },
  methods: {
    // Ввод данных
    inputHandle(value) {
      this.$emit("input", value);
    },

    // Сфокусироваться на инпуте
    $focus() {
      this.$refs.input.focus();
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  position: relative;
  border: 2px solid $color--dark-primary;
  color: $color--dark-primary;

  &__title {
    position: absolute;
    transition: .15s;
    left: 16px;
    top: 14px;
    font-weight: bold;

    &.active {
      font-size: $fs--mini;
      font-weight: normal;
      top: 6px
    }
  }

  &__input-container {
    display: flex;
    position: relative;
    flex: 1;
  }

  &__input {
    flex: 1;
    padding: 18px 16px 8px;
    height: 18px;
    line-height: 18px;
    font-size: $fs--default;
    font-weight: bold;
  }

  &__clear-button {
    padding: 0 16px;
  }

  &__icon {
    display: flex;
    align-items: center;
    vertical-align: middle;
    padding-left: 16px;
  }

}
</style>
