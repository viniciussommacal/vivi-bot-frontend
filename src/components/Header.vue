<template>
  <header
    class="flex items-center justify-between bg-blue-400 text-white px-4 py-2 rounded-t-lg"
  >
    <div class="flex items-center space-x-3">
      <div class="relative">
        <img
          class="w-12 h-12 rounded-full object-cover"
          alt="Avatar"
          src="../assets/images/avatar.png"
        />
        <span
          class="absolute bottom-0 right-0 block w-3 h-3 bg-green-400 rounded-full border-2 border-white"
        ></span>
      </div>
      <div class="flex flex-col">
        <span class="font-semibold">Viv.ia</span>
        <span class="text-xs text-white/90">Online agora</span>
      </div>
    </div>
    <button
      class="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition"
      @click="chatStore.toggleOpen"
    >
      <CircleX :size="22" />
    </button>
  </header>
</template>
<script setup>
import { CircleX } from 'lucide-vue-next';
import { useChatStore } from '../stores/chatStore';

const chatStore = useChatStore();
</script>
