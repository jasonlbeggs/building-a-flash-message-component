<template>
  <form class="max-w-md" @submit.prevent="sendMessage">
    <label for="message-text" class="block mb-1 text-gray-700 text-sm">Message Text</label>
    <input id="message-text" v-model="message.text" type="text" class="input mb-3" />
    <label for="message-type" class="block mb-1 text-gray-700 text-sm">Message Type</label>
    <select id="message-type" v-model="message.type" class="input mb-3">
      <option value="success">
        Success
      </option>
      <option value="error">
        Error
      </option>
    </select>
    <button class="btn btn-blue">
      Send Message
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: {
        text: 'Hey! Something awesome happened.',
        type: 'success'
      }
    };
  },
  methods: {
    sendMessage() {
      Bus.$emit('flash-message', this.message);

      this.message = {
        text: null,
        type: 'success'
      };
    }
  }
};
</script>
