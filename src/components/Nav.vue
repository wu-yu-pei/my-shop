<template>
  <div shadow>
    <div class="nav" relative md:w80vw sm:w100vw ma flex justify-between p10 h70 box-border>
      <div w200 lh-48 shrink-0 overflow-hidden>
        <img
          w200
          h48
          src="https://youkewang.top/wp-content/uploads/2021/08/19131418534.png"
          alt=""
        />
      </div>
      <div w150 flex justify-between items-center>
        <div i-icon-park-outline-vip m5 cursor-pointer :class="{ red: isVip }"></div>
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
          <img
            w40
            h40
            rd-40
            cursor-pointer
            mx-auto
            my-0
            block
            src="../assets/imgs/user.png"
            alt=""
          />
        </div>
      </div>
      <div
        flex
        absolute
        md:w80vw
        w100vw
        ma
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
          grow-9
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
          grow
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
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isShowSearch = ref(false);
const searchPanel = ref();
const inputRef = ref();
const isVip = ref(true);

const searchIconClick = () => {
  isShowSearch.value = !isShowSearch.value;
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
