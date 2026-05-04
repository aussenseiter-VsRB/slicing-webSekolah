<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page home">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Sekolah</h1>
        <p class="hero-subtitle">Building the future through quality education and innovation</p>
        <RouterLink to="/programs" class="btn btn-primary">Explore Programs</RouterLink>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">1000+</span>
          <span class="stat-label">Students</span>
        </div>
        <div class="stat">
          <span class="stat-number">50+</span>
          <span class="stat-label">Teachers</span>
        </div>
        <div class="stat">
          <span class="stat-number">20+</span>
          <span class="stat-label">Programs</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 73px);
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
}

.hero-content {
  max-width: 800px;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--vt-c-blue);
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--vt-c-blue);
}

.stat-label {
  font-size: 1rem;
  color: var(--color-text);
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
