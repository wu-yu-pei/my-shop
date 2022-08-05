<template>
  <div class="content" md:w80vw mxa px10 my20>
    <div grid gap30 justify-between>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
      <div w210 h160 md-w220 md-h200 border>A</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.content > div {
  grid-template-columns: repeat(auto-fill, 210px);
}
@media (min-width: 768px) {
  .content > div {
    grid-template-columns: repeat(auto-fill, 220px);
  }
}

@media (min-width: 640px) {
  .sm\:w100vw {
    width: 100%;
  }
}
</style>
