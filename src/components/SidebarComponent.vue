<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Reactive state for sidebar expansion
const isExpanded = ref(true)

// Toggle sidebar expansion
const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <aside :class="['sidebar', { collapsed: !isExpanded }]">
    <div class="sidebar-header">
      <span class="logo-icon">🟢</span>
      <span class="sidebar-title" v-show="isExpanded">CoLab Education</span>
      <span class="minimize-icon" @click="toggleSidebar">
        {{ isExpanded ? '❮' : '❯' }}
      </span>
    </div>
    <nav class="sidebar-nav">
      <RouterLink to="/" class="nav-link">
        <span class="icon">🔲</span>
        <span class="link-text" v-show="isExpanded">Page 1</span>
      </RouterLink>
      <RouterLink to="/page2" class="nav-link">
        <span class="icon">🗂️</span>
        <span class="link-text" v-show="isExpanded">Page 2</span>
      </RouterLink>
      <RouterLink to="/page3" class="nav-link">
        <span class="icon">👥</span>
        <span class="link-text" v-show="isExpanded">Page 3</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
/* Sidebar container */
.sidebar {
  width: 256px;
  height: 100vh;
  background: var(--secondary);
  padding: 1rem 0.5rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease-in-out;
  overflow: hidden;
}

/* Collapsed state */
.sidebar.collapsed {
  width: 72px;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
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
  color: var(--primary);
}

.sidebar-title {
  color: var(--white);
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  flex: 1;
  transition: opacity 0.3s ease-in-out;
}

.minimize-icon {
  color: var(--white);
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 0.3rem;
  transition: transform 0.3s ease-in-out;
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
  white-space: nowrap;
}

.nav-link.router-link-active {
  background: var(--white);
  color: var(--secondary);
  font-weight: bold;
}

.nav-link.router-link-active .icon {
  color: var(--secondary);
}

.link-text {
  white-space: nowrap;
  transition: opacity 0.3s ease-in-out;
}

/* Responsive design */
@media (max-width: 768px) {
  .sidebar {
    width: 70px;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }

  .sidebar-title,
  .link-text {
    display: none;
  }

  .sidebar.expanded {
    width: 250px;
    padding: 1rem 0.5rem 0.5rem 1rem;
  }

  .sidebar.expanded .sidebar-title,
  .sidebar.expanded .link-text {
    display: block;
  }
}
</style>
