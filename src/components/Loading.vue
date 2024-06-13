<template>
  <div class="bg-white-blur w-screen h-screen">
    <div class="loader relative inset-1/2 -translate-y-[12px] text-white-default"></div>
  </div>
</template>
<style scoped>
.loader,
.loader:before,
.loader:after {
  position: absolute;
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 100%;
  animation: loader 1.8s infinite ease-in-out;
}

.loader:before {
  left: -14px;
  animation-delay: -0.32s;
}

.loader {
  animation-delay: -0.16s;
}

.loader:after {
  left: 14px;
}

@keyframes loader {

  0%,
  80%,
  100% {
    /* x軸 y軸(元々の要素より12px下) ぼかし 影サイズの拡張(マイナスにすればするほど影サイズが小さくなる) */
    box-shadow: 0 12px 0 -7px;
  }

  40% {
    /* x軸 y軸(元々の要素より12px下) ぼかし 影サイズの拡張 */
    box-shadow: 0 12px 0 0;
  }
}
</style>
