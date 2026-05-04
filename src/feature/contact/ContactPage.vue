<template>
  <div class="page contact">
    <div class="page-container">
      <h1 class="page-title">Contact Us</h1>
      <div class="contact-wrapper">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <div class="info-item">
            <span class="info-icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>Jl. Pendidikan No. 123, Jakarta, Indonesia</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>(021) 1234-5678</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>info@sekolah.edu</p>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">🕒</span>
            <div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 07:00 - 16:00</p>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent>
          <h2>Send a Message</h2>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="your.email@example.com" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject of your message">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" class="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
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

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2,
.contact-form h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.info-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--color-background-soft);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.info-icon {
  font-size: 1.5rem;
}

.info-item h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-heading);
}

.info-item p {
  color: var(--color-text);
  line-height: 1.5;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-heading);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background-soft);
  color: var(--color-text);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-submit:hover {
  background: hsla(160, 100%, 30%, 1);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .page-container {
    padding: 2rem 1rem;
  }
}
</style>
