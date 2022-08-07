<template>
  <div class="category" md:w80vw ma>
    <div p10 my10 rd-5 flex>
      <span shrink-0> <h4>大纲</h4></span>
      <ul flex gap15 items-center flex-wrap>
        <li
          v-for="(val, key) in category"
          @click="handleDaGangClick(key, val)"
          :class="{ active: key === activeDaGang }"
        >
          {{ val.name }}
        </li>
      </ul>
    </div>
    <div p10 my10 rd-5 flex>
      <span shrink-0><h4>分类</h4></span>
      <ul flex gap15 items-center flex-wrap>
        <li
          v-for="(item, index) in category[activeDaGang]?.children"
          :class="{ active: activeFenLei === index }"
          @click="handleFenLeiClick(index, item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import useHomeStore from '../store/home/index';

const activeDaGang = ref(0);
const activeFenLei = ref(0);
const homeStore = useHomeStore();

const { category } = storeToRefs(homeStore);

const handleDaGangClick = (key, item) => {
  activeDaGang.value = key;
  activeFenLei.value = 0;
  console.log(item);
};

const handleFenLeiClick = (index, item) => {
  activeFenLei.value = index;
  console.log(item);
};

homeStore.categoryAction();
</script>

<style scoped>
ul li {
  padding: 5px;
  border-radius: 10px;
  list-style: none;
  letter-spacing: 2px;
  cursor: pointer;
}

ul li:hover {
  color: blue;
}

ul li.active {
  background-color: blue;
  color: #fff;
}
.category > div {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
  .sm\:w100vw {
    width: 100%;
  }
}
</style>
