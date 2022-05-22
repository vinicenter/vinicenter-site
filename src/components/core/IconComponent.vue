<script>
export default {
  props: {
    isHover: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: false,
      default: 25,
    },
  },
};
</script>

<template>
  <i :class="isHover ? 'icon ' + icon : icon" :style="'font-size: ' + size + 'px'"></i>
</template>

<style lang="scss" scoped>
.icon {
  color: var(--text-color);
}

.icon:hover {
  color: var(--hover-color);
  -webkit-transition: color 0.15s ease, color 0.15s ease;
  transition: color 0.15s ease, color 0.15s ease;
}
</style>
