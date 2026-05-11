<template>
  <div class="page programs">
    <div class="page-container">
      <h1 class="page-title">Our Programs</h1>
      <div class="programs-grid">
        <div v-for="program in programs" :key="program.title" class="program-card">
          <div class="program-icon">{{ program.icon }}</div>
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const programs = [
  {
    icon: '📚',
    title: 'Science & Mathematics',
    description: 'Comprehensive curriculum covering physics, chemistry, biology, and advanced mathematics with hands-on laboratory experience.',
  },
  {
    icon: '💻',
    title: 'Technology & Computing',
    description: 'Modern computer science courses including programming, web development, data science, and artificial intelligence fundamentals.',
  },
  {
    icon: '🎨',
    title: 'Arts & Design',
    description: 'Creative programs in visual arts, digital design, music, and performing arts to nurture artistic expression and creativity.',
  },
  {
    icon: '🌍',
    title: 'Languages & Humanities',
    description: 'Language studies in multiple languages alongside history, geography, and social sciences for a well-rounded education.',
  },
  {
    icon: '⚽',
    title: 'Sports & Athletics',
    description: 'Physical education and competitive sports programs including football, basketball, swimming, and track and field.',
  },
  {
    icon: '🔬',
    title: 'Research & Innovation',
    description: 'Advanced research opportunities for students interested in scientific inquiry, innovation, and academic excellence.',
  },
]
</script>

<style scoped>
.programs {
  min-height: calc(100vh - 73px);
}

.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--color-heading);
  text-align: center;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.program-card {
  padding: 2rem;
  background: var(--color-background-soft);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.program-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.program-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.program-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.program-card p {
  color: var(--color-text);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
