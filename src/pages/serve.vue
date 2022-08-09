<template>
  <div class="serve" w80vw ma p20>
    <div class="serve-content" flex justify-center items-center flex-wrap my-50 md:my70 h500>
      <Location catBeg="/"></Location>
      <h2 v-if="!homeStroe.token">你好,请联系本站提供的专属客服为你开通VIP账号</h2>
      <h2 v-else>你好VIP用户,这是你的专属客服</h2>
      <img w200 h200 src="../assets/imgs/WX.jpg" alt="" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup>
import Location from '../components/detial/Location.vue';
import useHomeStroe from '../store/home/index';
const homeStroe = useHomeStroe();
</script>

<style scoped>
.serve-content {
  user-select: none;
}
.serve-content h2 {
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  width: 100%;
}
.serve-content img {
  border: 1px solid blue;
}
</style>
