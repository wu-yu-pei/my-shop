<template>
  <div class="category" md:w80vw sm:w100vw ma>
    <div p10 m10 rd-5 flex>
      <span> <h4>大纲</h4></span>
      <ul flex gap15 items-center>
        <li class="active">全部</li>
        <li>前端</li>
        <li>后端</li>
        <li>架构师</li>
      </ul>
    </div>
    <div p10 m10 rd-5 flex>
      <span><h4>分类</h4></span>
      <ul flex gap15 items-center>
        <li class="active">全部</li>
        <li>css</li>
        <li>javascript</li>
        <li>vue</li>
        <li>react</li>
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
