<template>
  <div id="app">
    <Navigation />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import { useLanguageStore } from '@/stores/language'
import { onMounted } from 'vue'

const languageStore = useLanguageStore()

onMounted(() => {
  // Initialize language direction on app load
  const isRTL = languageStore.currentLanguage === 'ar'
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
  document.documentElement.setAttribute('lang', languageStore.currentLanguage)
})
</script>

<style>
@import '@/assets/main.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

main {
  flex: 1;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Mobile overflow protection */
@media (max-width: 768px) {
  #app, main {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
}

/* RTL Support */
[dir="rtl"] #app {
  direction: rtl;
}

[dir="rtl"] main {
  direction: rtl;
}
</style>