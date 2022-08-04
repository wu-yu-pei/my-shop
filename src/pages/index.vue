<template>
  <div class="home">
    <div w1200 ma flex p10 h70 border box-border b-blue>
      <nav class="nav-collapse" w1200>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="wrapper" w100vw h370 relative></div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// responsive-nav
import '../assets/css/responsive-nav.css';
import '../assets/js/responsive-nav';

const route = useRoute();
const router = useRouter();

onMounted(() => {
  const nav = responsiveNav('.nav-collapse');
}),
  console.log(route.fullPath, router);
</script>

<style scoped>
.wrapper {
  background-image: url(https://youkewang.top/wp-content/uploads/2021/08/20094302789.jpg);
  background-size: cover;
  background-position: center center;
}
.wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
</style>
