<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppButton from '@/components/AppButton.vue'

const route = useRoute()
const menuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Contact', path: '/contact' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand" @click="closeMenu">
        <img src="@/assets/logo-yadika.png" alt="Yadika" class="brand-logo">
        <span class="brand-text">SMK Yadika Soreang</span>
      </RouterLink>

      <ul class="nav-menu" :class="{ active: menuOpen }">
        <li v-for="link in navLinks" :key="link.path" class="nav-item">
          <RouterLink
            :to="link.path"
            class="nav-link"
            :class="{ active: route.path === link.path }"
            @click="closeMenu"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>

      <div class="navbar-actions">
        <AppButton variant="outline">Login</AppButton>
        <AppButton variant="primary">Register</AppButton>
      </div>

      <button class="menu-toggle" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(10px);
}

.navbar-container {
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--color-heading);
  font-weight: 700;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  flex-shrink: 0;
}

.navbar-brand:hover {
  color: var(--vt-c-blue);
}

.brand-logo {
  height: 32px;
  width: auto;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex: 1;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--vt-c-blue);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--vt-c-blue);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.navbar-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}

.menu-toggle .bar {
  width: 100%;
  height: 3px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle.active .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .navbar-actions {
    display: none;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: var(--color-background);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
  }
}
</style>
