<template>
    <q-btn
      :icon="isDark ? 'light_mode' : 'dark_mode'"
      round
      flat
      @click="toggleDarkMode"
      :class="isDark ? 'text-white' : 'text-dark'"
    />
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useQuasar } from 'quasar'
  
  const $q = useQuasar()
  const isDark = ref($q.dark.isActive)
  
  const toggleDarkMode = () => {
    $q.dark.toggle()
    isDark.value = $q.dark.isActive
  }
  
  watch(isDark, (newValue) => {
    document.body.classList.toggle('body--dark', newValue)
  })
  </script>