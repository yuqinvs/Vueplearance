<template>
  <div class="contacts-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          {{ t.contacts.title }}
        </h1>
        <p class="text-body">
          {{ t.contacts.subtitle }}
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="contact-info fade-in">
          <div class="text-caption">{{ t.contacts.getInTouch }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.contacts.weWouldLoveToHear }}
          </h2>
          <div class="contact-grid">
            <div class="contact-item">
              <h3 class="heading-large text-serif">{{ t.contacts.generalInquiries }}</h3>
              <div class="contact-details">
                <p class="text-body">
                  <strong>{{ t.contacts.email }}:</strong><br>
                  <a href="mailto:support@plearance.com">support@plearance.com</a>
                </p>
                <p class="text-body">
                  <strong>{{ t.contacts.responseTime }}:</strong><br>
                  {{ t.contacts.within24Hours }}
                </p>
              </div>
            </div>
            
            <div class="contact-item">
              <h3 class="heading-large text-serif">{{ t.contacts.storeAppointments }}</h3>
              <div class="contact-details">
                <p class="text-body">
                  <strong>{{ t.contacts.email }}:</strong><br>
                  <a href="mailto:store@plearance.com">store@plearance.com</a>
                </p>                
              </div>
            </div>
            
            <div class="contact-item">
              <h3 class="heading-large text-serif">{{ t.contacts.pressMedia }}</h3>
              <div class="contact-details">
                <p class="text-body">
                  <strong>{{ t.contacts.email }}:</strong><br>
                  <a href="mailto:press@plearance.com">press@plearance.com</a>
                </p>
                <p class="text-body">
                  <strong>{{ t.contacts.highResImages }}:</strong><br>
                  {{ t.contacts.availableUponRequest }}
                </p>
              </div>
            </div>
            
            <div class="contact-item">
              <h3 class="heading-large text-serif">{{ t.contacts.businessInquiries }}</h3>
              <div class="contact-details">
                <p class="text-body">
                  <strong>{{ t.contacts.email }}:</strong><br>
                  <a href="mailto:business@plearance.com">business@plearance.com</a>
                </p>
                <p class="text-body">
                  <strong>{{ t.contacts.partnerships }}:</strong><br>
                  {{ t.contacts.wholesaleCollaboration }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="location-content slide-in-left">
          <div class="text-caption">{{ t.contacts.visitUs }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.contacts.tokyoFlagshipStore }}
          </h2>
          <div class="location-grid">
            <div class="location-details">
              <h3 class="heading-large text-serif">{{ t.contacts.address }}</h3>
              <div class="address-info">
                <p class="text-body" v-html="t.contacts.addressDetails"></p>
                <p class="text-body" v-html="t.contacts.hoursDetails"></p>
              </div>
              <div class="location-features">
                <h4 class="text-serif">{{ t.contacts.storeFeatures }}</h4>
                <ul class="feature-list">
                  <li>{{ t.contacts.personalStylingConsultations }}</li>
                  <li>{{ t.contacts.customPleatingServices }}</li>
                  <li>{{ t.contacts.alterationsAdjustments }}</li>
                  <li>{{ t.contacts.privateShoppingAppointments }}</li>
                  <li>{{ t.contacts.internationalShipping }}</li>
                </ul>
              </div>
            </div>
            <div class="location-map">
              <div class="map-embed">
                <iframe 
                  src="https://www.google.com/maps?q=%50%6C%65%61%72%61%6E%63%65%E5%84%AA%E9%9B%85%E3%81%AA%E3%81%B2%E3%81%A0&amp;output=embed"
                  width="100%" 
                  height="400" 
                  style="border:0; border-radius: 8px;" 
                  allowfullscreen 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Plearance Tokyo Flagship Store Location"
                >
                </iframe>
              </div>
              <div class="map-overlay">
                <p class="text-body">
                  Our flagship store is located in the heart of Tokyo's Marunouchi district, 
                  easily accessible from Tokyo Station and major subway lines.
                </p>
                <a href="https://maps.app.goo.gl/ni2LpLzyS744kr9p8" target="_blank" class="btn-minimal">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="form-content slide-in-right">
          <div class="text-caption">{{ t.contacts.sendMessage }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.contacts.letsStartConversation }}
          </h2>
          <div class="contact-form">
            <form @submit.prevent="handleSubmit" class="form-grid">
              <div class="form-group">
                <label for="name">{{ t.contacts.nameLabel }} *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  class="form-input"
                  :placeholder="t.contacts.yourFullName"
                >
              </div>
              
              <div class="form-group">
                <label for="email">{{ t.contacts.email }} *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  class="form-input"
                  :placeholder="t.contacts.yourEmail"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">{{ t.contacts.subject }} *</label>
                <select id="subject" v-model="form.subject" required class="form-select">
                  <option value="">{{ t.contacts.selectSubject }}</option>
                  <option value="general">{{ t.contacts.generalInquiry }}</option>
                  <option value="store">{{ t.contacts.storeAppointment }}</option>
                  <option value="custom">{{ t.contacts.customOrder }}</option>
                  <option value="press">{{ t.contacts.pressMediaContact }}</option>
                  <option value="business">{{ t.contacts.businessPartnership }}</option>
                  <option value="other">{{ t.contacts.other }}</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="phone">{{ t.contacts.phone }}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  class="form-input"
                  :placeholder="t.contacts.phonePlaceholder"
                >
              </div>
              
              <div class="form-group full-width">
                <label for="message">{{ t.contacts.message }} *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  class="form-textarea"
                  rows="6"
                  :placeholder="t.contacts.messagePlaceholder"
                ></textarea>
              </div>
              
              <div class="form-group full-width">
                <button type="submit" class="btn-minimal" :disabled="isSubmitting">
                  {{ isSubmitting ? t.contacts.sending : t.contacts.sendButton }}
                </button>
              </div>
            </form>
            
            <div v-if="submitStatus" class="form-status" :class="submitStatus.type">
              {{ submitStatus.message }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="faq-content fade-in">
          <div class="text-caption">{{ t.contacts.frequentlyAsked }}</div>
          <h2 class="heading-display text-serif space-y-sm">
            {{ t.contacts.commonQuestions }}
          </h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3 class="heading-large text-serif">{{ t.contacts.howToCare }}</h3>
              <p class="text-body">
                {{ t.contacts.careDesc }}
              </p>
            </div>
            <div class="faq-item">
              <h3 class="heading-large text-serif">{{ t.contacts.doYouShip }}</h3>
              <p class="text-body">
                {{ t.contacts.shippingDesc }}
              </p>
            </div>
            <div class="faq-item">
              <h3 class="heading-large text-serif">Can I request custom pleating?</h3>
              <p class="text-body">
                Absolutely! We offer custom pleating services. Contact us to discuss your 
                vision and our artisans will work with you to create something unique.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="heading-large text-serif">What is your return policy?</h3>
              <p class="text-body">
                We accept returns within 14 days of delivery for unworn items with tags attached. 
                Custom orders and altered items are final sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import translations from '@/locales/translations'
import type { Translation } from '@/locales/translations'

const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLanguage])

// Helper function to safely access translations
const getTranslation = () => {
  return translations[languageStore.currentLanguage]
}

interface FormData {
  name: string
  email: string
  subject: string
  phone: string
  message: string
}

interface SubmitStatus {
  type: 'success' | 'error'
  message: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<SubmitStatus | null>(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  try {
    // Create FormData object for Formspree submission
    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('subject', form.value.subject)
    formData.append('phone', form.value.phone)
    formData.append('message', form.value.message)
    
    // Submit to Formspree using environment variable
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    if (!formspreeEndpoint || formspreeEndpoint === 'https://formspree.io/f/your-form-id') {
      throw new Error(getTranslation().contacts.formIdError)
    }
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      submitStatus.value = {
        type: 'success',
        message: getTranslation().contacts.successMessage
      }
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      }
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    let errorMessage = getTranslation().contacts.errorMessage
    
    if (error instanceof Error && error.message.includes('Formspree form ID not configured')) {
      errorMessage = error.message
    } else if (error instanceof Error && error.message.includes('Failed to fetch')) {
      errorMessage = getTranslation().contacts.networkError
    }
    
    submitStatus.value = {
      type: 'error',
      message: errorMessage
    }
  } finally {
    isSubmitting.value = false
  }
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
.contacts-minimal {
  min-height: 100vh;
}

.contact-info {
  text-align: center;
  padding: var(--space-xxl) 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 4rem;
}

.contact-item {
  padding: 2rem;
  border: 1px solid var(--color-gray-medium);
  transition: var(--transition-smooth);
}

.contact-item:hover {
  border-color: var(--color-accent);
  transform: translateY(-5px);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.contact-details a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition-smooth);
}

.contact-details a:hover {
  color: var(--color-accent);
}

.location-content {
  padding: var(--space-xxl) 0;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-top: 4rem;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.address-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.location-features h4 {
  margin-bottom: 1rem;
  color: var(--color-accent);
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-list li {
  position: relative;
  padding-left: 1.5rem;
}

.feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.location-map {
  position: relative;
}

.map-embed {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.map-embed iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.map-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-top: 1px solid var(--color-gray-medium);
}

.form-content {
  padding: var(--space-xxl) 0;
}

.contact-form {
  margin-top: 3rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-input,
.form-select,
.form-textarea {
  padding: 1rem;
  border: 1px solid var(--color-gray-medium);
  background: var(--color-secondary);
  font-family: var(--font-sans);
  font-size: 1rem;
  transition: var(--transition-smooth);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}

.form-status.success {
  background: rgba(139, 157, 195, 0.1);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
}

.form-status.error {
  background: rgba(255, 0, 0, 0.05);
  border: 1px solid #ff0000;
  color: #ff0000;
}

.faq-content {
  padding: var(--space-xxl) 0;
}

.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4rem;
}

.faq-item {
  padding: 2rem;
  border-left: 3px solid var(--color-accent);
  background: var(--color-gray-light);
  transition: var(--transition-smooth);
}

.faq-item:hover {
  transform: translateX(10px);
}

.faq-item h3 {
  margin-bottom: 1rem;
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .location-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  .map-embed {
    height: 250px;
    width: 100%;
    overflow: hidden;
  }
  
  .contact-item,
  .faq-item {
    padding: 1.5rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  /* Mobile overflow protection */
  .contact-info,
  .location-content,
  .form-content,
  .faq-content {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  .contact-details,
  .address-info {
    width: 100%;
  }
  
  .contact-details a,
  .address-info a {
    word-break: break-word;
    overflow-wrap: break-word;
  }
  
  /* Form mobile overflow protection */
  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
}

/* RTL Support */
[dir="rtl"] .contact-info,
[dir="rtl"] .location-content,
[dir="rtl"] .form-content,
[dir="rtl"] .faq-content {
  text-align: right;
}

[dir="rtl"] .contact-grid,
[dir="rtl"] .location-grid,
[dir="rtl"] .form-grid,
[dir="rtl"] .faq-grid {
  direction: rtl;
}

[dir="rtl"] .feature-list li {
  padding-left: 0;
  padding-right: 1.5rem;
}

[dir="rtl"] .feature-list li::before {
  left: auto;
  right: 0;
  content: '←';
}

[dir="rtl"] .faq-item {
  border-left: none;
  border-right: 3px solid var(--color-accent);
}

[dir="rtl"] .faq-item:hover {
  transform: translateX(-10px);
}

/* RTL Form Support */
[dir="rtl"] .form-group label {
  text-align: right;
}

[dir="rtl"] .form-input,
[dir="rtl"] .form-select,
[dir="rtl"] .form-textarea {
  text-align: right;
  direction: rtl;
}

[dir="rtl"] .form-input::placeholder,
[dir="rtl"] .form-textarea::placeholder {
  text-align: right;
}

/* RTL Mobile Support */
@media (max-width: 768px) {
  [dir="rtl"] .contact-info,
  [dir="rtl"] .location-content,
  [dir="rtl"] .form-content,
  [dir="rtl"] .faq-content {
    text-align: right;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  
  [dir="rtl"] .contact-item,
  [dir="rtl"] .faq-item {
    text-align: right;
  }
  
  [dir="rtl"] .contact-details,
  [dir="rtl"] .address-info {
    text-align: right;
  }
  
  [dir="rtl"] .form-group {
    text-align: right;
  }
  
  [dir="rtl"] .map-overlay {
    text-align: right;
  }
}
</style>