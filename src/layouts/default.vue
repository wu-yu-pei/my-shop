<template>
  <div class="default-layout">
    <Nav></Nav>
    <router-view></router-view>
    <Self></Self>
    <Menu></Menu>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import Self from '../components/Self.vue';
import Menu from '../components/Menu.vue';
</script>

<style scoped></style>
