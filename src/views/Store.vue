<template>
  <div class="store-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          {{ t.store.title }}
        </h1>
        <p class="text-body">
          {{ t.store.discoverCuratedCollection }}
        </p>
      </div>
    </section>

    <!-- Store Information -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="store-info fade-in">
          <div class="text-caption">{{ t.store.visitUs }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.store.experienceInPerson }}
          </h2>
          <div class="store-details">
            <div class="store-address">
              <h3 class="heading-large text-serif">{{ t.store.tokyoFlagship }}</h3>
              <p class="text-body" v-html="t.store.storeAddress"></p>
              <p class="text-body" v-html="t.store.storeHours"></p>
            </div>
            <div class="store-image">
              <div class="store-visual"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shopping Experience -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="experience-content slide-in-left">
          <div class="text-caption">{{ t.store.experienceInPerson }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.store.personalJourney }}
          </h2>
          <div class="space-y-md">
            <p class="text-body">
              {{ t.store.personalJourneyDesc1 }}
            </p>
            <p class="text-body">
              {{ t.store.personalJourneyDesc2 }}
            </p>
            <p class="text-body">
              {{ t.store.personalJourneyDesc3 }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="services-content slide-in-right">
          <div class="text-caption">{{ t.store.bespokeServices }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.store.bespokeServices }}
          </h2>
          <div class="services-grid">
            <div class="service-item">
              <h3 class="heading-large text-serif">{{ t.store.personalStyling }}</h3>
              <p class="text-body">
                {{ t.store.personalStylingDesc }}
              </p>
            </div>
            <div class="service-item">
              <h3 class="heading-large text-serif">{{ t.store.customPleating }}</h3>
              <p class="text-body">
                {{ t.store.customPleatingDesc }}
              </p>
            </div>
            <div class="service-item">
              <h3 class="heading-large text-serif">{{ t.store.alterations }}</h3>
              <p class="text-body">
                {{ t.store.alterationsDesc }}
              </p>
            </div>
            <div class="service-item">
              <h3 class="heading-large text-serif">{{ t.store.careInstructions }}</h3>
              <p class="text-body">
                {{ t.store.careInstructionsDesc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Online Shopping -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="online-content fade-in">
          <div class="text-caption">{{ t.store.shopAnywhere }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.store.shopAnywhere }}
          </h2>
          <div class="online-details">
            <div class="online-text">
              <p class="text-body">
                {{ t.store.shopOnlineDesc1 }}
              </p>
              <p class="text-body">
                {{ t.store.shopOnlineDesc2 }}
              </p>
              <p class="text-body">
                {{ t.store.shopOnlineDesc3 }}
              </p>
            </div>
            <div class="online-contact">
              <h3 class="heading-large text-serif">{{ t.store.onlineContact }}</h3>
              <div class="contact-info">
                <p class="text-body">
                  <strong>{{ t.store.emailLabel }}:</strong><br>
                  <a href="mailto:store@plearance.com">store@plearance.com</a>
                </p>
                <p class="text-body">
                  <strong>{{ t.store.phoneLabel }}:</strong><br>
                  +81-3-1234-5678
                </p>
                <p class="text-body">
                  <strong>{{ t.store.whatsappLabel }}:</strong><br>
                  +81-90-1234-5678
                </p>
              </div>
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
            {{ t.store.beginJourney }}
          </h2>
          <p class="text-body" style="max-width: 600px; margin: 0 auto;">
            {{ t.store.beginJourneyDesc }}
          </p>
          <div class="cta-buttons space-y-sm">
            <RouterLink to="/contacts" class="btn-minimal btn-minimal-inverted">
              {{ t.store.contactUs }}
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
.store-minimal {
  min-height: 100vh;
}

.store-info {
  text-align: center;
  padding: var(--space-xxl) 0;
}

.store-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-top: 4rem;
  text-align: left;
}

.store-address {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.store-visual {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, var(--color-gray-light) 0%, var(--color-gray-medium) 50%, var(--color-accent) 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.store-visual::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" stroke="%23fff" stroke-width="1" fill="none" opacity="0.3"/></svg>');
  background-size: 150px 150px;
  animation: pleatWave 10s ease-in-out infinite;
}

.experience-content {
  padding: var(--space-xxl) 0;
}

.services-content {
  padding: var(--space-xxl) 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 4rem;
}

.service-item {
  padding: 2rem;
  border-left: 3px solid var(--color-accent);
  transition: var(--transition-smooth);
}

.service-item:hover {
  background: var(--color-gray-light);
  transform: translateX(10px);
}

.online-content {
  padding: var(--space-xxl) 0;
}

.online-details {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  margin-top: 4rem;
}

.online-contact {
  background: var(--color-gray-light);
  padding: 2rem;
  border-radius: 8px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.contact-info a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition-smooth);
}

.contact-info a:hover {
  color: var(--color-accent);
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
  .store-details,
  .online-details {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .store-visual {
    height: 250px;
  }
  
  .service-item {
    padding: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>