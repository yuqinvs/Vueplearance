<template>
  <div class="home-minimal">
    <RunwayAnimation v-if="showAnimation" @finished="onAnimationFinished" />
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          Plearance
        </h1>
        <p class="text-body space-y-md">
          {{ t.hero.subtitle }}<br>
          <em>{{ t.home.heroSubtitle }}</em>
        </p>
      </div>
      <div class="hero-image parallax-element">
        <div class="hero-bg"></div>
      </div>
    </section>

    <!-- Designer Introduction -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial" v-if="!languageStore.isRTL">
          <div class="editorial-text slide-in-left">
            <div class="text-caption">{{ t.home.creativeExcellence }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.home.yuiNakahara }}
            </h2>
            <div class="space-y-md">
              <blockquote class="text-body text-serif">
                "{{ t.home.pleatsQuote }}"
              </blockquote>
              <p class="text-body">
                {{ t.home.yuiBio }}
              </p>
              <p class="text-body">
                {{ t.home.yuiPhilosophy }}
              </p>
              <div class="space-y-sm">
                <RouterLink to="/brand-story" class="btn-minimal">
                  {{ t.home.brandStory }}
                </RouterLink>
                <RouterLink to="/contacts" class="btn-minimal btn-minimal-inverted">
                  {{ t.home.contactUs }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="editorial-image slide-in-right">
            <img src="@/assets/img/designer.webp" alt="Designer Yui Nakahara" class="editorial-image-content" />
          </div>
        </div>
        <div class="grid-editorial" v-else>
          <div class="editorial-image slide-in-left">
            <img src="@/assets/img/designer.webp" alt="Designer Yui Nakahara" class="editorial-image-content" />
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">{{ t.home.creativeExcellence }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.home.yuiNakahara }}
            </h2>
            <div class="space-y-md">
              <blockquote class="text-body text-serif">
                "{{ t.home.pleatsQuote }}"
              </blockquote>
              <p class="text-body">
                {{ t.home.yuiBio }}
              </p>
              <p class="text-body">
                {{ t.home.yuiPhilosophy }}
              </p>
              <div class="space-y-sm">
                <RouterLink to="/brand-story" class="btn-minimal">
                  {{ t.home.brandStory }}
                </RouterLink>
                <RouterLink to="/contacts" class="btn-minimal btn-minimal-inverted">
                  {{ t.home.contactUs }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Manufacturing Excellence -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial">
          <div class="editorial-image slide-in-left">
            <img src="@/assets/img/factory.png" alt="Plearance Manufacturing Facility" class="editorial-image-content" />
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">{{ t.home.manufacturingExcellence }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.home.exceptionalPleatedArtistry }}
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                {{ t.home.manufacturingDesc1 }}
              </p>
              <p class="text-body">
                {{ t.home.manufacturingDesc2 }}
              </p>
              <p class="text-body">
                {{ t.home.manufacturingDesc3 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Philosophy -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="brand-philosophy fade-in">
          <div class="text-caption">{{ t.home.philosophy }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.home.structuredArtistry }}
          </h2>
          <p class="text-body" style="max-width: 800px; margin: 0 auto;">
            {{ t.home.brandPhilosophy }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguageStore } from '@/stores/language'
import translations from '@/locales/translations'
import RunwayAnimation from '@/components/RunwayAnimation.vue'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLanguage])
const showAnimation = ref(false)

const onAnimationFinished = () => {
  showAnimation.value = false
}

// Scroll animation handler
const handleScroll = () => {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible')
    }
  })
}

// Parallax effect for hero
const handleParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element')
  
  parallaxElements.forEach(element => {
    const htmlElement = element as HTMLElement
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    htmlElement.style.transform = `translateY(${rate}px)`
  })
}

onMounted(() => {
  // Always show animation
  showAnimation.value = true
  
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', handleParallax)
  
  // Trigger initial animations
  setTimeout(() => {
    handleScroll()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', handleParallax)
})
</script>

<style scoped>
.home-minimal {
  min-height: 100vh;
}

.hero-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  position: relative;
  overflow: hidden;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,30 50,50 T100,50" stroke="%23ccc" stroke-width="0.5" fill="none" opacity="0.3"/></svg>');
  background-size: 100px 100px;
  animation: pleatWave 8s ease-in-out infinite;
}

.hero-image-bg {
  width: 100%;
  height: 600px;
  background: linear-gradient(45deg, #000 0%, #333 50%, #666 100%);
  position: relative;
  overflow: hidden;
}

.hero-image-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,30 50,50 T100,50" stroke="%23fff" stroke-width="1" fill="none" opacity="0.2"/></svg>');
  background-size: 150px 150px;
  animation: pleatWave 6s ease-in-out infinite reverse;
}

.factory-bg {
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #8B9DC3 0%, #A8B8D8 50%, #C5D1ED 100%);
  position: relative;
  overflow: hidden;
}

.factory-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" stroke="%23fff" stroke-width="0.5" fill="none" opacity="0.3"/></svg>');
  background-size: 200px 200px;
  animation: pleatWave 10s ease-in-out infinite;
}

.image-placeholder {
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition-smooth);
}

.image-placeholder:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.editorial-image-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition-smooth);
}

.editorial-image-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.brand-philosophy {
  text-align: center;
  padding: var(--space-xxl) 0;
}

blockquote {
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-accent);
  border-left: 3px solid var(--color-accent);
  padding-left: var(--space-md);
  margin: var(--space-md) 0;
}

@media (max-width: 768px) {
  .hero-minimal {
    min-height: 80vh;
  }
  
  .hero-image-bg,
  .factory-bg {
    height: 300px;
  }
  
  .editorial-image-content {
    height: 300px;
  }
  
  .brand-philosophy {
    padding: var(--space-lg) 0;
  }
}
</style>
