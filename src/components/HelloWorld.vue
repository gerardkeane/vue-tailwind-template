<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

const addToCount = () => {
  count.value++;
};
</script>

<template>
  <h1 class="text-3xl font-bold text-center">{{ msg }}</h1>

  <div class="text-center mt-10">
    <v-icon class="fa-vue-icon" name="fa-vuejs" scale="4" />

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p class="mt-5">
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
      |
      <a href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS Docs</a>
      |
      <a href="https://oh-vue-icons.netlify.app/docs" target="_blank">Oh Vue Icons Docs</a>
    </p>

    <button
      type="button"
      @click="addToCount"
      class="mt-5 mb-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      count is: {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
