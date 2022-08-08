<template>
  <div class="search-page">
    <Wrapper>
      <template #w-slot>
        <div class="search" flex justify-center items-center c-white>Search</div>
      </template>
    </Wrapper>
    <SearchCategory></SearchCategory>
    <SearchContent></SearchContent>
  </div>
</template>

<script setup>
import Wrapper from '../components/Wrapper.vue';
import SearchCategory from '../components/SearchCategory.vue';
import SearchContent from '../components/SearchContent.vue';
</script>

<style scoped>
.search-warpper {
  background-image: url(../assets/imgs/a.png);
}
.search {
  width: 100%;
  height: 100%;
  font-size: 30px;
  letter-spacing: 10px;
}
</style>
