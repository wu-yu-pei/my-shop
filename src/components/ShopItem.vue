<template>
  <div class="shop-item" w210 h220 md-w220 md-h230 rd-5 shadow p10 box-border>
    <img src="https://youkewang.top/wp-content/uploads/2022/06/14172703330.png" alt="" />
    <div class="category" flex mx0 my15>
      <div i-material-symbols-data-usage mr10 my0 color-blue></div>
      架构师
    </div>
    <div class="name" mx0 my15>奈学P8百万大数据架构6期 2022年</div>
  </div>
</template>

<script setup></script>

<style scoped>
.shop-item {
  overflow: hidden;
}
.shop-item img {
  width: 100%;
}

.name {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: nowrap;
  font-size: 14px;
}

.category {
  font-size: 12px;
}
</style>
