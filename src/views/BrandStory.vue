<template>
  <div class="brand-story-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          Brand Story
        </h1>
        <p class="text-body">
          The fusion of Pleats and Elegance
        </p>
      </div>
    </section>

    <!-- Brand Etymology -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="brand-etymology fade-in">
          <div class="etymology-grid">
            <div class="etymology-item">
              <h3 class="heading-large text-serif">Pleats</h3>
              <p class="text-body">
                The art of folding fabric<br>
                Creating structure and movement
              </p>
            </div>
            <div class="etymology-item">
              <h3 class="heading-large text-serif">Elegance</h3>
              <p class="text-body">
                Refined beauty in simplicity<br>
                Timeless sophistication
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
              Where structured artistry meets effortless grace
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Philosophy -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial">
          <div class="editorial-text slide-in-left">
            <div class="text-caption">Philosophy</div>
            <h2 class="heading-display text-serif space-y-sm">
              The Art of Transformation
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                Born from the fusion of <strong>Pleats</strong> and <strong>Elegance</strong>, Plearance represents 
                the harmonious marriage of technical precision and aesthetic refinement. Each fold tells a story 
                of craftsmanship, while every silhouette whispers of timeless beauty.
              </p>
              <p class="text-body">
                Our design philosophy celebrates the transformative power of pleating — not merely as a technique, 
                but as a language of expression that speaks to the modern woman's desire for both structure 
                and fluidity in her wardrobe.
              </p>
              <p class="text-body">
                Through meticulous attention to proportion and an unwavering commitment to quality, we create 
                garments that transcend seasonal trends, offering instead a permanent collection of refined 
                pieces that age gracefully with their wearer.
              </p>
            </div>
          </div>
          <div class="editorial-image slide-in-right">
            <div class="philosophy-image"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Process -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="grid-editorial">
          <div class="editorial-image slide-in-left">
            <div class="process-image"></div>
          </div>
          <div class="editorial-text slide-in-right">
            <div class="text-caption">Process</div>
            <h2 class="heading-display text-serif space-y-sm">
              From Concept to Creation
            </h2>
            <div class="space-y-md">
              <p class="text-body">
                Every Plearance piece begins with an idea — a vision of how fabric can be transformed 
                through the ancient art of pleating into something both functional and beautiful.
              </p>
              <p class="text-body">
                Our design process is meticulous and thoughtful. We begin by selecting the finest fabrics, 
                each chosen for its ability to hold a pleat while maintaining drape and movement. 
                The pleating process itself is a dance between heat, pressure, and time, requiring 
                years of expertise to perfect.
              </p>
              <p class="text-body">
                The result is clothing that moves with you, that breathes with you, that becomes 
                more beautiful with each wearing. This is not fast fashion — this is slow, deliberate 
                creation of pieces meant to last a lifetime.
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
          <div class="text-caption">Heritage & Future</div>
          <h2 class="heading-display text-serif space-y-sm">
            Rooted in Tradition, Designed for Tomorrow
          </h2>
          <div class="heritage-grid">
            <div class="heritage-item">
              <h3 class="heading-large text-serif">Japanese Heritage</h3>
              <p class="text-body">
                Drawing from centuries of Japanese textile tradition, our approach to pleating 
                honors the past while embracing contemporary aesthetics. The precision and 
                attention to detail that defines Japanese craftsmanship is evident in every fold.
              </p>
            </div>
            <div class="heritage-item">
              <h3 class="heading-large text-serif">Modern Innovation</h3>
              <p class="text-body">
                By combining traditional techniques with modern technology, we push the boundaries 
                of what's possible with pleated fabric. Our commitment to innovation ensures 
                that each collection builds upon the last, constantly evolving and improving.
              </p>
            </div>
            <div class="heritage-item">
              <h3 class="heading-large text-serif">Sustainable Future</h3>
              <p class="text-body">
                Sustainability is not an afterthought — it's woven into every decision we make. 
                From selecting eco-friendly fabrics to creating timeless designs that transcend 
                trends, we're building a brand that respects both people and planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

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