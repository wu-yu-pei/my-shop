<template>
  <div class="self" flex justify-center items-center flex-wrap pb-100>
    <div w250 text-center c-white>
      <h2>关于 VIP</h2>
      <div my-30 bg-white c-black pb-20 font-16 transition hover:translate-y--10 rd-5 overflow-hidden>
        <div class="title" bg-blue c-white p30>终身VIP</div>
        <div class="rmb" my20>
          <del mr-10><span>199</span></del
          ><span font-800>69</span> RMB
        </div>
        <div my-20>
          <div px-40 my-15>新资源免费下载</div>
          <div px-40 my-15>享受全站资源免费下载</div>
          <div px-40 my-15>赠送1个月科学上网服务,高速访问Github/Google/Youtube</div>
        </div>
        <div
          w100
          h25
          mx-a
          my-10
          bg-blue
          rd-10
          lh-25
          text-center
          c-white
          px20
          py10
          cursor-pointer
          @click="goServe"
        >
          成为会员
        </div>
      </div>
    </div>
    <div class="advantage">
      <h2 text-center w250 ma c-white>我们的优势</h2>
      <div flex mt-20 px100 flex-wrap>
        <div flex-grow flex-shrink-0 w300 h80 flex justify-center gap-x-20 items-center>
          <div w50 h50 flex justify-center items-center rd-50 bg-blue>
            <div c-white i-material-symbols-arrow-upward></div>
          </div>
          <div flex items-center flex-wrap gap-y-10 c-white>
            <h3>更新及时</h3>
            <span>专人上传，每天更新</span>
          </div>
        </div>
        <div flex-grow flex-shrink-0 w300 h80 flex justify-center gap-x-20 items-center>
          <div w50 h50 flex justify-center items-center rd-50 bg-blue>
            <div c-white i-material-symbols-shopping-cart-outline-sharp></div>
          </div>
          <div flex items-center flex-wrap gap-y-10 c-white>
            <h3>精选资源</h3>
            <span>各类资源，满足需求</span>
          </div>
        </div>
        <div flex-grow flex-shrink-0 w300 h80 flex justify-center gap-x-20 items-center>
          <div w50 h50 flex justify-center items-center rd-50 bg-blue>
            <div c-white i-icon-park-outline-lightning></div>
          </div>
          <div flex items-center flex-wrap gap-y-10 c-white>
            <h3>高速下载</h3>
            <span>专属网盘，极速体验</span>
          </div>
        </div>
        <div flex-grow flex-shrink-0 w300 h80 flex justify-center gap-x-20 items-center>
          <div w50 h50 flex justify-center items-center rd-50 bg-blue>
            <div c-white i-icon-park-outline-time></div>
          </div>
          <div flex items-center flex-wrap gap-y-10 c-white>
            <h3>永久服务</h3>
            <span>专人客服，随时联系</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goServe = () => {
  router.push({ name: 'serve' });
};
</script>

<style scoped>
.self {
  background-image: url(../assets/imgs/self_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.rmb del {
  color: red;
}
.rmb del span {
  color: red;
  font-size: 30px;
}
.rmb span {
  font-size: 50px;
}

.title {
  font-size: 30px;
}
.self div h2 {
  padding: 10px 0;
  border-bottom: 1px solid #fff;
}

span {
  font-size: 13px;
}

.advantage {
  width: 100vw;
}
.advantage h2 {
  padding: 10px 0;
  border-bottom: 1px solid #fff;
}

.advantage h3 {
  width: 100%;
  margin: 0;
}
</style>
