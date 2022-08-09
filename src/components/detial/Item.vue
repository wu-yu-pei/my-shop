<template>
  <div class="detial-item" md:w80vw mxa rd-10 py-20 px-10 box-border overflow-hidden>
    <h1 font-400>{{ props.info.name }}</h1>
    <div class="tag" h20 flex items-center>
      <div inline-block mr-15 i-material-symbols-thermostat-carbon color-warmGray></div>
      {{ props.info.tag }}
    </div>
    <template v-if="props.info.desc">
      <h2 mt-50 font-800>课程介绍</h2>
      <p lh-30 mb-15>
        {{ props.info.desc }}
      </p>
    </template>
    <template v-for="item in props.info.imgs">
      <img class="img" :src="item" alt="" my20 />
    </template>
    <template v-if="props.info.mulu">
      <pre>
      <code>{{props.info.mulu}}</code>
    </pre>
    </template>
    <h3>对知识的渴望程度决定了前进动力的大小。</h3>
    <h3>别当知识很廉价地摆在你面前，你反而不会珍惜。</h3>
    <h3>时间才不等你。</h3>
    <div class="pay" px-10 py-30 box-border lh-60>
      <template v-if="!props.info.code">
        <div>
          尊敬的用户, 你还不是Vip用户,请联我们系客服给你提供VIP账号,为你提供优质服务---->
          <span cursor-pointer bg-yellow>联系客服</span>
        </div>
      </template>
      <template v-else>
        尊贵的VIP用户: 这是 课程链接
        <a :href="props.info.link" target="_blank" hover:opacity-80>
          <span cursor-pointer mx-15 @click="download" bg-blue inline-block lh-30>点击下载</span>
        </a>
        这是提取码:{{ props.info.code }}
        <span cursor-pointer mx-15 @click="copy" bg-blue hover:opacity-80 inline-block lh-30>点击复制</span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  info: {
    type: Object,
  },
});

const copy = () => {
  copyHandle(props.info.code);
};

function copyHandle(content) {
  let copy = (e) => {
    e.preventDefault();
    e.clipboardData.setData('text/plain', content);
    document.removeEventListener('copy', copy);
  };
  document.addEventListener('copy', copy);
  document.execCommand('Copy');
}
</script>

<style scoped>
.detial-item {
  background-color: #f9f9f9;
}
h3 {
  font-size: 18px;
  border-left: 4px solid blue;
  padding: 12px;
  line-height: 20px;
  background: #ffffff;
  font-weight: normal;
}
pre {
  margin: 20px 0;
  font: 12px/20px 'courier new';
  background: #4a4a4a;
  padding: 10px 20px;
  color: #f8f8d4;
  border: none;
}

.img {
  width: 100%;
}
.pay {
  border: 1px dashed blue;
}
.pay a {
  text-decoration: none;
}
.pay span {
  padding: 10px;
  border-radius: 2px;
  color: #ffffff;
}
</style>
