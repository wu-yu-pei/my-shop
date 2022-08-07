<template>
  <div class="home">
    <Nav></Nav>
    <Wrapper></Wrapper>
    <Category></Category>
    <Content></Content>
    <Self></Self>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<script setup>
import Nav from '../components/Nav.vue';
import Wrapper from '../components/Wrapper.vue';
import Category from '../components/Category.vue';
import Content from '../components/Content.vue';
import Self from '../components/Self.vue';
</script>

<style scoped></style>
