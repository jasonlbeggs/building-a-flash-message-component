<template>
  <div class="fixed top-0 right-0 m-6">
    <Transition name="slide-fade">
      <div
        v-if="message"
        :class="{
          'bg-red-200 text-red-900': message.type === 'error',
          'bg-green-200 text-green-900': message.type === 'success'
        }"
        class="rounded-lg shadow-md p-6 pr-10"
        style="min-width: 240px"
      >
        <button
          class="opacity-75 cursor-pointer absolute top-0 right-0 py-2 px-3 hover:opacity-100"
        >
          &times;
        </button>
        <div class="flex items-center">
          {{ message.text }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null
    };
  },
  mounted() {
    let timer;
    Bus.$on('flash-message', message => {
      clearTimeout(timer);

      this.message = message;

      timer = setTimeout(() => {
        this.message = null;
      }, 5000);
    });
  }
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(400px);
  opacity: 0;
}
</style>
