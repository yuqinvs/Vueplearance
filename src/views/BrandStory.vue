<template>
  <div class="brand-story-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          {{ t.brandStory.title }}
        </h1>
        <p class="text-body">
          {{ t.brandStory.subtitle }}
        </p>
      </div>
    </section>

    <!-- Brand Etymology -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="brand-etymology fade-in">
          <div class="etymology-grid">
            <div class="etymology-item">
              <h3 class="heading-large text-serif">{{ t.brandStory.pleatsArt }}</h3>
              <p class="text-body">
                {{ t.brandStory.pleatsDesc }}
              </p>
            </div>
            <div class="etymology-item">
              <h3 class="heading-large text-serif">{{ t.brandStory.eleganceArt }}</h3>
              <p class="text-body">
                {{ t.brandStory.eleganceDesc }}
              </p>
            </div>
          </div>
          
          <div class="brand-name-container">
            <h2 class="brand-name">
              <span class="brand-letter">P</span>
              <span class="brand-letter">l</span>
              <span class="brand-letter">e</span>
              <span class="brand-letter">a</span>
              <span class="brand-letter">r</span>
              <span class="brand-letter">a</span>
              <span class="brand-letter">n</span>
              <span class="brand-letter">c</span>
              <span class="brand-letter">e</span>
            </h2>
            <p class="text-body lead">
              {{ t.brandStory.whereStructuredArtistry }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Philosophy -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial" v-if="!languageStore.isRTL">
          <div class="editorial-text slide-in-left">
            <div class="text-caption">{{ t.brandStory.philosophyTitle }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.brandStory.artOfTransformation }}
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                {{ t.brandStory.transformationDesc1 }}
              </p>
              <p class="text-body">
                {{ t.brandStory.transformationDesc2 }}
              </p>
              <p class="text-body">
                {{ t.brandStory.transformationDesc3 }}
              </p>
            </div>
          </div>
          <div class="editorial-image slide-in-right">
            <img src="@/assets/img/Transformation.png" alt="pleats logo" class="philosophy-image" />
          </div>
        </div>
        <div class="grid-editorial" v-else>
          <div class="editorial-image slide-in-left">
            <img src="@/assets/img/Transformation.png" alt="pleats logo" class="philosophy-image" />
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">{{ t.brandStory.philosophyTitle }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.brandStory.artOfTransformation }}
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                {{ t.brandStory.transformationDesc1 }}
              </p>
              <p class="text-body">
                {{ t.brandStory.transformationDesc2 }}
              </p>
              <p class="text-body">
                {{ t.brandStory.transformationDesc3 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Process -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial">
          <div class="editorial-image slide-in-left">
            <img src="@/assets/img/pleats.webp" alt="pleats" class="process-image" />
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">{{ t.brandStory.craftsmanshipTitle }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.brandStory.fromConceptToCreation }}
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                {{ t.brandStory.conceptDesc1 }}
              </p>
              <p class="text-body">
                {{ t.brandStory.conceptDesc2 }}
              </p>
              <p class="text-body">
                {{ t.brandStory.conceptDesc3 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Heritage & Future -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="heritage-content fade-in">
          <div class="text-caption">{{ t.brandStory.heritageAndFuture }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.brandStory.rootedInTradition }}
          </h2>
          <div class="heritage-grid">
            <div class="heritage-item">
              <h3 class="heading-large text-serif">{{ t.brandStory.japaneseHeritage }}</h3>
              <p class="text-body">
                {{ t.brandStory.japaneseHeritageDesc }}
              </p>
            </div>
            <div class="heritage-item">
              <h3 class="heading-large text-serif">{{ t.brandStory.modernInnovation }}</h3>
              <p class="text-body">
                {{ t.brandStory.modernInnovationDesc }}
              </p>
            </div>
            <div class="heritage-item">
              <h3 class="heading-large text-serif">{{ t.brandStory.sustainableFuture }}</h3>
              <p class="text-body">
                {{ t.brandStory.sustainableFutureDesc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import translations from '@/locales/translations'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLanguage])

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

// Brand letter hover effect
const setupBrandLetters = () => {
  const letters = document.querySelectorAll('.brand-letter')
  
  letters.forEach((letter, index) => {
    const htmlLetter = letter as HTMLElement
    
    htmlLetter.addEventListener('mouseenter', () => {
      htmlLetter.style.transform = 'translateY(-12px) rotate(3deg)'
      htmlLetter.style.color = 'var(--color-accent)'
    })
    
    htmlLetter.addEventListener('mouseleave', () => {
      htmlLetter.style.transform = 'translateY(0) rotate(0deg)'
      htmlLetter.style.color = ''
    })
    
    // Stagger animation on load
    setTimeout(() => {
      htmlLetter.style.opacity = '1'
      htmlLetter.style.transform = 'translateY(0)'
    }, index * 100)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Setup brand letters
  setTimeout(() => {
    setupBrandLetters()
  }, 500)
  
  // Trigger initial animations
  setTimeout(() => {
    handleScroll()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.brand-story-minimal {
  min-height: 100vh;
}

.etymology-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.etymology-item {
  text-align: center;
  padding: 2rem;
  border: 1px solid var(--color-gray-medium);
  transition: var(--transition-smooth);
}

.etymology-item:hover {
  border-color: var(--color-accent);
  transform: translateY(-5px);
}

.brand-name-container {
  text-align: center;
  margin: 4rem 0;
}

.brand-name {
  opacity: 0;
  transform: translateY(30px);
}

.brand-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  transition: var(--transition-bounce);
  cursor: pointer;
}

.philosophy-image {
  width: 100%;
  height: 600px;
  background: linear-gradient(135deg, var(--color-accent) 0%, #A8B8D8 50%, #C5D1ED 100%);
  position: relative;
  overflow: hidden;
}

.philosophy-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,30 50,50 T100,50" stroke="%23fff" stroke-width="2" fill="none" opacity="0.3"/></svg>');
  background-size: 200px 200px;
  animation: pleatWave 8s ease-in-out infinite;
}

.process-image {
  width: 100%;
  height: 500px;
  background: linear-gradient(45deg, var(--color-primary) 0%, #333 50%, #666 100%);
  position: relative;
  overflow: hidden;
}

.process-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" stroke="%23fff" stroke-width="1" fill="none" opacity="0.2"/></svg>');
  background-size: 150px 150px;
  animation: pleatWave 12s ease-in-out infinite reverse;
}

.heritage-content {
  text-align: center;
  padding: var(--space-xxl) 0;
}

.heritage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;
}

.heritage-item {
  padding: 2rem;
  border-top: 2px solid var(--color-accent);
  transition: var(--transition-smooth);
}

.heritage-item:hover {
  background: var(--color-gray-light);
  transform: translateY(-5px);
}

@keyframes pleatWave {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(1deg); }
  75% { transform: translateY(-4px) rotate(-1deg); }
}

@media (max-width: 768px) {
  .etymology-grid,
  .heritage-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .philosophy-image,
  .process-image {
    height: 300px;
  }
  
  .heritage-item {
    padding: 1.5rem;
  }
}
</style>
