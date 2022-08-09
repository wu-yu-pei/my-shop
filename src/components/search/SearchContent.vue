<template>
  <div class="content" md:w80vw mxa px10 my20>
    <template v-if="searchStore.searchShops.length == 0">
      <div h100 lh-100 text-center>暂无搜索内容!</div>
    </template>
    <template v-else>
      <div class="content-item" grid gap30 justify-between>
        <template v-for="item in searchStore.searchShops">
          <ShopItem :item="item"></ShopItem>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import ShopItem from '../ShopItem.vue';
import useSearchStore from '../../store/search/index';

import { useRoute } from 'vue-router';

const searchStore = useSearchStore();
const route = useRoute();
</script>

<style scoped>
.content {
  user-select: none;
}

.content-item {
  min-height: 200px;
}
.content > div {
  grid-template-columns: repeat(auto-fill, 210px);
}
@media (min-width: 768px) {
  .content > div {
    grid-template-columns: repeat(auto-fill, 220px);
  }
}

@media (min-width: 640px) {
  .sm\:w100vw {
    width: 100%;
  }
}
</style>
