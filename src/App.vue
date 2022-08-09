<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup></script>
<style scoped></style>
