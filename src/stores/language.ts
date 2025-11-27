import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Language = 'en' | 'zh' | 'ja' | 'vi' | 'ms' | 'fr' | 'id' | 'ar'

export const useLanguageStore = defineStore('language', () => {
  // Load language from localStorage or default to 'en'
  const savedLanguage = localStorage.getItem('plearance-language') as Language | null
  const currentLanguage = ref<Language>(savedLanguage || 'en')
  
  // Initialize HTML attributes on store creation
  const initializeHTMLAttributes = (language: Language) => {
    const isRTL = language === 'ar'
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
  }
  
  // Initialize with saved language
  initializeHTMLAttributes(currentLanguage.value)
  
  const setLanguage = (language: Language) => {
    currentLanguage.value = language
    // Save to localStorage for persistence
    localStorage.setItem('plearance-language', language)
    // Update HTML direction attribute for RTL languages
    initializeHTMLAttributes(language)
  }
  
  const isRTL = computed(() => currentLanguage.value === 'ar')
  
  return {
    currentLanguage,
    setLanguage,
    isRTL
  }
})
