<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const userPhoto = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?inc=picture')
    userPhoto.value = response.data.results[0].picture.large
  } catch (error) {
    console.error('Failed to fetch photo:', error)
  }
})
</script>

<template>
  <nav class="flex items-center justify-end" aria-label="Global">
    <div class="flex items-center justify-end">
      <button class="button"><font-awesome-icon class="fa-xl" icon="fa-regular fa-bell" /></button>
      <button class="button">
        <font-awesome-icon class="fa-xl" icon="fa-regular fa-message" />
      </button>
      <img class="profile-image" :src="userPhoto" alt="Random User" />
      <p class="font-semibold font-xs">Alex Samis</p>
      <button><font-awesome-icon class="fa-lg" icon="fa-solid fa-caret-down" /></button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding-right: 2.5rem;
}

nav a {
  color: rgb(33, 31, 31);
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

nav p {
  padding-left: 0.5rem;
}

div .button {
  padding: 0rem 0.75rem;
}

button {
  padding-left: 0.75rem;
}

.profile-image {
  width: 12.5%;
  border-radius: 50%;
  margin: 0rem 0.5rem;
}
</style>
