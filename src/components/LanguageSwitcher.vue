<template>
  <div class="language-switcher">
    <button 
      class="language-toggle"
      @click="toggleDropdown"
      :class="{ active: isOpen }"
    >
      {{ languageStore.currentLanguage.toUpperCase() }}
      <span class="dropdown-arrow">▼</span>
    </button>
    
    <div class="language-dropdown" v-if="isOpen">
      <button
        v-for="lang in languages"
        :key="lang"
        class="language-option"
        :class="{ active: languageStore.currentLanguage === lang }"
        @click="changeLanguage(lang)"
      >
        {{ translations[lang].language[lang] }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguageStore } from '@/stores/language'
import translations from '@/locales/translations'
import type { Language } from '@/stores/language'

const languageStore = useLanguageStore()
const isOpen = ref(false)

const languages: Language[] = ['en', 'zh', 'ja', 'vi', 'ms', 'fr', 'ar']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (lang: Language) => {
  languageStore.setLanguage(lang)
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.language-switcher')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid var(--color-gray-medium);
  color: var(--color-primary);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-smooth);
  border-radius: 4px;
}

.language-toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.language-toggle.active {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.dropdown-arrow {
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.language-toggle.active .dropdown-arrow {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--color-secondary);
  border: 1px solid var(--color-gray-medium);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 120px;
  margin-top: 0.5rem;
}

.language-option {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: var(--color-primary);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: var(--transition-smooth);
}

/* RTL Support */
[dir="rtl"] .language-option {
  text-align: right;
}

.language-option:hover {
  background: var(--color-gray-light);
  color: var(--color-accent);
}

.language-option.active {
  color: var(--color-accent);
  font-weight: 600;
}

.language-option:not(:last-child) {
  border-bottom: 1px solid var(--color-gray-medium);
}

@media (max-width: 768px) {
  .language-dropdown {
    right: auto;
    left: 0;
    max-width: calc(100vw - 2rem);
    overflow-x: hidden;
  }
  
  .language-switcher {
    max-width: 100%;
  }
  
  .language-toggle {
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
}

/* RTL Support */
[dir="rtl"] .language-dropdown {
  right: auto;
  left: 0;
}

[dir="rtl"] .language-option {
  text-align: right;
}

/* RTL Mobile Support */
@media (max-width: 768px) {
  [dir="rtl"] .language-dropdown {
    right: 0;
    left: auto;
    max-width: calc(100vw - 2rem);
    overflow-x: hidden;
  }
  
  [dir="rtl"] .language-toggle {
    flex-direction: row-reverse;
    text-align: right;
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  
  [dir="rtl"] .dropdown-arrow {
    margin-right: auto;
    margin-left: 0;
  }
}
</style>