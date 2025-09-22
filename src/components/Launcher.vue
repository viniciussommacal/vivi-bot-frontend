<template>
  <div class="flex justify-end">
    <button
      :class="[
        'w-14 h-14 rounded-full bg-blue-400 flex items-center ',
        'justify-center shadow-lg cursor-pointer hover:bg-blue-500 transition-all ',
        'hover:scale-[1.1]'
      ]"
      @click="chatStore.toggleOpen"
    >
      <component
        :is="chatStore.open ? ChevronDown : MessageCircle"
        class="w-6 h-6 text-white"
      />
    </button>
  </div>
</template>
<script setup>
import { useChatStore } from '../stores/chatStore';
import { ChevronDown, MessageCircle } from 'lucide-vue-next';

const chatStore = useChatStore();
</script>
