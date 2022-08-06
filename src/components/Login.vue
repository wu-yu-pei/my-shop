<template>
  <div class="login-panel" ref="loginPanelRef" fixed top-0 left-0 z-3 w100vw h100vh bg-white>
    <div class="login" fixed ref="login" w100 h100 bg-red>
      login

      <div>a</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const loginPanelRef = ref();
const login = ref(null);
const emits = defineEmits(['closeLoginPanel']);

onClickOutside(login, () => emits('closeLoginPanel'));
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
</style>
