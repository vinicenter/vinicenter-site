<script>
export default {
  props: {
    href: {
      type: String,
      require: true,
    },
    isNewTab: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <a :href="href" :target="isNewTab ? '_blank' : ''"><slot></slot></a>
</template>

<style lang="scss" scoped>
a {
  color: var(--text-color);
  text-decoration: none;
}

a:hover {
  color: var(--hover-color);
  -webkit-transition: color 0.15s ease, color 0.15s ease;
  transition: color 0.15s ease, color 0.15s ease;
}
</style>
