<template>
  <div class="login-panel" ref="loginPanelRef" fixed top-0 left-0 z-3 w100vw h100vh bg-white>
    <div
      class="login"
      ref="login"
      flex
      gap10
      flex-wrap
      justify-center
      items-center
      fixed
      w450
      h350
      bg-white
      rd-5
    >
      <div border-b border-color-blue><img w200 h48 scal3-300 src="../assets/imgs/logo.svg" alt="" /></div>
      <div flex flex-wrap justify-center>
        <div my-10 w300 h35 relative>
          <div i-material-symbols-person-3-outline class="icon" c-blue absolute top-8 left-10></div>
          <input type="text" class="input" v-model="homeStore.account" w300 outline-none border-none w200 h35 />
        </div>
        <div my-10 w300 h35 relative>
          <div i-material-symbols-lock-outline class="icon" c-blue absolute top-8 left-10></div>
          <input
            type="password"
            class="input"
            v-model="homeStore.password"
            w300
            outline-none
            border-none
            w200
            h35
          />
        </div>
        <button
          class="login-button"
          w300
          h35
          my-10
          cursor-pointer
          outline-none
          bg-blue
          border-none
          hover:opacity80
          color-white
          @click="goLogin"
        >
          <span
            v-if="isShowLoading"
            :class="{ loading: isShowLoading }"
            w14
            h12
            inline-block
            i-icon-park-outline-loading-one
          ></span>
          登 录
        </button>
        <div w300 h50 lh-50>
          <span cursor-pointer color-blue @click="goServe">获取账号？</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import useHomeStore from '../store/home/index';
import { useRoute, useRouter } from 'vue-router';
import local from '../utils/index';

const loginPanelRef = ref();
const isShowLoading = ref(false);
const login = ref(null);
const emits = defineEmits(['closeLoginPanel']);
const homeStore = useHomeStore();
const route = useRoute();
const router = useRouter();

onClickOutside(login, () => emits('closeLoginPanel'));

// login
const goLogin = async () => {
  isShowLoading.value = true;
  const res = await homeStore.login();
  if (res.code == 200) {
    emits('closeLoginPanel');
    if (route.fullPath != '/') {
      const org = local.get('home');
      const now = Object.assign(org, { token: res.token, userimg: res.img });
      local.set('home', now);
      router.go(0);
    }
  } else {
    alert('登录失败');
  }
  isShowLoading.value = false;
};

const goServe = () => {
  emits('closeLoginPanel');
  router.push({ name: 'serve' });
};
</script>

<style scoped>
.login {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-panel {
  background-color: rgba(0, 0, 0, 0.7);
}
.input {
  box-sizing: border-box;
  padding-left: 40px;
  letter-spacing: 3px;
  background-color: #e6eaed;
}
.icon {
  font-size: 20px;
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
</style>
