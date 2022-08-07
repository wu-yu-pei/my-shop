<template>
  <div class="shop-item" w210 h220 transition md-w220 md-h230 rd-5 shadow p10 box-border hover:translate-y--2>
    <div w190 md-w200 h120 overflow-hidden rd-5>
      <img :src="props.img" alt="" transition scale-120 transform-origin-c hover:scale-130 />
    </div>
    <div class="category" flex mx0 my15>
      <div i-material-symbols-data-usage mr10 my0 color-blue></div>
      {{ props.tag }}
    </div>
    <div class="name" mx0 my15>{{ props.name }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  img: {
    type: String || null,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

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

.shop-item:hover {
  box-shadow: 0 0 10px #ccc;
}
</style>
