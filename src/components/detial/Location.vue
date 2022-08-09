<template>
  <div class="location" md:w80vw mxa py30 box-border flex items-center>
    当前位置:
    <!-- {{ props.catBeg == '/' ? '首页' : '搜索' }} -->
    <template v-if="props.catBeg == '/'">
      <a href="/" ml-10>首页</a>
    </template>
    <template v-else>
      <a href="/search" ml-10>搜索</a>
    </template>
    <template v-if="props.catOne">
      <div inline-block i-icon-park-outline-right mx-10></div>
      <span>{{ category && category.find((item) => item.id == catOne).name }}</span>
    </template>
    <template v-if="props.catTwo">
      <div inline-block i-icon-park-outline-right mx-10></div>
      <span>{{ catTwo }}</span>
    </template>
    <template v-if="props.kefu">
      <div inline-block i-icon-park-outline-right mx-10></div>
      <span>客服</span>
    </template>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import useHomeStore from '../../store/home';
import { storeToRefs } from 'pinia';
const homeStroe = useHomeStore();
const { category } = storeToRefs(homeStroe);

const props = defineProps({
  catBeg: {
    type: String,
  },
  catOne: {
    type: String,
  },
  catTwo: {
    type: String,
  },
  kefu: {
    type: String,
  },
});

const catTwo = computed(() => {
  let a = '';
  category.value.forEach((item) =>
    item.children.forEach(({ id, name }) => {
      if (id == props.catTwo) {
        a = name;
      }
    })
  );
  return a;
});
</script>

<style scoped>
.location {
  letter-spacing: 2px;
}
a {
  text-decoration: none;
  color: blue;
}
</style>
