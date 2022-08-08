<template>
  <div class="category" md:w80vw ma>
    <div p10 my10 rd-5 flex>
      <span shrink-0> <h4>大纲</h4></span>
      <ul flex gap15 items-center flex-wrap>
        <li class="active">全部</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

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
