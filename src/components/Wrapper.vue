<template>
  <div class="wrapper" w100vw h200 md:h370 relative></div>
</template>

<script setup></script>

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
