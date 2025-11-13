<template>
  <footer class="footer-minimal">
    <div class="footer-connect">
      <div class="container-minimal">
        <div class="connect-content">
          <span class="connect-text">Get connected with us on various platforms ></span>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Shop">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12a4 4 0 1 0 4 4 4 4 0 0 0-4-4"/>
                <path d="M7 21V3h10a4 4 0 0 1 0 8H7"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Amazon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 17l4-4 4 4M4 13v8"/>
                <path d="M22 17l-4-4-4 4M20 13v8"/>
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M12 22v-5"/>
              </svg>
            </a>
            <a href="https://maps.app.goo.gl/ni2LpLzyS744kr9p8" class="social-link" aria-label="Location">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-main">
      <div class="container-minimal">
        <div class="footer-grid">
          <div class="footer-section">
            <h6 class="footer-title">Navigate</h6>
            <div class="footer-links">
              <RouterLink to="/" class="footer-link">Home</RouterLink>
              <RouterLink to="/brand-story" class="footer-link">Brand Story</RouterLink>
              <RouterLink to="/products" class="footer-link">Products</RouterLink>
              <RouterLink to="/store" class="footer-link">Store</RouterLink>
              <RouterLink to="/contacts" class="footer-link">Contact</RouterLink>
            </div>
          </div>
          
          <div class="footer-section footer-brand">
            <h3 class="text-serif">優雅なひだ</h3>
            <p class="footer-description">An independent designer brand inspired by the art of pleats</p>
            <div class="footer-address">
              1 Chome-8-1 Marunouchi, Chiyoda City, Tokyo, 100-0005
            </div>
          </div>
          
          <div class="footer-section">
            <h6 class="footer-title">Contact</h6>
            <div class="footer-links">
              <a href="mailto:support@plearance.com" class="footer-link">
                support@plearance.com
              </a>
              <div class="footer-link">
                1 Chome-8-1 Marunouchi, Chiyoda City, Tokyo, 100-0005
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container-minimal">
        <p class="footer-copyright">© 2024 Plearance. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No additional logic needed for this component
</script>

<style scoped>
.footer-minimal {
  background: var(--color-primary);
  color: var(--color-secondary);
}

.footer-connect {
  background: var(--color-gray-dark);
  padding: 2rem 0;
}

.connect-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.connect-text {
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--color-secondary);
  transition: var(--transition-smooth);
}

.social-link:hover {
  color: var(--color-accent);
  transform: translateY(-2px);
}

.footer-main {
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-title {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition-smooth);
  opacity: 0.8;
}

.footer-link:hover {
  opacity: 1;
  color: var(--color-accent);
}

.footer-brand {
  text-align: center;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-description {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1rem;
}

.footer-address {
  font-size: 0.8rem;
  opacity: 0.7;
  font-style: italic;
}

.footer-bottom {
  border-top: 1px solid var(--color-gray-dark);
  padding: 1.5rem 0;
}

.footer-copyright {
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .connect-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    text-align: left;
  }
}
</style>