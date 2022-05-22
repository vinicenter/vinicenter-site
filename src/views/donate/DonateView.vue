<script setup>
import axios from 'axios';
import getUrlByKeyNode from '@/assets/js/request';
import content from '@/config/content.json';

import PageComposition from '@/components/composition/PageComposition.vue';
import CardComposition from '@/components/composition/CardComposition.vue';
import ButtonComponent from '@/components/core/ButtonComponent.vue';
import ModalComposition from '@/components/composition/ModalComposition.vue';
import TitleComponent from '@/components/core/TitleComponent.vue';
import CopyTextComposition from '@/components/composition/CopyTextComposition.vue';
</script>

<script>
export default {
  data() {
    return {
      database: {
        donate: {},
      },
      isLoaded: false,
      loadingHasError: false,
    };
  },
  beforeCreate() {
    axios.get(getUrlByKeyNode('api.database.donate')).then((res) => {
      this.database.donate = res.data;
      this.isLoaded = true;
    }).catch(() => {
      this.loadingHasError = true;
    });
  },
  components: {
    PageComposition,
    CardComposition,
    ButtonComponent,
    ModalComposition,
    TitleComponent,
    CopyTextComposition,
  },
};
</script>

<template>
  <PageComposition
    :title="content.views.donate.title"
    :description="content.views.donate.description"
    :isLoaded="isLoaded"
    :loadingHasError="loadingHasError"
  >
    <div class="row">
      <CardComposition
        v-for="donate in database.donate"
        :key="donate"
        :collum="'col-6 col-md-4 col-lg-2'"
        :headerTitle="donate.name"
        :title="donate.name"
        :description="donate.symbol"
        :badges="donate.badges"
      >
        <ButtonComponent
          dataBsToggle="modal"
          :dataBsTarget="'#' + donate.id"
        >
          {{ content.generic.buttons.donate }}
        </ButtonComponent>
      </CardComposition>

      <ModalComposition
        v-for="donate in database.donate"
        :key="donate"
        :id="donate.id"
        :title="donate.name"
      >
        <div class="d-flex align-items-center flex-column" >
          <div v-if="donate.pay.type == 'qrcode'">
            <img alt="Qr code" :src="donate.pay.value" />
          </div>
          <div v-else>
            <ButtonComponent :type="'link'" :href="donate.pay.value" target="_blank">
              {{ content.generic.buttons.clickToOpenPayLink }}
            </ButtonComponent>
          </div>
          <CopyTextComposition :text="donate.pay.content" />
          <TitleComponent type="h5">
            {{ donate.pay.instruction }}
          </TitleComponent>
        </div>
      </ModalComposition>
    </div>
  </PageComposition>
</template>
