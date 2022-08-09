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
        <template v-if="category && category[activeDaGang]?.children.length === 0">
          <li class="active">全部</li>
        </template>
        <li
          v-for="(item, index) in category && category[activeDaGang]?.children"
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

const homeStore = useHomeStore();

const { category, shops, page, id, pid, activeDaGang, activeFenLei } = storeToRefs(homeStore);

const handleDaGangClick = (key, item) => {
  activeDaGang.value = key;
  activeFenLei.value = 0;
  shops.value = [];
  page.value = 1;
  if (item.children.length === 0) {
    id.value = item.id;
    pid.value = 0;
    homeStore.shopsAction({ page: page.value, id: id.value, pid: 0 });
  } else {
    pid.value = item.children[0].pid;
    id.value = item.children[0].id;
    homeStore.shopsAction({ page: page.value, id: id.value, pid: pid.value });
  }
  page.value += 1;
};

const handleFenLeiClick = (index, item) => {
  activeFenLei.value = index;

  shops.value = [];
  page.value = 1;
  id.value = item.id;
  pid.value = item.pid;
  homeStore.shopsAction({ page: page.value, id: id.value, pid: pid.value });
  page.value += 1;
};

// 请求分类数据
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
