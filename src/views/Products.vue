<template>
  <div class="products-minimal">
    <!-- Hero Section -->
    <section class="hero-minimal">
      <div class="hero-content fade-in">
        <h1 class="heading-hero text-serif">
          Products
        </h1>
        <p class="text-body">
          Discover our collection of pleated artistry
        </p>
      </div>
    </section>

    <!-- Collection Overview -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="collection-intro fade-in">
          <div class="text-caption">Collection</div>
          <h2 class="heading-display text-serif space-y-sm">
            Every Fold Tells a Story
          </h2>
          <p class="text-body" style="max-width: 800px; margin: 0 auto;">
            Our carefully curated collection represents the pinnacle of pleated craftsmanship. 
            Each piece is designed to transcend seasons, offering timeless elegance through 
            the transformative power of pleats.
          </p>
        </div>
      </div>
    </section>

    <!-- Product Categories -->
    <section class="section-editorial">
      <div class="container-minimal">
        <div class="products-grid">
          <!-- Everyday Essentials -->
          <div class="product-category slide-in-left">
            <div class="category-image everyday-bg"></div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">Everyday Essentials</h3>
              <p class="text-body">
                Thoughtfully designed pieces that seamlessly integrate into your daily wardrobe. 
                These versatile garments combine comfort with sophistication, featuring subtle 
                pleating that adds texture and movement to classic silhouettes.
              </p>
              <div class="category-features">
                <span class="feature-tag">Comfort Fit</span>
                <span class="feature-tag">Breathable Fabric</span>
                <span class="feature-tag">Easy Care</span>
              </div>
            </div>
          </div>

          <!-- Statement Pieces -->
          <div class="product-category slide-in-right">
            <div class="category-image statement-bg"></div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">Statement Pieces</h3>
              <p class="text-body">
                Bold, architectural designs that showcase the dramatic potential of pleating. 
                These garments are crafted to make an impression, featuring innovative pleat 
                patterns and sculptural forms that celebrate the artistry of our craft.
              </p>
              <div class="category-features">
                <span class="feature-tag">Architectural Design</span>
                <span class="feature-tag">Hand-finished</span>
                <span class="feature-tag">Limited Edition</span>
              </div>
            </div>
          </div>

          <!-- Professional Collection -->
          <div class="product-category slide-in-left">
            <div class="category-image professional-bg"></div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">Professional Collection</h3>
              <p class="text-body">
                Sophisticated pieces designed for the modern professional. These garments 
                feature refined pleating techniques that add visual interest while maintaining 
                a polished, workplace-appropriate aesthetic.
              </p>
              <div class="category-features">
                <span class="feature-tag">Office Ready</span>
                <span class="feature-tag">Wrinkle Resistant</span>
                <span class="feature-tag">Travel Friendly</span>
              </div>
            </div>
          </div>

          <!-- Evening Elegance -->
          <div class="product-category slide-in-right">
            <div class="category-image evening-bg"></div>
            <div class="category-content">
              <div class="text-caption">Category</div>
              <h3 class="heading-large text-serif">Evening Elegance</h3>
              <p class="text-body">
                Luxurious pieces designed for special occasions. These garments feature 
                intricate pleating patterns and premium fabrics that create dramatic 
                silhouettes perfect for evening events and celebrations.
              </p>
              <div class="category-features">
                <span class="feature-tag">Premium Fabric</span>
                <span class="feature-tag">Intricate Pleating</span>
                <span class="feature-tag">Special Occasion</span>
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
          <div class="text-caption">Craftsmanship</div>
          <h2 class="heading-display text-serif space-y-sm">
            The Art of Perfect Pleats
          </h2>
          <div class="craftsmanship-grid">
            <div class="craft-item">
              <h3 class="heading-large text-serif">Fabric Selection</h3>
              <p class="text-body">
                We begin with the finest fabrics, each chosen for its ability to hold 
                a pleat while maintaining its natural drape and movement. Our selection 
                process is rigorous, ensuring only materials that meet our exacting standards.
              </p>
            </div>
            <div class="craft-item">
              <h3 class="heading-large text-serif">Pleat Formation</h3>
              <p class="text-body">
                Using state-of-the-art equipment combined with traditional techniques, 
                each pleat is formed with precision. The process requires perfect timing, 
                temperature, and pressure to create permanent, beautiful folds.
              </p>
            </div>
            <div class="craft-item">
              <h3 class="heading-large text-serif">Heat Setting</h3>
              <p class="text-body">
                The final step involves carefully controlled heat setting that locks 
                each pleat into place. This ensures that your garment will maintain 
                its beautiful structure wash after wash, wear after wear.
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
            Experience Plearance
          </h2>
          <p class="text-body" style="max-width: 600px; margin: 0 auto;">
            Each Plearance piece is more than just clothing — it's a work of art 
            that celebrates the beauty of structure and the poetry of movement. 
            Discover how pleats can transform not just fabric, but how you feel 
            in your clothes.
          </p>
          <div class="cta-buttons space-y-sm">
            <RouterLink to="/store" class="btn-minimal">
              Visit Our Store
            </RouterLink>
            <RouterLink to="/contacts" class="btn-minimal btn-minimal-inverted">
              Schedule Consultation
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
.products-minimal {
  min-height: 100vh;
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
  .product-category,
  .product-category:nth-child(even) {
    grid-template-columns: 1fr;
    direction: ltr;
  }
  
  .category-image {
    height: 250px;
  }
  
  .craftsmanship-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .craft-item {
    padding: 1.5rem;
  }
}
</style>