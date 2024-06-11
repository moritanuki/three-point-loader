<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Loading from './components/Loading.vue'

const isLoading = ref(true)

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

onMounted(async () => {
  await sleep(5000)
  isLoading.value = false
})
</script>
<template>
  <div class="w-screen h-screen bg-gray">
    <Loading v-if="isLoading" />
  </div>
</template>
