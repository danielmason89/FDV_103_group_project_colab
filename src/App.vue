<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarComponent from './components/SidebarComponent.vue'
</script>

<template>
  <div class="app-container">
    <SidebarComponent />
    <main class="main-content">
      <header class="main-header">
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Page 1</RouterLink>
            <RouterLink to="/page2">Page 2</RouterLink>
            <RouterLink to="/page3">Page 3</RouterLink>
          </nav>
        </div>
      </header>

      <div class="content-area">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-header {
  line-height: 1.5;
  flex-shrink: 0;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.content-area {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  position: relative;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

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

@media (min-width: 1024px) {
  .main-header {
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

    padding: 1rem 0;
  }
}
</style>
