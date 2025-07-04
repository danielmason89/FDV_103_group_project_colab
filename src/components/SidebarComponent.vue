<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="sidebar">
    <h1>Sidebar</h1>
    <nav class="sidebar-nav">
      <RouterLink to="/" class="nav-link">Page 1</RouterLink>
      <RouterLink to="/page2" class="nav-link">Page 2</RouterLink>
      <RouterLink to="/page3" class="nav-link">Page 3</RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 1rem;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid #ddd;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link {
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #e0e0e0;
}

.nav-link.router-link-active {
  background-color: #007bff;
  color: white;
}
</style>
