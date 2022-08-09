<template>
  <div
    ref="copyRightRef"
    class="copyRight"
    fixed
    flex
    justify-center
    items-center
    flex-wrap
    bottom-20
    text-center
    c-yellow
    py-20
  >
    所有资源收集与网络,如有侵权,请联系删除！
    <div i-material-symbols-close inline-block w15 h15 @click="close" cursor-pointer my-10></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const copyRightRef = ref(null);

const close = () => {
  copyRightRef.value.style.display = 'none';
};
</script>

<style scoped>
.copyRight {
  transform: translate(-50%, 0);
  left: 50%;
  width: 50%;
  letter-spacing: 3px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
