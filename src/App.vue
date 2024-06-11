<script setup>
import { ref } from 'vue'
import Loading from './components/Loading.vue'

const isLoading = ref(true)
</script>
<template>
  <div class="w-screen h-screen bg-gray">
    <Loading v-if="isLoading" />
  </div>
</template>
