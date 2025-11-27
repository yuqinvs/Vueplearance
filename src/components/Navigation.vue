<template>
  <nav class="nav-minimal" :class="{ scrolled: isScrolled }">
    <div class="container-minimal">
      <div class="nav-container">
        <RouterLink to="/" class="nav-brand">
          優雅なひだ
        </RouterLink>
        
        <div class="nav-menu">
          <RouterLink to="/" class="nav-link">{{ t.home }}</RouterLink>
          <RouterLink to="/brand-story" class="nav-link">{{ t.brandStory }}</RouterLink>
          <RouterLink to="/products" class="nav-link">{{ t.products }}</RouterLink>
          <RouterLink to="/abaya" class="nav-link">{{ t.abaya }}</RouterLink>
          <RouterLink to="/store" class="nav-link">{{ t.store }}</RouterLink>
          <RouterLink to="/contacts" class="nav-link">{{ t.contact }}</RouterLink>
          <LanguageSwitcher />
        </div>
        
        <button class="nav-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div class="nav-mobile" :class="{ active: isMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="closeMenu">{{ t.home }}</RouterLink>
        <RouterLink to="/brand-story" class="nav-link" @click="closeMenu">{{ t.brandStory }}</RouterLink>
        <RouterLink to="/products" class="nav-link" @click="closeMenu">{{ t.products }}</RouterLink>
        <RouterLink to="/abaya" class="nav-link" @click="closeMenu">{{ t.abaya }}</RouterLink>
        <RouterLink to="/store" class="nav-link" @click="closeMenu">{{ t.store }}</RouterLink>
        <RouterLink to="/contacts" class="nav-link" @click="closeMenu">{{ t.contact }}</RouterLink>
        <div class="nav-mobile-language">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useLanguageStore } from '@/stores/language'
import translations from '@/locales/translations'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLanguage].nav)

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;
  box-sizing: border-box;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 3px;
}

.nav-toggle span {
  width: 25px;
  height: 2px;
  background: var(--color-primary);
  transition: var(--transition-smooth);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-gray-medium);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-mobile {
    display: none;
  }
  
  .nav-mobile.active {
    display: flex;
  }
  
  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  .nav-mobile-language {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-gray-medium);
  }
}

/* RTL Support */
[dir="rtl"] .nav-menu {
  flex-direction: row-reverse;
}

[dir="rtl"] .nav-mobile {
  text-align: right;
}

[dir="rtl"] .nav-container {
  flex-direction: row-reverse;
}

/* RTL Mobile Support */
@media (max-width: 768px) {
  [dir="rtl"] .nav-container {
    flex-direction: row;
  }
  
  [dir="rtl"] .nav-brand {
    margin-right: 0;
    margin-left: auto;
  }
  
  [dir="rtl"] .nav-toggle {
    margin-left: 0;
    margin-right: auto;
  }
  
  [dir="rtl"] .nav-mobile {
    text-align: right;
    padding-right: 0;
    padding-left: 1rem;
  }
  
  [dir="rtl"] .nav-mobile .nav-link {
    text-align: right;
    padding-right: 0;
    padding-left: 1rem;
  }
  
  [dir="rtl"] .nav-mobile-language {
    text-align: right;
  }
  
  /* RTL Hamburger Menu Animation */
  [dir="rtl"] .nav-toggle.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 5px);
  }
  
  [dir="rtl"] .nav-toggle.active span:nth-child(3) {
    transform: rotate(45deg) translate(-7px, -6px);
  }
}
</style>