<script setup>
import content from '@/config/content.json';
import InputComponent from '../core/InputComponent.vue';
</script>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      tooltipText: content.generic.copy.clickToCopyMessage,
    };
  },
  methods: {
    copyText() {
      document.execCommand('copy');
      this.tooltipText = content.generic.copy.copiedMessage;
      setTimeout(() => {
        this.tooltipText = content.generic.copy.clickToCopyMessage;
      }, 3000);
    },
  },
};
</script>

<template>
  <div>
    <InputComponent
      @click="copyText()"
      ref="textInput"
      :value="text"
      :readonly="true"
      :selectOnClick="true"
    />
    <a>{{ tooltipText }}</a>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
