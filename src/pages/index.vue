<template>
  <div flex border rd-10 p10 border-blue>首页</div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

console.log(route.fullPath, router);
</script>

<style scoped></style>
