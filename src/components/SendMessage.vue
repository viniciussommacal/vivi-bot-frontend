<template>
  <div
    class="flex items-center w-full max-w-md border-2 border-blue-400 rounded-full pl-4 pr-2 py-2"
  >
    <input
      v-model="chatStore.userMessage"
      type="text"
      placeholder="Digite aqui sua mensagem"
      class="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      @keyup.enter="!disabled && chatStore.sendMessage()"
    />
    <button
      :disabled="disabled"
      :class="[
        'flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-white cursor-pointer ',
        'hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-400 ',
        'disabled:cursor-not-allowed disabled:hover:bg-gray-200'
      ]"
      @click="chatStore.sendMessage"
    >
      <SendHorizontal :size="18" />
    </button>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useChatStore } from '../stores/chatStore';
import { SendHorizontal } from 'lucide-vue-next';

const chatStore = useChatStore();
const disabled = computed(() => !chatStore.userMessage.trim());
</script>
