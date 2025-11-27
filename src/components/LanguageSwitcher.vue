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
    
    <div class="language-dropdown" v-if="isOpen" ref="dropdownRef">
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useLanguageStore } from '@/stores/language'
import translations from '@/locales/translations'
import type { Language } from '@/stores/language'

const languageStore = useLanguageStore()
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const languages: Language[] = ['en', 'zh', 'ja', 'vi', 'ms', 'fr', 'id', 'ar']

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    // Check scroll position after DOM update
    nextTick(() => {
      checkScrollPosition()
      // Add scroll event listener
      if (dropdownRef.value) {
        dropdownRef.value.addEventListener('scroll', handleScroll)
      }
    })
  } else {
    // Remove scroll event listener when dropdown closes
    if (dropdownRef.value) {
      dropdownRef.value.removeEventListener('scroll', handleScroll)
    }
  }
}

const changeLanguage = (lang: Language) => {
  languageStore.setLanguage(lang)
  isOpen.value = false
}

const checkScrollPosition = () => {
  if (!dropdownRef.value) return
  
  const element = dropdownRef.value
  const scrollTop = element.scrollTop
  const scrollHeight = element.scrollHeight
  const clientHeight = element.clientHeight
  
  // Check if content is scrollable
  const isScrollable = scrollHeight > clientHeight
  
  if (isScrollable) {
    // Show/hide top gradient based on scroll position
    if (scrollTop > 5) {
      element.setAttribute('scrollable-top', '')
    } else {
      element.removeAttribute('scrollable-top')
    }
    
    // Show/hide bottom gradient based on scroll position
    if (scrollTop < scrollHeight - clientHeight - 5) {
      element.setAttribute('scrollable-bottom', '')
    } else {
      element.removeAttribute('scrollable-bottom')
    }
  } else {
    // Remove scroll indicators if content is not scrollable
    element.removeAttribute('scrollable-top')
    element.removeAttribute('scrollable-bottom')
  }
}

const handleScroll = () => {
  checkScrollPosition()
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
  // Clean up scroll event listener
  if (dropdownRef.value) {
    dropdownRef.value.removeEventListener('scroll', handleScroll)
  }
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
  max-height: calc(100vh - 120px); /* Prevent dropdown from going off-screen */
  overflow-y: auto; /* Enable scrolling when needed */
  overscroll-behavior: contain; /* Prevent parent scrolling */
  scrollbar-width: thin; /* Firefox scrollbar styling */
  scrollbar-color: var(--color-gray-medium) transparent;
  
  /* Smooth animation for dropdown */
  animation: dropdownSlide 0.2s ease-out;
  transform-origin: top;
}

@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

/* Custom scrollbar for Webkit browsers */
.language-dropdown::-webkit-scrollbar {
  width: 4px;
}

.language-dropdown::-webkit-scrollbar-track {
  background: transparent;
}

.language-dropdown::-webkit-scrollbar-thumb {
  background: var(--color-gray-medium);
  border-radius: 2px;
}

.language-dropdown::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-dark);
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

/* Enhanced mobile styles */
@media (max-width: 768px) {
  .language-dropdown {
    right: auto;
    left: 0;
    max-width: calc(100vw - 2rem);
    overflow-x: hidden;
    /* Ensure dropdown fits within viewport */
    max-height: min(calc(100vh - 120px), 400px); /* Cap at 400px or viewport height */
    /* Add visual indicators for scrollable content */
    position: relative;
  }
  
  /* Visual gradient indicators for scrollable content */
  .language-dropdown::before,
  .language-dropdown::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 20px;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.3s ease;
  }
  
  .language-dropdown::before {
    top: 0;
    background: linear-gradient(to bottom, var(--color-secondary) 0%, transparent 100%);
    opacity: 0;
  }
  
  .language-dropdown::after {
    bottom: 0;
    background: linear-gradient(to top, var(--color-secondary) 0%, transparent 100%);
    opacity: 0;
  }
  
  /* Show gradient indicators when content is scrollable */
  .language-dropdown[scrollable-top]::before {
    opacity: 1;
  }
  
  .language-dropdown[scrollable-bottom]::after {
    opacity: 1;
  }
  
  .language-switcher {
    max-width: 100%;
  }
  
  .language-toggle {
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  
  /* Ensure proper spacing for mobile */
  .language-option {
    padding: 1rem; /* Larger touch targets for mobile */
    font-size: 1rem; /* Better readability on small screens */
  }
  
  /* Subtle shadow for depth */
  .language-dropdown {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
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
  
  /* RTL gradient indicators */
  [dir="rtl"] .language-dropdown::before,
  [dir="rtl"] .language-dropdown::after {
    left: 0;
    right: 0;
  }
}

/* Ultra-small mobile devices */
@media (max-width: 320px) {
  .language-dropdown {
    max-height: calc(100vh - 100px); /* Even more conservative for very small screens */
    min-width: 100px; /* Ensure minimum usability */
  }
  
  .language-option {
    padding: 0.875rem 0.75rem; /* Slightly smaller but still touch-friendly */
    font-size: 0.95rem;
  }
}

/* Large mobile devices and tablets */
@media (min-width: 769px) and (max-width: 1024px) {
  .language-dropdown {
    max-height: 350px; /* Reasonable height for tablets */
  }
}
</style>
