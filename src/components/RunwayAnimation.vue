<template>
  <div class="runway-container" :class="{ 'fade-out': isFinished }">
    <!-- Film Grain / Noise Overlay -->
    <div class="noise-overlay"></div>
    
    <!-- Volumetric Light Layers -->
    <div class="light-assembly">
      <div class="beam-cone beam-haze"></div>
      <div class="beam-cone beam-glow"></div>
      <div class="beam-cone beam-core"></div>
      <div class="floor-spot"></div>
    </div>

    <!-- Floating Dust Particles -->
    <div class="particles-container">
      <div v-for="n in 30" :key="n" class="dust-mote" :style="getParticleStyle(n)"></div>
    </div>
    
    <!-- Replicate Home.vue hero structure for perfect alignment -->
    <div class="hero-content">
      <h1 class="heading-hero text-serif brand-text">
        Plearance
      </h1>
      <!-- Invisible spacer to match Home.vue layout -->
      <p class="text-body space-y-md spacer-text">
        {{ t.hero.subtitle }}<br>
        <em>{{ t.home.heroSubtitle }}</em>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import translations from '@/locales/translations'

const emit = defineEmits(['finished'])
const isFinished = ref(false)
const languageStore = useLanguageStore()
const t = computed(() => translations[languageStore.currentLanguage])

const getParticleStyle = (n: number) => {
  const delay = Math.random() * -10
  const duration = 10 + Math.random() * 10
  const left = Math.random() * 100
  const top = Math.random() * 100
  const size = 1 + Math.random() * 2
  const opacity = 0.3 + Math.random() * 0.4
  
  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    height: `${size}px`,
    opacity: opacity,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  }
}

onMounted(() => {
  // Sequence of animations
  setTimeout(() => {
    isFinished.value = true
    setTimeout(() => {
      emit('finished')
    }, 2000) // Slow, luxurious fade out
  }, 5500) 
})
</script>

<style scoped>
.runway-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #020202; /* Almost pure black */
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: opacity 2s cubic-bezier(0.22, 1, 0.36, 1); /* Custom ease-out */
  perspective: 1000px;
}

.runway-container.fade-out {
  opacity: 0;
  pointer-events: none;
}

/* Film Grain Texture */
.noise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
  opacity: 0.4;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 20;
}

/* Lighting Assembly */
.light-assembly {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 150%;
  pointer-events: none;
  z-index: 1;
}

.beam-cone {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: top center;
  width: 100%; /* Wide container */
  height: 100%;
  background: conic-gradient(
    from 180deg at 50% 0%, 
    transparent 165deg, 
    rgba(255, 255, 255, 0.8) 180deg, 
    transparent 195deg
  );
  mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
  opacity: 0;
}

/* Haze Layer - Wide and soft */
.beam-haze {
  filter: blur(40px);
  opacity: 0;
  animation: beamPulse 6s ease-in-out infinite alternate, beamReveal 5s ease-out forwards;
  width: 120%; /* Wider */
}

/* Glow Layer - Medium width */
.beam-glow {
  filter: blur(15px);
  background: conic-gradient(
    from 180deg at 50% 0%, 
    transparent 172deg, 
    rgba(139, 157, 195, 0.3) 180deg, 
    transparent 188deg
  );
  opacity: 0;
  animation: beamReveal 5s ease-out 0.2s forwards;
}

/* Core Layer - Sharp and bright */
.beam-core {
  filter: blur(5px);
  background: conic-gradient(
    from 180deg at 50% 0%, 
    transparent 176deg, 
    rgba(255, 255, 255, 0.6) 180deg, 
    transparent 184deg
  );
  opacity: 0;
  animation: beamReveal 5s ease-out 0.4s forwards;
  mix-blend-mode: screen;
}

.floor-spot {
  position: absolute;
  top: 60%; /* Where the beam hits the "floor" */
  left: 50%;
  transform: translateX(-50%) scaleX(3);
  width: 300px;
  height: 100px;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  filter: blur(20px);
  opacity: 0;
  animation: spotReveal 5s ease-out 0.5s forwards;
}

/* Content */
.hero-content {
  text-align: center;
  z-index: 10;
  position: relative;
}

.spacer-text {
  visibility: hidden;
  opacity: 0;
}

.brand-text {
  color: #fff;
  opacity: 0;
  /* Cinematic Text Reveal */
  animation: cinematicReveal 4s cubic-bezier(0.2, 0.8, 0.2, 1) 1.5s forwards;
  letter-spacing: 0.2em; /* Start slightly wider */
  filter: blur(10px);
  will-change: transform, opacity, filter, letter-spacing;
}

/* Particles */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  perspective: 500px;
}

.dust-mote {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
}

/* Animations */
@keyframes beamReveal {
  0% {
    opacity: 0;
    transform: translateX(-50%) scaleY(0.8);
  }
  20% {
    opacity: 0.8; /* Peak intensity */
    transform: translateX(-50%) scaleY(1);
  }
  100% {
    opacity: 0.4; /* Settle to steady state */
    transform: translateX(-50%) scaleY(1);
  }
}

@keyframes beamPulse {
  0% { opacity: 0.3; }
  100% { opacity: 0.5; }
}

@keyframes spotReveal {
  0% {
    opacity: 0;
    transform: translateX(-50%) scaleX(2) scaleY(0.5);
  }
  100% {
    opacity: 0.6;
    transform: translateX(-50%) scaleX(3) scaleY(1);
  }
}

@keyframes cinematicReveal {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: scale(1.1);
    letter-spacing: 0.5em;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
    letter-spacing: -0.02em; /* Match .heading-hero exactly */
  }
}
</style>
