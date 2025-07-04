<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <span class="logo-icon">🟢</span>
      <span class="sidebar-title">CoLab Education</span>
      <span class="minimize-icon">❮</span>
    </div>
    <nav class="sidebar-nav">
      <RouterLink to="/" class="nav-link">
        <span class="icon">🔲</span>
        <span class="link-text">Page 1</span>
      </RouterLink>
      <RouterLink to="/page2" class="nav-link">
        <span class="icon">🗂️</span>
        <span class="link-text">Page 2</span>
      </RouterLink>
      <RouterLink to="/page3" class="nav-link">
        <span class="icon">👥</span>
        <span class="link-text">Page 3</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
/* Sidebar container */
.sidebar {
  width: 250px;
  height: 100vh;
  background: #07575b;
  padding: 1rem 0.5rem 0.5rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}

/* Header: logo, title, minimize icon */
.sidebar-header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
}

.logo-icon,
.icon {
  font-size: 1.1rem;
  min-width: 1.1rem;
  text-align: center;
  color: var(--white);
}
.logo-icon {
  font-size: 1.5rem;
  color: var(--primary, #5ecc75);
}

.sidebar-title {
  color: var(--white);
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  flex: 1;
}

.minimize-icon {
  color: var(--white);
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 0.3rem;
}

/* Navigation links */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.5rem 0.7rem;
  text-decoration: none;
  color: var(--white);
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 500;
  transition:
    background 0.2s,
    color 0.2s;
}

.nav-link.router-link-active {
  background: var(--white);
  color: #07575b;
  font-weight: bold;
}

.nav-link.router-link-active .icon {
  color: #07575b;
}

.link-text {
  white-space: nowrap;
}
</style>
