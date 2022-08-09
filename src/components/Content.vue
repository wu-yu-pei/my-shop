<template>
  <div class="content" md:w80vw mxa px10 my20>
    <div class="content-item" grid gap30 justify-around>
      <template v-for="item in homeStore.shops">
        <!-- <ShopItem :img="item.coverImg" :name="item.name" :tag="item.tag"></ShopItem> -->
        <ShopItem :item="item"></ShopItem>
      </template>
    </div>
    <div h100 text-center flex justify-center items-center ref="loadingRef">
      <div v-if="homeStore.currentTotal === 10 && page < 3" class="loadingio-spinner-double-ring-hjhy7y30biq">
        <div class="ldio-2w9n8bafbjw">
          <div></div>
          <div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
      <div
        v-else-if="homeStore.currentTotal !== 0 && page >= 3"
        w100
        h30
        bg-blue
        text-center
        lh-30
        rd-5
        c-white
        hover:opacity-80
        cursor-pointer
        @click="loadMore"
      >
        <span
          v-if="isLoading"
          :class="{ loading: isLoading }"
          w14
          h12
          inline-block
          i-icon-park-outline-loading-one
        ></span
        >加载更多
      </div>
      <div v-else>亲，没有了哦</div>
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
const isLoading = ref(false);
const { page, id, pid } = storeToRefs(homeStore);

onMounted(() => {
  const observer = new IntersectionObserver(
    async ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (page.value >= 3) return;
        await homeStore.shopsAction({ page: page.value, id: id.value, pid: pid.value });
        page.value = page.value + 1;
      }
    },
    {
      threshold: 0.4,
    }
  );
  observer.observe(loadingRef.value);
});

homeStore.shopsAction({ page: page.value++, id: id.value, pid: pid.value });

const loadMore = async () => {
  isLoading.value = true;
  await homeStore.shopsAction({ page: page.value++, id: id.value, pid: pid.value });
  isLoading.value = false;
};
</script>

<style scoped>
.content {
  user-select: none;
}

.content-item {
  min-height: 200px;
}
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

.loading {
  animation: loading 1s linear infinite;
}

@keyframes loading {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
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
