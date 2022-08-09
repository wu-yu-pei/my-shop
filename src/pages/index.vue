<template>
  <div class="home" md:pt-70 pt-50>
    <Wrapper>
      <template #w-slot>
        <div class="wrapper-home" flex justify-center items-start flex-wrap  c-white>
          <h2>资源小站</h2>
          <div>助你成为卷王<sup>之王</sup></div>
        </div>
      </template>
    </Wrapper>
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

<style scoped>
.wrapper-home {
  width: 100%;
  height: 100%;
  font-size: 30px;
  letter-spacing: 10px;
}
.wrapper-home h2 {
  text-align: center;
  width: 100%;
}

.wrapper-home div {
  font-family: fangsong;
}

.wrapper-home div sup {
  font-size: 30px;
  font-weight: 800;
  color:red;
}
</style>
