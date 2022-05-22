<script setup>
import axios from 'axios';
import getUrlByKeyNode from '@/assets/js/request';
import PageComposition from '@/components/composition/PageComposition.vue';
import CardComposition from '@/components/composition/CardComposition.vue';
import BadgeComponent from '@/components/core/BadgeComponent.vue';
import ButtonGroupComposition from '@/components/composition/ButtonGroupComposition.vue';
import TitleComponent from '@/components/core/TitleComponent.vue';
import content from '@/config/content.json';
</script>

<script>
export default {
  data() {
    return {
      entity: {
        id: this.$route.params.id,
      },
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
      this.loadEntityFromDatabase();
      if (this.isLoaded === false) throw new Error('Error loading API.');
    }).catch(() => {
      this.loadingHasError = true;
    });
  },
  methods: {
    loadEntityFromDatabase() {
      this.database.project.forEach((entity) => {
        if (entity.id === this.entity.id) {
          this.entity = entity;
          this.isLoaded = true;
        }
      });
    },
  },
  components: {
    PageComposition,
    CardComposition,
    BadgeComponent,
    ButtonGroupComposition,
    TitleComponent,
  },
};
</script>

<template>
  <PageComposition
    :title="entity.title"
    :isDescriptionVisible="false"
    :isTitleVisible="true"
    :isLoaded="isLoaded"
    :loadingHasError="loadingHasError"
  >
    <div class="row">
      <CardComposition
        :isHeaderTitleVisible="false"
        :collum="'col-12 col-md-6 col-lg-6'"
        :isImageVisible="false"
      >
        <TitleComponent type="h2">{{content.pages.photo}}</TitleComponent>
        <BadgeComponent :badges="entity.badges" />
        <div class="banner">
          <img alt="Image" :src="entity.imgUrl" />
        </div>
      </CardComposition>
      <div class="col">
        <CardComposition
          :isHeaderTitleVisible="false"
          :collum="'col-12'"
          :isImageVisible="false"
        >
          <TitleComponent type="h2">{{content.pages.description}}</TitleComponent>
          <span v-html="entity.description" />
        </CardComposition>
        <CardComposition
          :isHeaderTitleVisible="false"
          :collum="'col-12'"
          :isImageVisible="false"
        >
          <TitleComponent type="h2">{{content.pages.discover}}</TitleComponent>
          <ButtonGroupComposition
            :openOnNewTab="true"
            :buttons="entity.urls"
          />
        </CardComposition>
      </div>
    </div>
  </PageComposition>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
}

.banner img {
  width: 100%;
  height: auto;
}
</style>
