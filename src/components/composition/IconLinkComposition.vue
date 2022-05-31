<script setup>
import IconComponent from '@/components/core/IconComponent.vue';
import LinkComponent from '@/components/core/LinkComponent.vue';
</script>

<script>
export default {
  props: {
    networks: {
      type: Array,
      require: true,
    },
    components: { IconComponent, LinkComponent },
  },
};
</script>

<template>
  <ul class="link">
    <li v-for="network in networks" :key="network">
      <LinkComponent :href="network.url" :title="network.name" target="_blank">
        <IconComponent :icon="network.phosphorIcon" :isHover="false" />
        <p>{{network.name}}</p>
      </LinkComponent>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.link {
  padding: 0px;
}

.link li {
  display: inline;
  padding: 0;
  list-style: none;
  margin: 0 auto;
}

.link li a {
  display: inline-block;
  padding: 10px;
}

.link li p {
  display: none;
}
</style>
