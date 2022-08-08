<template>
  <div class="home">
    <Wrapper></Wrapper>
    <Category></Category>
    <Content></Content>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup>
import Wrapper from '../components/Wrapper.vue';
import Category from '../components/Category.vue';
import Content from '../components/Content.vue';
</script>

<style scoped></style>
