<script>
export default {
  props: {
    label: {
      type: String,
      require: false,
    },
    value: {
      type: String,
      require: false,
    },
    placeholder: {
      type: String,
      require: false,
    },
    type: {
      type: String,
      default: 'text',
      require: false,
    },
    readonly: {
      type: Boolean,
      default: false,
      require: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      require: false,
    },
    selectOnClick: {
      type: Boolean,
      dedfault: false,
      require: false,
    },
  },
};
</script>

<template>
  <label for="input">{{ label }}
    <input
      v-on:click="selectOnClick ? $event.target.select() : ''"
      name="input"
      :type="type"
      class="form-control"
      :value="value"
      :placeholder="placeholder"
      v-bind:disabled="disabled"
      v-bind:readonly="readonly"
    />
  </label>
</template>

<style lang="scss" scoped>

</style>
