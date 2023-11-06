<template>
  <div class="shop-item" w210 h220 transition md-w220 md-h230 rd-5 shadow p10 box-border hover:translate-y--2 cursor-pointer @click="goDetial">
    <div w190 md-w200 h120 overflow-hidden rd-5>
      <img :src="props.item.coverImg" alt="" transition scale-120 transform-origin-c hover:scale-130 />
    </div>
    <div class="category" flex mx0 my15>
      <div i-material-symbols-data-usage mr10 my0 color-blue></div>
      {{ props.item.tag }}
    </div>
    <div class="name" mx0 my15>{{ props.item.name }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import useHomeStore from '../store/home';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const homeStore = useHomeStore();
import { storeToRefs } from 'pinia';
const { account, password, token } = storeToRefs(homeStore);
import Message from '../components/Message';


const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const goDetial = () => {
  if (!token) {
    new Message({ message: '请先登录' });
    return;
  }
  router.push({
    name: 'detial',
    query: { id: props.item.id, from: route.path },
    params: { info: JSON.stringify(props.item) },
  });
};
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
