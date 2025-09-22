<template>
  <div class="fixed bottom-4 right-4 w-[400px]">
    <transition
      name="chat-slide"
      enter-active-class="transition ease-out duration-300"
      leave-active-class="transition ease-in duration-100"
    >
      <div v-if="chatStore.open" class="overflow-hidden">
        <Header />
        <Body />
      </div>
    </transition>

    <Launcher />
  </div>
</template>
<script setup>
import { useChatStore } from '../stores/chatStore';
import Body from './Body.vue';
import Launcher from './Launcher.vue';
import Header from './Header.vue';

const chatStore = useChatStore();
</script>
<style scoped>
.chat-slide-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.chat-slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.chat-slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.chat-slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
