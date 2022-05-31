<script setup>
import content from '@/config/content.json';
import ButtonComponent from '@/components/core/ButtonComponent.vue';
import TextComponent from '@/components/core/TextComponent.vue';
import IconComponent from '@/components/core/IconComponent.vue';
</script>

<script>
export default {
  props: {
    buttons: {
      type: Array,
    },
    openOnNewTab: {
      type: Boolean,
      default: false,
    },
  },
  components: { ButtonComponent, TextComponent },
};
</script>

<template>
  <div v-if="buttons == ''">
    <TextComponent>
      {{content.generic.nothingFound}}
    </TextComponent>
  </div>
  <div v-else>
    <ButtonComponent
      v-for="button in buttons"
      :key="button"
      :style="button[0]"
      :href="button[2]"
      :target="openOnNewTab ? '_blank' : ''"
      class="buttons"
    >
      {{button[1]}}
      <IconComponent
        :size="16"
        :isHover="false"
        :icon="'ph-link-bold'"
      />
    </ButtonComponent>
  </div>
</template>

<style lang="scss">
.buttons {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
