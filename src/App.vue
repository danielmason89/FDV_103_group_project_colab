<script setup lang="ts">
// Import Vue Router's RouterView component, which renders the active route's component
import { RouterView } from 'vue-router'

// Import layout components
import SidebarComponent from './components/SidebarComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <!-- Top-level layout container with horizontal layout (Sidebar + Main content) -->
  <div class="app-container">

    <!-- Sidebar navigation panel (typically fixed or scrollable) -->
    <SidebarComponent />

    <!-- Main content area (Header + Routed view) -->
    <main class="main-content">
      <!-- Site-wide header -->
      <HeaderComponent class="wrapper" />

      <!-- Area for dynamic page content rendered via Vue Router -->
      <div class="content-area">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Layout container: full height, horizontal flex layout */
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Main section excluding sidebar */
.main-content {
  flex: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  overflow: hidden;
}

/* Scrollable area for routed components */
.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  position: relative;
}

/* --- Optional global elements (not currently shown in template) --- */

/* Logo styling if included */
.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* Header layout and spacing */
header {
  line-height: 1.5;
  max-height: 100vh;
}

/* Basic nav styles (likely handled inside HeaderComponent) */
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* Responsive layout tweaks for larger screens */
@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
  }
}

</style>
