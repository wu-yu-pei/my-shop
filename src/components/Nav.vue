<template>
  <div shadow w100vw fixed left-0 top-0 z-2 bg-white>
    <div class="nav" relative md:w80vw ma flex justify-between p10 h70 box-border>
      <div flex items-center w200 lh-48 shrink-0 overflow-hidden cursor-pointer>
        <img w100 h28 sm:w200 sm:h48 src="../assets/imgs/logo.png" alt="" />
      </div>
      <div w150 flex justify-between items-center>
        <div i-icon-park-outline-vip m5 cursor-pointer :class="{ red: homeStore.token }"></div>
        <div
          w20
          h20
          m5
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
          <div v-if="!homeStore.userimg" cursor-pointer @click="showLoginPanel">登录</div>
          <img v-else w40 h40 rd-40 cursor-pointer mx-auto my-0 block :src="homeStore.userimg" alt="" />
        </div>
      </div>
      <div
        flex
        absolute
        md:w80vw
        ma
        px15
        top--70
        left-0
        h70
        bg-white
        transition-all
        py10
        box-border
        :class="{ show: isShowSearch }"
        ref="searchPanel"
      >
        <input
          grow-4
          md:grow-9
          border-none
          outline-none
          color-blue
          type="text"
          ref="inputRef"
          class="search-input"
          placeholder="输入关键字回车或点击搜索"
        />
        <div
          outline-none
          grow-1
          md:grow-2
          lh-70
          flex
          justify-center
          items-center
          hover:color-blue
          cursor-pointer
        >
          <div i-material-symbols-search @click="gotoSearch"></div>
        </div>
      </div>
    </div>
  </div>
  <template v-if="isShowLoginPanel">
    <Login @closeLoginPanel="closeLoginPanel"></Login>
  </template>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

import Login from './Login.vue';
import useHomeStore from '../store/home';

const isShowSearch = ref(false);
const searchPanel = ref();
const inputRef = ref();
const isShowLoginPanel = ref(false);
const homeStore = useHomeStore();

// 搜索图标点击 显示搜索框
const searchIconClick = () => {
  isShowSearch.value = !isShowSearch.value;
};

// 显示登录面板
const showLoginPanel = () => {
  isShowLoginPanel.value = true;
  // 阻止滚动效果
  document.body.style.height = '100vw';
  document.body.style.overflow = 'hidden';
};

// 关闭登录面板
const closeLoginPanel = () => {
  isShowLoginPanel.value = false;

  // 还原滚动效果
  document.body.style.height = '';
  document.body.style.overflow = '';
};

// Document Click Event
const handleDocumentClick = (e) => {
  e.stopPropagation();
  if (e.target == searchPanel.value || e.target == inputRef.value) {
    return false;
  }
  isShowSearch.value = false;
};

// Enter Event
const handleEnterClick = (e) => {
  if (e.keyCode === 13) {
    console.log('Enter点击了');
  }
};

// gotoSearch
const gotoSearch = () => {
  console.log('去搜索');
};

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keypress', handleEnterClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
  document.removeEventListener('click', handleEnterClick);
});
</script>

<style scoped>
.show {
  width: 100%;
  top: 0;
}

.red {
  color: red;
}

.search-input {
  padding: 0 5px;
  font-size: 20px;
  letter-spacing: 3px;
  border-bottom: 2px solid #000;
}
</style>
