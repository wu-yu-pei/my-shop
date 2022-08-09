<template>
  <div class="default-layout">
    <Nav></Nav>
    <router-view></router-view>
    <Menu></Menu>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import Menu from '../components/Menu.vue';
</script>

<style scoped></style>
