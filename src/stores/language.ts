import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Language = 'en' | 'zh' | 'ja' | 'vi' | 'ms' | 'fr' | 'ar'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref<Language>('en')
  
  const setLanguage = (language: Language) => {
    currentLanguage.value = language
    // Update HTML direction attribute for RTL languages
    const isRTL = language === 'ar'
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
  }
  
  const isRTL = computed(() => currentLanguage.value === 'ar')
  
  return {
    currentLanguage,
    setLanguage,
    isRTL
  }
})
