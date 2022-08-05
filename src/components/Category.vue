<template>
  <div class="category" md:w80vw sm:w100vw ma>
    <div p10 m10 rd-5 flex>
      <span shrink-0> <h4>大纲</h4></span>
      <ul flex gap15 items-center flex-wrap>
        <li
          v-for="(val, key) in category"
          @click="handleDaGangClick(key)"
          :class="{ active: key === activeDaGang }"
        >
          {{ key }}
        </li>
      </ul>
    </div>
    <div p10 m10 rd-5 flex>
      <span shrink-0><h4>分类</h4></span>
      <ul flex gap15 items-center flex-wrap>
        <li
          v-for="(item, index) in category[activeDaGang]"
          :class="{ active: activeFenLei === index }"
          @click="handleFenLeiClick(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const activeDaGang = ref('全部');
const activeFenLei = ref(0);

const category = reactive({
  全部: ['全部'],
  前端: ['html', 'css', 'vue', 'react'],
  后端: ['java', 'Mysql'],
  架构师: [],
});

const handleDaGangClick = (key) => {
  activeDaGang.value = key;
  activeFenLei.value = 0;
};

const handleFenLeiClick = (index) => {
  activeFenLei.value = index;
};
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
</style>
