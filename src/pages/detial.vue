<template>
  <div class="detial-page" mt-70>
    <Location
      :catBeg="route.query.from"
      :catOne="detialStore.shopDetial.categoryone"
      :catTwo="detialStore.shopDetial.categorytwo"
    ></Location>
    <item :info="detialStore.shopDetial"></item>
    <div class="fotter" h150></div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: detial
</route>

<script setup>
import Location from '../components/detial/Location.vue';
import Item from '../components/detial/Item.vue';

import useDetialStore from '../store/detial/index';
import { useRoute, useRouter } from 'vue-router';

const detialStore = useDetialStore();
const route = useRoute();
const router = useRouter();

detialStore.getDetialAction(route.query.id, router);
</script>

<style scoped>
.fotter {
  background-color: #1c1f2b;
}
</style>
