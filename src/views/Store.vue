<template>
  <div class="store-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          Store
        </h1>
        <p class="text-body">
          Discover our curated collection
        </p>
      </div>
    </section>

    <!-- Store Information -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="store-info fade-in">
          <div class="text-caption">Visit Us</div>
          <h2 class="heading-display text-serif space-y-sm">
            Experience Plearance in Person
          </h2>
          <div class="store-details">
            <div class="store-address">
              <h3 class="heading-large text-serif">Tokyo Flagship</h3>
              <p class="text-body">
                1 Chome-8-1 Marunouchi<br>
                Chiyoda City, Tokyo<br>
                100-0005, Japan
              </p>
              <p class="text-body">
                <strong>Hours:</strong><br>
                Monday - Saturday: 11:00 - 20:00<br>
                Sunday: 12:00 - 19:00
              </p>
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
          <div class="text-caption">Experience</div>
          <h2 class="heading-display text-serif space-y-sm">
            A Personal Journey
          </h2>
          <div class="space-y-md">
            <p class="text-body">
              Stepping into a Plearance store is more than a shopping trip — it's an 
              immersion into the world of pleated artistry. Our carefully designed spaces 
              reflect the same attention to detail and minimalist aesthetic that defines our clothing.
            </p>
            <p class="text-body">
              Each store is conceived as a gallery where garments are displayed as works of art. 
              The lighting is meticulously calibrated to highlight the texture and movement of 
              each pleat, allowing you to appreciate the craftsmanship that goes into every piece.
            </p>
            <p class="text-body">
              Our knowledgeable staff are trained not just in fashion, but in the art and 
              science of pleating. They can guide you through our collections, explaining 
              the different techniques used and helping you find pieces that complement 
              your personal style and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="services-content slide-in-right">
          <div class="text-caption">Services</div>
          <h2 class="heading-display text-serif space-y-sm">
            Bespoke Services
          </h2>
          <div class="services-grid">
            <div class="service-item">
              <h3 class="heading-large text-serif">Personal Styling</h3>
              <p class="text-body">
                Our expert stylists work with you to understand your aesthetic preferences, 
                lifestyle needs, and body type to curate a selection of pieces that will 
                become the foundation of your wardrobe.
              </p>
            </div>
            <div class="service-item">
              <h3 class="heading-large text-serif">Custom Pleating</h3>
              <p class="text-body">
                For those seeking something truly unique, we offer custom pleating services. 
                Work with our artisans to create bespoke pleat patterns that reflect your 
                personal style and vision.
              </p>
            </div>
            <div class="service-item">
              <h3 class="heading-large text-serif">Alterations</h3>
              <p class="text-body">
                Our in-house alteration service ensures that every piece fits you perfectly. 
                We understand that the beauty of pleated garments lies in their precise fit 
                and drape.
              </p>
            </div>
            <div class="service-item">
              <h3 class="heading-large text-serif">Care Instructions</h3>
              <p class="text-body">
                Learn how to properly care for your pleated garments to ensure they maintain 
                their beauty and structure for years to come. We provide detailed guidance 
                on cleaning, storage, and maintenance.
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
          <div class="text-caption">Online</div>
          <h2 class="heading-display text-serif space-y-sm">
            Shop from Anywhere
          </h2>
          <div class="online-details">
            <div class="online-text">
              <p class="text-body">
                While we believe nothing compares to experiencing our garments in person, 
                we understand that visiting our Tokyo flagship isn't always possible. 
                Our online store brings the Plearance experience to you, wherever you are.
              </p>
              <p class="text-body">
                Each product page includes detailed photographs that capture the texture 
                and movement of our pleated fabrics. We provide comprehensive measurements, 
                fabric information, and styling suggestions to help you make informed decisions.
              </p>
              <p class="text-body">
                Our customer service team is available to answer questions, provide styling 
                advice, and ensure that your online shopping experience meets the same 
                high standards as visiting our store in person.
              </p>
            </div>
            <div class="online-contact">
              <h3 class="heading-large text-serif">Get in Touch</h3>
              <div class="contact-info">
                <p class="text-body">
                  <strong>Email:</strong><br>
                  <a href="mailto:store@plearance.com">store@plearance.com</a>
                </p>
                <p class="text-body">
                  <strong>Phone:</strong><br>
                  +81-3-1234-5678
                </p>
                <p class="text-body">
                  <strong>WhatsApp:</strong><br>
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
            Begin Your Plearance Journey
          </h2>
          <p class="text-body" style="max-width: 600px; margin: 0 auto;">
            Whether you visit our Tokyo flagship or shop online, we're here to help 
            you discover the transformative power of pleated artistry. Each piece in 
            our collection is designed to become a cherished part of your wardrobe, 
            bringing structure, movement, and elegance to your everyday life.
          </p>
          <div class="cta-buttons space-y-sm">
            <RouterLink to="/contacts" class="btn-minimal btn-minimal-inverted">
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

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