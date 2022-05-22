<script>
export default {
  props: {
    style: {
      type: String,
      default: 'primary',
    },
    type: {
      type: String,
      default: 'link',
    },
    href: {
      type: String,
      default: '#',
    },
    dataBsToggle: {
      type: String,
      default: '',
    },
    dataBsTarget: {
      type: String,
      default: '',
    },
    dataBsDismiss: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
<RouterLink
  v-if="type == 'router'"
  :to="href" :class="'btn btn-' + style"
  :data-bs-toggle="dataBsToggle"
  :data-bs-target="dataBsTarget"
  :data-bs-dismiss="dataBsDismiss">
    <slot />
</RouterLink>
<a
  v-else
  :href="href"
  :class="'btn btn-' + style"
  :data-bs-toggle="dataBsToggle"
  :data-bs-dismiss="dataBsDismiss"
  :data-bs-target="dataBsTarget">
    <slot />
</a>
</template>
