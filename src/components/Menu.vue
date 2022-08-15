<template>
  <div class="menu" fixed z-3 w50px right-10 bottom-50>
    <ul>
      <li
        list-none
        flex
        justify-center
        items-center
        w35
        h35
        cursor-pointer
        hover:c-blue
        c-white
        @click="vipClick"
      >
        <div i-icon-park-outline-crown-three></div>
      </li>
      <li
        class="wx"
        relative
        list-none
        flex
        justify-center
        items-center
        w35
        h35
        cursor-pointer
        hover:c-blue
        c-white
      >
        <div i-icon-park-outline-wechat></div>
      </li>
      <li
        class="qq"
        relative
        list-none
        flex
        justify-center
        items-center
        w35
        h35
        cursor-pointer
        hover:c-blue
        c-white
      >
        <div i-icon-park-outline-tencent-qq></div>
      </li>
      <li
        list-none
        flex
        justify-center
        items-center
        w35
        h35
        cursor-pointer
        hover:c-blue
        c-white
        @click="topClick"
      >
        <div i-material-symbols-upgrade-rounded></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const vipClick = () => {
  router.replace('/serve');
};

const topClick = () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
}
li {
  margin: 0;
  padding: 0;
  padding: 5px 0;
  width: 100%;
}
ul li div {
  width: 20px;
  height: 25px;
}

.wx:hover::after {
  display: block;
}

.qq:hover::after {
  display: block;
}

.wx::after {
  display: none;
  position: absolute;
  top: -25px;
  left: -110px;
  width: 100px;
  height: 100px;
  content: '';
  background: url(../assets/imgs/WX.jpg);
  background-size: cover;
}

.qq::after {
  display: none;
  position: absolute;
  top: -25px;
  left: -110px;
  width: 100px;
  height: 100px;
  content: '';
  background: url(../assets/imgs/QQ.png);
  background-size: cover;
}
</style>
