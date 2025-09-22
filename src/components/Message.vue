<template>
  <div class="flex flex-col space-y-1 max-w-lg">
    <div
      :class="[
        'px-4 py-3 rounded-lg text-sm max-w-fit flex items-center',
        sent
          ? 'bg-gray-200 text-gray-800 self-start rounded-bl-none'
          : 'bg-blue-500 text-white self-end rounded-br-none'
      ]"
    >
      <div v-html="message.content" />

      <button
        v-if="sent"
        class="rounded-full flex items-center p-1 justify-center cursor-pointer hover:bg-gray-300 transition-colors ml-2"
        @click="copyMessage"
      >
        <Copy :size="12" class="text-gray-800" />
      </button>
    </div>

    <span
      class="text-xs text-gray-500"
      :class="sent ? 'text-left self-start' : 'text-right self-end'"
    >
      Enviado por {{ name }} às {{ stamp }}
    </span>
  </div>
</template>
<script setup>
import { Copy } from 'lucide-vue-next';
import { computed } from 'vue';
const props = defineProps({
  message: Object
});

const sent = computed(() => {
  return props.message.author === 'assistant';
});

const name = computed(() => {
  return props.message.author === 'assistant' ? 'Viv.ia' : 'mim';
});

const stamp = computed(() => {
  return new Date(props.message.date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
});

function copyMessage() {
  const text = props.message.content;

  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
}
</script>
