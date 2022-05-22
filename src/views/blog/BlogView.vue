<script setup>
import axios from 'axios';
import getUrlByKeyNode from '@/assets/js/request';
import content from '@/config/content.json';

import PageComposition from '@/components/composition/PageComposition.vue';
import CardComposition from '@/components/composition/CardComposition.vue';
import IconComponent from '@/components/core/IconComponent.vue';
import ButtonComponent from '@/components/core/ButtonComponent.vue';
</script>

<script>
export default {
  data() {
    return {
      database: {
        blog: {},
        contact: {},
      },
      isLoaded: false,
      loadingHasError: false,
      loadingBlogHasError: false,
    };
  },
  beforeCreate() {
    axios.get(getUrlByKeyNode('api.apiBlog')).then((res) => {
      this.database.blog = res.data;
    }).catch(() => {
      this.loadingBlogHasError = true;
    });

    axios.get(getUrlByKeyNode('api.database.contact')).then((res) => {
      this.database.contact = res.data;
      this.isLoaded = true;
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
    getMediumLinkFromContact(contact) {
      let ret = null;
      contact.social.networks.forEach((network) => {
        if (network.name === 'medium') {
          ret = network.url;
        }
      });
      return ret;
    },
  },
  components: {
    PageComposition,
    CardComposition,
    IconComponent,
    ButtonComponent,
  },
};
</script>

<template>
  <PageComposition
    :title="content.views.blog.title"
    :description="content.views.blog.description"
    :isLoaded="isLoaded"
    :loadingHasError="loadingHasError"
  >
    <ButtonComponent
      :style="'secondary'"
      target="_blank"
      class="mb-3"
      :href="getMediumLinkFromContact(database.contact)"
    >
      {{ content.post.viewAllPostsOnMedium }}
      <IconComponent
        :size="12"
        :isHover="false"
        :icon="'fa-solid fa-up-right-from-square'"
      />
    </ButtonComponent>
    <div class="row" v-if="!(loadingBlogHasError)">
      <CardComposition
        v-for="blog in database.blog.items"
        :key="blog"
        :collum="'col-12'"
        :title="blog.title"
        :badges="getBadgesFromBlogCategories(blog.categories)"
        :description="
          blog.author + ' ' + content.post.postedOn + ' ' + getPubDateFormated(blog.pubDate)
        "
      >
        <ButtonComponent
          :style="'primary'"
          :type="'router'"
          :href="$route.path + '/' + (blog.link.split('.com/')[1]).split('?')[0]"
        >
          {{ content.generic.buttons.details }}
        </ButtonComponent>
      </CardComposition>
    </div>
  </PageComposition>
</template>
