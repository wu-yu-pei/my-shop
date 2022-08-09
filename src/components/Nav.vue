<template>
  <div shadow w100vw fixed left-0 top-0 z-2 bg-white>
    <div class="nav" relative h50 md:w80vw ma flex justify-between md:h70 box-border>
      <div flex items-center w200 lh-48 shrink-0 overflow-hidden cursor-pointer @click="goHome">
        <img src="../assets/imgs/logo2.svg" alt="" mt-7 scale-50 ml--60 md:m0 md:ml--15 md:scale-100 />
      </div>
      <div w110 flex justify-between items-center>
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
        <div w100 relative text-center :class="{ h50: homeStore.token }">
          <div lh-50 v-if="!homeStore.userimg" hover:c-blue cursor-pointer @click="showLoginPanel">登录</div>
          <ul
            v-else
            absolute
            z-3
            m0
            p5
            list-none
            h40
            md:h50
            transition
            transition-all
            hover:h-80
            md:hover-h100
            hover:shadow
            bg-white
            rd-5
            overflow-hidden
          >
            <li h40 lh-40 md:h50 md:lh-50 text-center>
              <img w40 h40 rd-40 cursor-pointer mx-auto my-0 block :src="homeStore.userimg" alt="" />
            </li>
            <li class="out" h40 lh-40 md:h50 md:lh-50 cursor-pointer hover:bg-blue rd-5 @click="out" font-500>
              退出登录
            </li>
          </ul>
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
        z-5
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
          v-model="searchVal"
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
import { useRouter, useRoute } from 'vue-router';

import Login from './Login.vue';
import useHomeStore from '../store/home';
import local from '../utils/index';

const isShowSearch = ref(false);
const searchPanel = ref();
const inputRef = ref();
const searchVal = ref();
const isShowLoginPanel = ref(false);
const router = useRouter();
const route = useRoute();
const homeStore = useHomeStore();

const goHome = () => {
  router.push({ path: '/' });
};

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
    if (route.fullPath === '/') {
      router.push({ path: '/search', query: { value: searchVal.value } });
    }
    // 发送网络请求
    console.log('search...', searchVal.value);
  }
};

// gotoSearch
const gotoSearch = () => {
  if (route.fullPath === '/') {
    router.push({ path: '/search', query: { value: searchVal.value } });
  }
  console.log('去搜索', searchVal.value);
};

// 退出登录
const out = () => {
  homeStore.token = '';
  homeStore.userimg = '';
  const org = local.get('home');
  const now = Object.assign(org, { token: '', userimg: '' });
  local.set('home', now);
  router.replace('/');
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

.h50 {
  height: 50px;
}

.search-input {
  padding: 0 5px;
  font-size: 20px;
  letter-spacing: 3px;
  border-bottom: 2px solid #000;
}

.out {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
