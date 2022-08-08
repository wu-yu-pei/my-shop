<template>
  <div class="default-layout">
    <Nav></Nav>
    <router-view></router-view>
    <Self></Self>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import Self from '../components/Self.vue';
</script>

<style scoped></style>
