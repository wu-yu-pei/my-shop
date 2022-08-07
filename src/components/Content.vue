<template>
  <div class="content" md:w80vw mxa px10 my20 cursor-pointer>
    <div grid gap30 justify-between>
      <template v-for="item in homeStore.shops">
        <ShopItem :img="item.coverImg" :name="item.name" :tag="item.tag"></ShopItem>
      </template>
    </div>
    <div h100 text-center flex justify-center items-center ref="loadingRef">
      <div class="loadingio-spinner-double-ring-hjhy7y30biq">
        <div class="ldio-2w9n8bafbjw">
          <div></div>
          <div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ShopItem from './ShopItem.vue';
import useHomeStore from '../store/home';
import { storeToRefs } from 'pinia';

const loadingRef = ref();
const homeStore = useHomeStore();
const { page } = storeToRefs(homeStore);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        homeStore.shopsAction({ page: page.value });
        page.value = page.value + 1;
      }
    },
    {
      threshold: 0.4,
    }
  );
  observer.observe(loadingRef.value);
});
</script>

<style scoped>
.content > div {
  grid-template-columns: repeat(auto-fill, 210px);
}
@media (min-width: 768px) {
  .content > div {
    grid-template-columns: repeat(auto-fill, 220px);
  }
}

@media (min-width: 640px) {
  .sm\:w100vw {
    width: 100%;
  }
}

@keyframes ldio-9tgi5nw0q4 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes ldio-2w9n8bafbjw {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-2w9n8bafbjw div {
  box-sizing: border-box !important;
}
.ldio-2w9n8bafbjw > div {
  position: absolute;
  width: 72px;
  height: 72px;
  top: 14px;
  left: 14px;
  border-radius: 50%;
  border: 8px solid #000;
  border-color: #5b78e1 transparent #5b78e1 transparent;
  animation: ldio-2w9n8bafbjw 1s linear infinite;
}

.ldio-2w9n8bafbjw > div:nth-child(2),
.ldio-2w9n8bafbjw > div:nth-child(4) {
  width: 54px;
  height: 54px;
  top: 23px;
  left: 23px;
  animation: ldio-2w9n8bafbjw 1s linear infinite reverse;
}
.ldio-2w9n8bafbjw > div:nth-child(2) {
  border-color: transparent #f76af8 transparent #f76af8;
}
.ldio-2w9n8bafbjw > div:nth-child(3) {
  border-color: transparent;
}
.ldio-2w9n8bafbjw > div:nth-child(3) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-2w9n8bafbjw > div:nth-child(3) div:before,
.ldio-2w9n8bafbjw > div:nth-child(3) div:after {
  content: '';
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: -8px;
  left: 24px;
  background: #5b78e1;
  border-radius: 50%;
  box-shadow: 0 64px 0 0 #5b78e1;
}
.ldio-2w9n8bafbjw > div:nth-child(3) div:after {
  left: -8px;
  top: 24px;
  box-shadow: 64px 0 0 0 #5b78e1;
}

.ldio-2w9n8bafbjw > div:nth-child(4) {
  border-color: transparent;
}
.ldio-2w9n8bafbjw > div:nth-child(4) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-2w9n8bafbjw > div:nth-child(4) div:before,
.ldio-2w9n8bafbjw > div:nth-child(4) div:after {
  content: '';
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: -8px;
  left: 15px;
  background: #f76af8;
  border-radius: 50%;
  box-shadow: 0 46px 0 0 #f76af8;
}
.ldio-2w9n8bafbjw > div:nth-child(4) div:after {
  left: -8px;
  top: 15px;
  box-shadow: 46px 0 0 0 #f76af8;
}
.loadingio-spinner-double-ring-hjhy7y30biq {
  width: 50px;
  height: 50px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-2w9n8bafbjw {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.5);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-2w9n8bafbjw div {
  box-sizing: content-box;
}
</style>
