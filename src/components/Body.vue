<template>
  <div
    class="bg-white shadow-md rounded-br-lg rounded-bl-lg mb-5 h-[500px] flex flex-col"
  >
    <div class="flex-grow space-y-4 overflow-y-auto p-4">
      <Message
        v-for="message in chatStore.messages"
        :key="message.id"
        :message="message"
      />
      <LoadingMessage v-if="chatStore.loading" />
    </div>
    <div class="p-2">
      <SendMessage />
    </div>
  </div>
</template>
<script setup>
import { useChatStore } from '../stores/chatStore';
import Message from './Message.vue';
import SendMessage from './SendMessage.vue';
import LoadingMessage from './LoadingMessage.vue';

const chatStore = useChatStore();
</script>
