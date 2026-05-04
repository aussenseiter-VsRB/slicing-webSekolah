<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

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
        <span class="brand-icon">&#127891;</span>
        <span class="brand-text">Sekolah</span>
      </RouterLink>

      <button class="menu-toggle" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

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
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-heading);
  font-weight: 700;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.navbar-brand:hover {
  color: hsla(160, 100%, 37%, 1);
}

.brand-icon {
  font-size: 1.8rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
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
  background: hsla(160, 100%, 37%, 1);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: hsla(160, 100%, 37%, 1);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
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
