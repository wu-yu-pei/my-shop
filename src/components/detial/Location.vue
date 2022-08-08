<template>
  <div class="location" md:w80vw mxa py30 box-border cursor-pointer>
    当前位置:
    {{ props.catBeg == '/' ? '首页' : '搜索' }}
    <template v-if="props.catOne"> > {{ category.find((item) => item.id == catOne).name }} </template>
    <template v-if="props.catTwo"> >{{ catTwo }} </template>
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

<style scoped></style>
