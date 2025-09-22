import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';
import { startConversation, talk } from '../api/chat';

const AUTHOR = Object.freeze({
  USER: 'user',
  ASSISTANT: 'assistant'
});

function formatContent(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.*?)\*/g, '<i>$1</i>')
    .replace(/\n/g, '<br>');
}

function createMessage(author, content) {
  return {
    id: uuid(),
    date: new Date().toISOString(),
    author,
    content: formatContent(content)
  };
}

export const useChatStore = defineStore('chatStore', {
  state: () => ({
    userMessage: '',
    loading: false,
    open: false,
    threadId: null,
    messages: []
  }),

  actions: {
    async startConversation() {
      const userMessage = this.userMessage.trim();
      if (!userMessage) return;

      this.loading = true;
      this.messages.push(createMessage(AUTHOR.USER, userMessage));
      this.clearUserMessage();

      try {
        const response = await startConversation({
          message: userMessage
        });

        this.threadId = response.threadId;
        this.messages.push(createMessage(AUTHOR.ASSISTANT, response.response));
      } finally {
        this.loading = false;
      }
    },

    async talk() {
      const userMessage = this.userMessage.trim();
      if (!userMessage) return;

      this.loading = true;
      this.messages.push(createMessage(AUTHOR.USER, userMessage));
      this.clearUserMessage();

      try {
        const result = await talk({
          threadId: this.threadId,
          message: userMessage
        });

        this.messages.push(createMessage(AUTHOR.ASSISTANT, result.response));
      } finally {
        this.loading = false;
      }
    },

    sendMessage() {
      if (!this.userMessage.trim()) return;

      if (this.threadId) {
        this.talk();
        return;
      }

      this.startConversation();
    },

    clearUserMessage() {
      this.userMessage = '';
    },

    async createGreetingMessage() {
      this.loading = true;

      await new Promise(resolve => setTimeout(resolve, 1000));

      this.messages.push(
        createMessage(AUTHOR.ASSISTANT, 'Olá! Sou a Viv.ia, tudo bem?!')
      );

      this.loading = false;
    },

    async toggleOpen() {
      this.open = !this.open;

      if (this.messages.length === 0) {
        this.createGreetingMessage();
      }
    }
  }
});
