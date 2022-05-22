<script setup>
import NavBarComposition from '@/components/composition/NavBarComposition.vue';
</script>

<script>
export default {
  components: { NavBarComposition },
};
</script>

<template>
  <NavBarComposition>
    <template v-slot:right>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/donate">Donate</RouterLink>
      </li>
    </template>
  </NavBarComposition>
  <div class="container-lg">
    <RouterView />
  </div>
</template>

<style lang="scss">
//global theme colors
:root {
  --main-color: #6400FF;
  --hover-color: #5500D9;
  --text-color: #fff;
  --background-primary: #181818;
  --background-secondary: #202020;
  --background-tertiary: #222222;
}

//bootstrap color config
$primary: #6400FF;
$dark: #202020;

@import "bootstrap";

body {
  background-color: var(--background-primary) !important;
  color: var(--text-color) !important;
}

* {
  font-family: 'Space Mono', monospace;
  box-shadow: none !important;

  &:focus {
    box-shadow: none !important;
  }
}

pre {
  background-color: var(--background-primary);
  padding: 10px;
  border-radius: 5px;
}
</style>
