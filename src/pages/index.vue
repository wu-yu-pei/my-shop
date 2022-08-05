<template>
  <div class="home">
    <Nav></Nav>
    <Wrapper></Wrapper>
    <Category></Category>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup>
import { useRouter, useRoute } from 'vue-router';

import Nav from '../components/Nav.vue';
import Wrapper from '../components/Wrapper.vue';
import Category from '../components/Category.vue';
</script>

<style scoped></style>
