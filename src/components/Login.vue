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
      <div border-b border-color-blue><img w200 h48 src="../assets/imgs/logo.png" alt="" /></div>
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
          登 录
        </button>
        <div w300 h50 lh-50>
          <span cursor-pointer color-blue>获取账号？</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

import useHomeStore from '../store/home/index';

const loginPanelRef = ref();
const login = ref(null);
const emits = defineEmits(['closeLoginPanel']);
const homeStore = useHomeStore();

onClickOutside(login, () => emits('closeLoginPanel'));

// login
const goLogin = async () => {
  const res = await homeStore.login();
  if (res.code == 200) {
    alert('登录成功');
    emits('closeLoginPanel');
  } else {
    alert('登录失败');
  }
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
</style>
