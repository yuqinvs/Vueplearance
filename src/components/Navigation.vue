<template>
  <nav class="nav-minimal" :class="{ scrolled: isScrolled }">
    <div class="container-minimal">
      <div class="nav-container">
        <RouterLink to="/" class="nav-brand">
          優雅なひだ
        </RouterLink>
        
        <div class="nav-menu">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/brand-story" class="nav-link">Brand Story</RouterLink>
          <RouterLink to="/products" class="nav-link">Products</RouterLink>
          <RouterLink to="/store" class="nav-link">Store</RouterLink>
          <RouterLink to="/contacts" class="nav-link">Contact</RouterLink>
        </div>
        
        <button class="nav-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div class="nav-mobile" :class="{ active: isMenuOpen }">
        <RouterLink to="/" class="nav-link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/brand-story" class="nav-link" @click="closeMenu">Brand Story</RouterLink>
        <RouterLink to="/products" class="nav-link" @click="closeMenu">Products</RouterLink>
        <RouterLink to="/store" class="nav-link" @click="closeMenu">Store</RouterLink>
        <RouterLink to="/contacts" class="nav-link" @click="closeMenu">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 3px;
}

.nav-toggle span {
  width: 25px;
  height: 2px;
  background: var(--color-primary);
  transition: var(--transition-smooth);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-gray-medium);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-mobile {
    display: none;
  }
  
  .nav-mobile.active {
    display: flex;
  }
  
  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
</style>