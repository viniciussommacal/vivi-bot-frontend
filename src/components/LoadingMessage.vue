<template>
  <div
    class="flex items-center space-x-1 px-4 py-3 bg-gray-200 rounded-lg rounded-bl-none max-w-fit min-h-[44px]"
  >
    <span class="w-2 h-2 bg-gray-500 rounded-full animate-bounceDelay"></span>
    <span
      class="w-2 h-2 bg-gray-500 rounded-full animate-bounceDelay200"
    ></span>
    <span
      class="w-2 h-2 bg-gray-500 rounded-full animate-bounceDelay400"
    ></span>
  </div>
</template>
<style>
@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.animate-bounceDelay {
  animation: bounce 1.4s infinite ease-in-out both;
}
.animate-bounceDelay200 {
  animation: bounce 1.4s infinite ease-in-out both;
  animation-delay: 0.2s;
}
.animate-bounceDelay400 {
  animation: bounce 1.4s infinite ease-in-out both;
  animation-delay: 0.4s;
}
</style>
