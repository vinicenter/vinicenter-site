<script setup>
import TitleComponent from '@/components/core/TitleComponent.vue';
</script>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    alert: {
      type: String,
    },
    alertStyle: {
      type: String,
      default: 'warning',
    },
  },
  components: { TitleComponent },
};
</script>

<template>
<div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark">
      <div class="modal-header">
        <TitleComponent :type="'h5'">{{ title }}</TitleComponent>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scope>
.modal-header {
  border-bottom: none !important;
  background-color: var(--background-tertiary);
}

.modal-body {
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 18px !important;
}

.modal-content {
  -webkit-box-shadow: 0 0 27px 0 rgb(0 0 0 / 10%) !important;
  -moz-box-shadow: 0 0 27px 0 rgba(0,0,0,.10) !important;
  box-shadow: 0 0 27px 0 rgb(0 0 0 / 10%) !important;
  border-radius: 5px !important;
}

.modal-content:hover {
  border-color: var(--hover-color);
  -webkit-transition: color 0.15s ease, border-color 0.15s ease;
  transition: color 0.15s ease, border-color 0.15s ease;

  -webkit-box-shadow: 0 0 27px 0 rgb(0 0 0 / 51%) !important;
  -moz-box-shadow: 0 0 27px 0 rgba(0,0,0,.51) !important;
  box-shadow: 0 0 27px 0 rgb(0 0 0 / 51%) !important;
}
</style>
