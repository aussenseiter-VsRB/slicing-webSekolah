<template>
  <div class="page about">
    <div class="page-container">
      <h1 class="page-title">About Us</h1>
      <div class="about-content">
        <section class="about-section">
          <h2>Our Mission</h2>
          <p>We are dedicated to providing a world-class education that empowers students to become innovative thinkers, responsible citizens, and lifelong learners. Our commitment to excellence drives everything we do.</p>
        </section>
        <section class="about-section">
          <h2>Our Vision</h2>
          <p>To be a leading educational institution that shapes the future by nurturing creativity, critical thinking, and character in every student who walks through our doors.</p>
        </section>
        <section class="about-section">
          <h2>Our Values</h2>
          <ul class="values-list">
            <li>Excellence in education and character development</li>
            <li>Innovation in teaching methods and learning approaches</li>
            <li>Inclusivity and respect for diversity</li>
            <li>Integrity and ethical conduct in all endeavors</li>
            <li>Collaboration and community engagement</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: calc(100vh - 73px);
}

.page-container {
  max-width: 960px;
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

.about-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--color-background-soft);
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.about-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.about-section p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--color-text);
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.values-list li {
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--color-text);
  line-height: 1.6;
}

.values-list li::before {
  content: '&#10003;';
  position: absolute;
  left: 0;
  color: var(--vt-c-blue);
  font-weight: bold;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-container {
    padding: 2rem 1rem;
  }
}
</style>
