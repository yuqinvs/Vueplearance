<template>
  <div class="products-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          {{ t.products.title }}
        </h1>
        <p class="text-body">
          {{ t.products.subtitle }}
        </p>
      </div>
    </section>

    <!-- Collection Overview -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="collection-intro fade-in">
          <div class="text-caption">{{ t.products.allProducts }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.products.everyFoldTellsStory }}
          </h2>
          <p class="text-body" style="max-width: 800px; margin: 0 auto;">
            {{ t.products.collectionDesc }}
          </p>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="products-grid">
          <!-- Everyday Essentials -->
          <div>
            <div class="category-image everyday-bg">
              <img src="@/assets/img/EverydayEssentials.png" alt="Everyday Essentials Collection" class="category-image-content" />
            </div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">{{ t.products.everydayEssentials }}</h3>
              <p class="text-body">
                {{ t.products.everydayDesc }}
              </p>
              <div class="category-features">
                <span class="feature-tag">{{ t.products.comfortFit }}</span>
                <span class="feature-tag">{{ t.products.breathableFabric }}</span>
                <span class="feature-tag">{{ t.products.easyCare }}</span>
              </div>
            </div>
          </div>

          <!-- Statement Pieces -->
          <div class="product-category slide-in-right">
            <div>
              <img src="@/assets/img/StatementPieces.png" alt="Statement Pieces Collection" class="category-image-content" />
            </div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">{{ t.products.statementPieces }}</h3>
              <p class="text-body">
                {{ t.products.statementDesc }}
              </p>
              <div class="category-features">
                <span class="feature-tag">{{ t.products.architecturalDesign }}</span>
                <span class="feature-tag">{{ t.products.handFinished }}</span>
                <span class="feature-tag">{{ t.products.limitedEdition }}</span>
              </div>
            </div>
          </div>

          <!-- Professional Collection -->
          <div class="product-category slide-in-left">
            <div>
              <img src="@/assets/img/ProfessionalCollection.png" alt="Professional Collection" class="category-image-content" />
            </div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">{{ t.products.professionalCollection }}</h3>
              <p class="text-body">
                {{ t.products.professionalDesc }}
              </p>
              <div class="category-features">
                <span class="feature-tag">{{ t.products.officeReady }}</span>
                <span class="feature-tag">{{ t.products.wrinkleResistant }}</span>
                <span class="feature-tag">{{ t.products.travelFriendly }}</span>
              </div>
            </div>
          </div>

          <!-- Evening Elegance -->
          <div class="product-category slide-in-right">
            <div>
              <img src="@/assets/img/EveningElegance.png" alt="Evening Elegance Collection" class="category-image-content" />
            </div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">{{ t.products.eveningElegance }}</h3>
              <p class="text-body">
                {{ t.products.eveningDesc }}
              </p>
              <div class="category-features">
                <span class="feature-tag">{{ t.products.premiumFabric }}</span>
                <span class="feature-tag">{{ t.products.intricatePleating }}</span>
                <span class="feature-tag">{{ t.products.specialOccasion }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Craftsmanship Section -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="craftsmanship-content fade-in">
          <div class="text-caption">{{ t.products.artOfPerfectPleats }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.products.artOfPerfectPleats }}
          </h2>
          <div class="craftsmanship-grid">
            <div class="craft-item">
              <h3 class="heading-large text-serif">{{ t.products.fabricSelection }}</h3>
              <p class="text-body">
                {{ t.products.fabricSelectionDesc }}
              </p>
            </div>
            <div class="craft-item">
              <h3 class="heading-large text-serif">{{ t.products.pleatFormation }}</h3>
              <p class="text-body">
                {{ t.products.pleatFormationDesc }}
              </p>
            </div>
            <div class="craft-item">
              <h3 class="heading-large text-serif">{{ t.products.heatSetting }}</h3>
              <p class="text-body">
                {{ t.products.heatSettingDesc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="cta-section fade-in">
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.products.experiencePlearance }}
          </h2>
          <p class="text-body" style="max-width: 600px; margin: 0 auto;">
            {{ t.products.experienceDesc }}
          </p>
          <div class="cta-buttons space-y-sm">
            <RouterLink to="/store" class="btn-minimal btn-minimal-inverted">
              {{ t.products.visitStore }}
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
.products-minimal {
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.collection-intro {
  text-align: center;
  padding: var(--space-xxl) 0;
}

.products-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxl);
  padding: var(--space-xl) 0;
}

.product-category {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.product-category:nth-child(even) {
  grid-template-columns: 1fr 1fr;
  direction: rtl;
}

.product-category:nth-child(even) .category-content {
  direction: ltr;
}

.category-image {
  height: 400px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition: var(--transition-smooth);
}

.category-image:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.category-image-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: var(--transition-smooth);
}

.category-image:hover .category-image-content {
  transform: scale(1.05);
}

.everyday-bg {
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 50%, #d0d0d0 100%);
}

.everyday-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,30 50,50 T100,50" stroke="%23bbb" stroke-width="1" fill="none" opacity="0.4"/></svg>');
  background-size: 150px 150px;
  animation: pleatWave 8s ease-in-out infinite;
}

.statement-bg {
  background: linear-gradient(45deg, var(--color-primary) 0%, #333 50%, #666 100%);
}

.statement-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,10 90,90 10,90" stroke="%23fff" stroke-width="1" fill="none" opacity="0.3"/></svg>');
  background-size: 200px 200px;
  animation: pleatWave 10s ease-in-out infinite reverse;
}

.professional-bg {
  background: linear-gradient(135deg, var(--color-accent) 0%, #A8B8D8 50%, #C5D1ED 100%);
}

.professional-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="25" y="25" width="50" height="50" stroke="%23fff" stroke-width="1" fill="none" opacity="0.4"/></svg>');
  background-size: 120px 120px;
  animation: pleatWave 12s ease-in-out infinite;
}

.evening-bg {
  background: linear-gradient(45deg, #2a2a2a 0%, #444 50%, #666 100%);
}

.evening-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" stroke="%23fff" stroke-width="1" fill="none" opacity="0.2"/></svg>');
  background-size: 180px 180px;
  animation: pleatWave 15s ease-in-out infinite reverse;
}

.category-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.category-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.feature-tag {
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--color-gray-medium);
  border-radius: 20px;
  background: var(--color-secondary);
  color: var(--color-primary);
  transition: var(--transition-smooth);
}

.feature-tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.craftsmanship-content {
  text-align: center;
  padding: var(--space-xxl) 0;
}

.craftsmanship-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;
}

.craft-item {
  padding: 2rem;
  border-top: 2px solid var(--color-accent);
  transition: var(--transition-smooth);
}

.craft-item:hover {
  background: var(--color-gray-light);
  transform: translateY(-5px);
}

.cta-section {
  text-align: center;
  padding: var(--space-xxl) 0;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

@keyframes pleatWave {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(1deg); }
  75% { transform: translateY(-4px) rotate(-1deg); }
}

@media (max-width: 768px) {
  .products-minimal {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  .product-category,
  .product-category:nth-child(even) {
    grid-template-columns: 1fr;
    direction: ltr;
    width: 100%;
    max-width: 100%;
  }
  
  .category-image {
    height: 250px;
    width: 100%;
    max-width: 100%;
  }
  
  .category-content {
    width: 100%;
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  
  .category-features {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .feature-tag {
    word-break: break-word;
    overflow-wrap: break-word;
  }
  
  .craftsmanship-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
  }
  
  .craft-item {
    padding: 1.5rem;
    width: 100%;
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }
  
  .btn-minimal {
    width: 100%;
    max-width: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
  }
}
</style>