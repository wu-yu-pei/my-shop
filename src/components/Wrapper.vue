<template>
  <div class="wrapper" h200 md:h370 relative md:mt-70 mt-50>
    <slot name="w-slot"> </slot>
  </div>
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
  z-index: 1;
}
</style>
