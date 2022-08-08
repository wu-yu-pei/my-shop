<template>
  <div class="content" md:w80vw mxa px10 my20>
    <div class="content-item" grid gap30 justify-between>
      <template v-for="item in homeStore.shops">
        <ShopItem :img="item.coverImg" :name="item.name" :tag="item.tag"></ShopItem>
      </template>
    </div>
  </div>
</template>

<script setup>
import ShopItem from '../ShopItem.vue';
import useHomeStore from '../../store/home';
const homeStore = useHomeStore();
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
