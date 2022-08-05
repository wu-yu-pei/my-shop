<template>
  <div class="nav" relative md:w80vw sm:w100vw ma flex justify-between p10 h70 box-border>
    <div w200 lh-48 shrink-0>
      <img w200 h48 src="../assets/imgs/a.png" alt="" />
    </div>
    <div w100 flex justify-between items-center>
      <div
        w20
        h20
        lh-48
        fw-500
        i-material-symbols-location-searching
        op-70
        hover:c-black
        hover:op-100
        cursor-pointer
        @click.stop="searchIconClick"
      ></div>
      <div w50>
        <img w40 h40 rd-40 mx-auto my-0 block src="../assets/imgs/user.png" alt="" />
      </div>
    </div>
    <div
      absolute
      md:w80vw
      sm:w100vw
      ma
      top--70
      left-0
      h70
      bg-white
      transition-all
      :class="{ show: isShowSearch }"
      ref="searchPanel"
    >
      Search
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const searchIconClick = () => {
  isShowSearch.value = !isShowSearch.value;
  console.log('searchClick');
};

const isShowSearch = ref(false);
const searchPanel = ref();

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (e.target == searchPanel.value) {
      return;
    }
    isShowSearch.value = false
  });
});
</script>

<style scoped>
.show {
  top: 0;
}
</style>
