<script setup>
import axios from 'axios';
import getUrlByKeyNode from '@/assets/js/request';
import content from '@/config/content.json';
import CardComposition from '@/components/composition/CardComposition.vue';
import ButtonComponent from '@/components/core/ButtonComponent.vue';
import PageComposition from '@/components/composition/PageComposition.vue';
</script>

<script>
export default {
  data() {
    return {
      database: {
        project: {},
      },
      isLoaded: false,
      loadingHasError: false,
    };
  },
  beforeCreate() {
    axios.get(getUrlByKeyNode('api.database.projects')).then((res) => {
      this.database.project = res.data;
      this.isLoaded = true;
    }).catch(() => {
      this.loadingHasError = true;
    });
  },
  components: {
    CardComposition,
    ButtonComponent,
    PageComposition,
  },
};
</script>

<template>
  <PageComposition
    :title="content.views.projects.title"
    :description="content.views.projects.description"
    :isLoaded="isLoaded"
    :loadingHasError="loadingHasError"
  >
    <div class="row">
      <CardComposition
        v-for="project in database.project"
        :key="project"
        :headerTitle="project.headerTitle"
        :title="project.title"
        :description="project.description"
        :maxDescription="48"
        :imgUrl="project.imgUrl"
        :url="$route.path + '/' + project.id"
        :badges="project.badges">
        <ButtonComponent
          :type="'router'"
          :href="$route.path + '/' + project.id"
        >
          {{ content.generic.buttons.details }}
        </ButtonComponent>
      </CardComposition>
    </div>
  </PageComposition>
</template>
