<script setup>
import axios from 'axios';
import getUrlByKeyNode from '@/assets/js/request';
import content from '@/config/content.json';

import PageComposition from '@/components/composition/PageComposition.vue';
import CardComposition from '@/components/composition/CardComposition.vue';
import ButtonComponent from '@/components/core/ButtonComponent.vue';
import IconComponent from '@/components/core/IconComponent.vue';
</script>

<script>
export default {
  data() {
    return {
      entity: {
        id: this.$route.params.id,
      },
      database: {
        blog: {},
      },
      isLoaded: false,
      loadingHasError: false,
    };
  },
  beforeCreate() {
    axios.get(getUrlByKeyNode('api.apiBlog')).then((res) => {
      this.database.blog = res.data;
      this.loadEntityFromDatabase();
      if (this.isLoaded === false) throw new Error('Error loading API.');
    }).catch(() => {
      this.loadingHasError = true;
    });
  },
  methods: {
    getBadgesFromBlogCategories(categories) {
      const ret = [];
      categories.forEach((category) => {
        const element = {};
        element[0] = 'primary';
        element[1] = category;
        ret.push(element);
      });
      return ret;
    },
    getPubDateFormated(pubDate) {
      return pubDate.substring(0, 10);
    },
    loadEntityFromDatabase() {
      this.database.blog.items.forEach((entity) => {
        const id = (entity.link.split('.com/')[1]).split('?')[0];
        if (id === this.entity.id) {
          this.entity = entity;
          this.isLoaded = true;
        }
      });
    },
  },
  components: {
    PageComposition,
    CardComposition,
    ButtonComponent,
    IconComponent,
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
      <div class="col-12 col-md-12 col-lg-8">
        <CardComposition
          :isHeaderTitleVisible="false"
          :collum="'col-12'"
          :isImageVisible="false"
        >
          <span v-html="entity.content" />
        </CardComposition>
      </div>
      <div class="col-12 col-md-12 col-lg-4">
        <CardComposition
          :isHeaderTitleVisible="false"
          :collum="'col-12'"
          :isImageVisible="false"
          :badges="getBadgesFromBlogCategories(entity.categories)"
          :description="
            entity.author + ' ' + content.post.postedOn + ' ' + getPubDateFormated(entity.pubDate)
          "
        >
          <ButtonComponent
            :style="'secondary'"
            :href="entity.link"
            target="_blank"
          >
            {{ content.post.viewPostOnMedium }}
            <IconComponent
              :size="16"
              :isHover="false"
              :icon="'ph-link-bold'"
            />
          </ButtonComponent>
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
