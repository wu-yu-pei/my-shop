<template>
  <div class="content" md:w80vw mxa px10 my20 cursor-pointer>
    <div grid gap15 justify-between>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
      <ShopItem></ShopItem>
    </div>
  </div>
</template>

<script setup>
import ShopItem from './ShopItem.vue';
</script>

<style scoped>
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
