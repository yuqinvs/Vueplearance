<template>
  <div class="home-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          Plearance
        </h1>
        <p class="text-body space-y-md">
          優雅なひだ<br>
          <em>An independent designer brand inspired by the art of pleats</em>
        </p>
      </div>
      <div class="hero-image parallax-element">
        <div class="hero-bg"></div>
      </div>
    </section>

    <!-- Designer Introduction -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial">
          <div class="editorial-text slide-in-left">
            <div class="text-caption">Creative Excellence</div>
            <h2 class="heading-display text-serif space-y-sm">
              Yui Nakahara
            </h2>
            <div class="space-y-md">
              <blockquote class="text-body text-serif">
                "Pleats and structure bring garments to life"
              </blockquote>
              <p class="text-body">
                Born in 1991 in Ōita, Japan. Graduated from Bunka Fashion College (Apparel Technology). 
                After graduation, joined ISSEY MIYAKE and worked on PLEATS PLEASE in design and pattern making, 
                gaining end-to-end experience from planning, pattern development to sample prototyping.
              </p>
              <p class="text-body">
                My practice centers on the balance between function and beauty, emphasizing structure, proportion, 
                and the sustainable use of fabric. By connecting modern craftsmanship with everyday wearing scenarios, 
                she cultivates a distinct, restrained visual language.
              </p>
              <div class="space-y-sm">
                <RouterLink to="/brand-story" class="btn-minimal">
                  Brand Story
                </RouterLink>
                <RouterLink to="/contacts" class="btn-minimal btn-minimal-inverted">
                  Contact Us
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="editorial-image slide-in-right">
            <div class="image-placeholder hero-image-bg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Manufacturing Excellence -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial">
          <div class="editorial-image slide-in-left">
            <div class="image-placeholder factory-bg"></div>
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">Our Manufacturing Excellence</div>
            <h2 class="heading-display text-serif space-y-sm">
              Welcome to the world of exceptional pleated artistry
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                In pursuit of creating the finest pleated garments, I have carefully selected the most prestigious 
                manufacturing partner renowned for their unparalleled expertise in fabric manipulation and pleating techniques.
              </p>
              <p class="text-body">
                Our chosen manufacturer operates state-of-the-art pleating machinery, featuring precision-engineered 
                equipment that transforms ordinary fabrics into extraordinary sculptural pieces. These advanced machines 
                ensure every fold is perfectly aligned, every crease maintains its integrity, and every pleat tells 
                a story of meticulous craftsmanship.
              </p>
              <p class="text-body">
                The manufacturing facility houses cutting-edge technology including computer-controlled pleating systems, 
                heat-setting chambers with precise temperature regulation, and specialized pressing equipment that locks 
                each fold into permanent perfection.
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
          <div class="text-caption">Philosophy</div>
          <h2 class="heading-display text-serif space-y-sm">
            Where structured artistry meets effortless grace
          </h2>
          <p class="text-body" style="max-width: 800px; margin: 0 auto;">
            PLEARANCE is my newly founded personal brand, specializing in pleated womenswear across diverse categories 
            — from everyday essentials to statement pieces — exploring structure, movement, and comfort through pleats.
          </p>
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
  
  .brand-philosophy {
    padding: var(--space-lg) 0;
  }
}
</style>