<template>
  <div class="abaya-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          {{ t.abaya.title }}
        </h1>
        <p class="text-body">
          {{ t.abaya.subtitle }}
        </p>
      </div>
    </section>

    <!-- Cultural Respect Section -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial" v-if="!languageStore.isRTL">
          <div class="editorial-text slide-in-left">
            <div class="text-caption">{{ t.abaya.culturalRespect }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.abaya.whyAbayaSection }}
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                {{ t.abaya.culturalRespectDesc }}
              </p>
              <p class="text-body">
                {{ t.abaya.whyAbayaDesc }}
              </p>
            </div>
          </div>
          <div class="editorial-image slide-in-right">
            <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20muslim%20abaya%20collection%20display%20modest%20fashion%20cultural%20respect%20islamic%20heritage&image_size=landscape_16_9" alt="Cultural Respect" class="editorial-image-content" />
          </div>
        </div>
        <div class="grid-editorial" v-else>
          <div class="editorial-image slide-in-left">
            <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20muslim%20abaya%20collection%20display%20modest%20fashion%20cultural%20respect%20islamic%20heritage&image_size=landscape_16_9" alt="Cultural Respect" class="editorial-image-content" />
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">{{ t.abaya.culturalRespect }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.abaya.whyAbayaSection }}
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                {{ t.abaya.culturalRespectDesc }}
              </p>
              <p class="text-body">
                {{ t.abaya.whyAbayaDesc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Islamic Compliance Section -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial">
          <div class="editorial-image slide-in-left">
            <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=islamic%20dress%20compliance%20modest%20fashion%20guidelines%20muslim%20women%20clothing%20traditional&image_size=landscape_16_9" alt="Islamic Compliance" class="editorial-image-content" />
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">{{ t.abaya.islamicCompliance }}</div>
            <h2 class="heading-display text-serif space-y-sm">
              {{ t.abaya.culturalSensitivity }}
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                {{ t.abaya.islamicComplianceDesc }}
              </p>
              <p class="text-body">
                {{ t.abaya.culturalSensitivityDesc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Showcase -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="collection-intro fade-in">
          <div class="text-caption">{{ t.abaya.productShowcase }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.abaya.designPhilosophy }}
          </h2>
          <p class="text-body" style="max-width: 800px; margin: 0 auto;">
            {{ t.abaya.designPhilosophyDesc }}
          </p>
        </div>
        
        <div class="products-grid">
          <!-- Classic Abaya -->
          <div class="product-category slide-in-left">
            <div class="category-image">
              <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20black%20muslim%20abaya%20classic%20design%20flowing%20lines%20premium%20crepe%20fabric%20subtle%20pleats&image_size=landscape_16_9" :alt="t.abaya.classicAbaya" class="category-image-content" />
            </div>
            <div class="category-content">
              <div class="text-caption">{{ t.abaya.traditionalLabel }}</div>
              <h3 class="heading-large text-serif">{{ t.abaya.classicAbaya }}</h3>
              <p class="text-body">
                {{ t.abaya.classicAbayaDesc }}
              </p>
              <div class="category-features">
                <span class="feature-tag">{{ t.products.premiumFabric }}</span>
                <span class="feature-tag">{{ t.abaya.featureTimelessDesign }}</span>
                <span class="feature-tag">{{ t.abaya.featureModestFit }}</span>
              </div>
            </div>
          </div>

          <!-- Embroidered Abaya -->
          <div class="product-category reverse slide-in-right">
            <div class="category-image">
              <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20muslim%20abaya%20hand%20embroidery%20intricate%20patterns%20black%20chiffon%20traditional%20islamic%20artistry&image_size=landscape_16_9" :alt="t.abaya.embroideredAbaya" class="category-image-content" />
            </div>
            <div class="category-content">
              <div class="text-caption">{{ t.abaya.artisanCraftedLabel }}</div>
              <h3 class="heading-large text-serif">{{ t.abaya.embroideredAbaya }}</h3>
              <p class="text-body">
                {{ t.abaya.embroideredAbayaDesc }}
              </p>
              <div class="category-features">
                <span class="feature-tag">{{ t.abaya.featureHandEmbroidery }}</span>
                <span class="feature-tag">{{ t.abaya.featureIntricatePatterns }}</span>
                <span class="feature-tag">{{ t.abaya.featureIslamicArtistry }}</span>
              </div>
            </div>
          </div>

          <!-- Modern Abaya -->
          <div class="product-category slide-in-left">
            <div class="category-image">
              <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20muslim%20abaya%20structured%20pleats%20architectural%20design%20contemporary%20modest%20fashion%20elegant&image_size=landscape_16_9" :alt="t.abaya.modernAbaya" class="category-image-content" />
            </div>
            <div class="category-content">
              <div class="text-caption">{{ t.abaya.contemporaryLabel }}</div>
              <h3 class="heading-large text-serif">{{ t.abaya.modernAbaya }}</h3>
              <p class="text-body">
                {{ t.abaya.modernAbayaDesc }}
              </p>
              <div class="category-features">
                <span class="feature-tag">{{ t.abaya.featureArchitectural }}</span>
                <span class="feature-tag">{{ t.abaya.featureStructuredPleats }}</span>
                <span class="feature-tag">{{ t.abaya.featureModernElegance }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Care Section -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="brand-philosophy fade-in">
          <div class="text-caption">{{ t.abaya.customerCare }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.abaya.premiumFabric }}
          </h2>
          <p class="text-body" style="max-width: 800px; margin: 0 auto;">
            {{ t.abaya.premiumFabricDesc }}
          </p>
          <div class="space-y-sm" style="margin-top: 2rem;">
            <RouterLink to="/contacts" class="btn-minimal">
              {{ t.nav.contact }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
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
/* Use the exact same styles as other pages - no custom styles needed */
.products-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxl);
  margin-top: var(--space-xl);
}

.product-category {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--grid-gap);
  align-items: center;
}

.category-image { order: 1; }
.category-content { order: 2; }
.product-category.reverse .category-image { order: 2; }
.product-category.reverse .category-content { order: 1; }

.category-image-content {
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.category-content {
  padding: var(--space-md);
}

.category-features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-md);
}

.feature-tag {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
}

.collection-intro {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.brand-philosophy {
  text-align: center;
  padding: var(--space-xl) 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .product-category {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  
  .category-content {
    padding: var(--space-sm);
  }
  
  .category-features {
    justify-content: center;
  }
}

/* Animation Classes - matching other pages */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
