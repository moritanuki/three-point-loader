<template>
  <div class="w-screen h-screen bg-gray">
    <div class="loader relative inset-1/2 text-white"></div>
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
  animation-delay: 0s;
}

@keyframes loader {

  0%,
  80%,
  100% {
    box-shadow: 0 12px 0 -7px;
  }

  40% {
    box-shadow: 0 12px 0 0;
  }
}
</style>
