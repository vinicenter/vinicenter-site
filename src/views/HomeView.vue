<script setup>
import axios from 'axios';
import getUrlByKeyNode from '@/assets/js/request';
import content from '@/config/content.json';

import PageComposition from '@/components/composition/PageComposition.vue';
import TextComponent from '@/components/core/TextComponent.vue';
import TitleComponent from '@/components/core/TitleComponent.vue';
import CardComposition from '@/components/composition/CardComposition.vue';
import IconLinkComposition from '@/components/composition/IconLinkComposition.vue';
import LinkComponent from '@/components/core/LinkComponent.vue';
</script>

<script>
export default {
  data() {
    return {
      database: {
        contact: {},
      },
      isLoaded: false,
      loadingHasError: false,
    };
  },
  beforeCreate() {
    axios.get(getUrlByKeyNode('api.database.contact')).then((res) => {
      this.database.contact = res.data;
      this.isLoaded = true;
    }).catch(() => {
      this.loadingHasError = true;
    });
  },
  components: {
    PageComposition,
    TextComponent,
    TitleComponent,
    CardComposition,
    IconLinkComposition,
    LinkComponent,
  },
};
</script>

<template>
  <PageComposition
    :title="content.views.home.title"
    :description="content.views.home.description"
    :isDescriptionVisible="false"
    :isTitleVisible="false"
    :isLoaded="isLoaded"
    :loadingHasError="loadingHasError"
  >
    <div
      class="d-flex justify-content-center flex-column"
      style="height: 100%"
    >
      <CardComposition
        :headerTitle="database.contact.username"
        :imgUrl="database.contact.logoUrl"
        :collum="'d-flex justify-content-center align-item-center align-content-center'"
      >
        <div class="d-flex flex-column align-items-center m-3">
          <TitleComponent type="h2">
            {{ database.contact.firstName + " " + database.contact.secondName }}
          </TitleComponent>

          <TitleComponent type="h5">
            {{ database.contact.description }}
          </TitleComponent>

          <TextComponent v-for="email in database.contact.social.emails" :key="email">
            <LinkComponent
              :isNewTab="true"
              :href="`mailto:${email.email}`"
            >
              {{ email.email }}
            </LinkComponent>
          </TextComponent>

          <IconLinkComposition :networks="database.contact.social.networks" />
        </div>
      </CardComposition>
    </div>
  </PageComposition>
</template>
