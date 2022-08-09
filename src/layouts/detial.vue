<template>
  <div class="default-layout">
    <Nav></Nav>
    <router-view></router-view>
    <Menu></Menu>
    <Copyright></Copyright>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import Menu from '../components/Menu.vue';
import Copyright from '../components/Copyright.vue';
</script>

<style scoped></style>
